import { protect } from "../../config/global.js"

if (!Object.getOwnPropertyDescriptor(memorio, 'objPath')) {

  Object.defineProperty(
    memorio,
    'objPath',
    {
      // configurable: true,
      writable: false,
      enumerable: false,
      value: (prop: string, object: string[], separator: string = '.'): string => {
        return object.concat(prop).join(separator)
      }
    }
  )

}

/////////////////////////////////////////////////////

export const buildProxy = (obj: Record<string, any>, callback: (props: any) => void, tree: string[] = []): any => {

  // EVENT FUNCTION FOR OBSERVER
  const event = (name: string) => {
    const array = name.split('.')
    array.forEach(
      (x, i) => {
        const command = array.slice(0, i + 1).join('.')
        globalThis.memorio.dispatch.set(command, { detail: { name: command } })
      }
    )
    return
  }

  ///////////////////////////////////////////////

  // CREATE THE PROXY
  return new Proxy(
    obj,
    {
      get(target: any, prop: any) {
        // Handle special methods first

        if (prop === 'list') {
          console.log('Some state could be hidden when you use "state.list". Use "state" to see the complete list ')
          return JSON.parse(JSON.stringify(state))
        }

        if (prop === 'remove') {
          return function (key: string) {
            delete target[key]
            return true
          }
        }

        if (prop === 'removeAll') {
          return function () {
            try {
              for (const key in target) {
                if (typeof target[key] !== 'function' && !['list', 'remove', 'removeAll'].includes(key)) {
                  if (!Object.isFrozen(target[key])) delete target[key]
                  delete target[key]
                }
              }
            } catch (error) {
              console.error(error)
            }
            return
          }
        }

        if (Object.isFrozen(target[prop])) return target[prop]

        try {
          const value = Reflect.get(target, prop)
          if (value && typeof value === 'object' && ['Array', 'Object'].includes(value.constructor.name)) {
            return buildProxy(value, callback, tree.concat(prop as string))
          }
          return value
        } catch (error) {
          console.error('Error: ', error)
          return undefined
        }

      },

      set(target: any, key: string, value: any): boolean {

        // PROTECTED
        if (protect.includes(key)) {
          console.error('key ' + key + ' is protected')
          return false
        }

        // FREEZED
        if (target[key] && typeof target[key] === 'object' && Object.isFrozen(target[key])) {
          console.error(`Error: state '${key}' is locked`)
          return false
        }

        // ALLOWED SET

        try {

          const path = globalThis.memorio.objPath(key as string, tree)

          callback(
            {
              action: 'set',
              path,
              target,
              newValue: value,
              previousValue: Reflect.get(target, key)
            }
          )

          event('state.' + path)

          Reflect.set(target, key, value)

          // DEFINE LOCK PROPERTY FUNCTION
          if (target[key] && typeof target[key] === 'object') {

            Reflect.defineProperty(
              target[key],
              'lock',
              {
                value() {
                  Object.defineProperty(
                    target,
                    key,
                    {
                      writable: false,
                      enumerable: false
                    }
                  )

                  Object.freeze(target[key])
                }
              }
            )

          }

          return true

        } catch (error) {

          console.error('Error in set trap:', error)
          return

        }

      },

      deleteProperty(target: any, prop: string | symbol): boolean {
        try {
          const path = globalThis.memorio.objPath(prop as string, tree)
          callback({ action: 'delete', path, target })
          return Reflect.deleteProperty(target, prop)
        } catch (error) {
          console.error('Error in deleteProperty trap:', error)
          return
        }
      }

    }

  )

}

// SET STATE AS PROXY
!globalThis?.state
  ? globalThis.state = buildProxy({}, () => { })
  : globalThis.state = state

///////////////////////////////////////////////

// TEST IF STATE IS A PROXY
const testProxy = new WeakSet()

testProxy.add(state)

setInterval(
  () => {
    if (!testProxy.has(state)) {
      alert('Memorio state is compromised, check if you override it and please reload the page')
      for (let i = 1; i < 99999; i++) clearInterval(i)
      stop()
    }
    return
  }, 1000
)

///////////////////////////////////////////////

// DEFINE THE STATE IN GLOBAL
if (!Object.getOwnPropertyDescriptor(globalThis, 'state')) {

  Object.defineProperty(
    globalThis,
    'state',
    {
      enumerable: false,
      configurable: true
    }
  )

}

///////////////////////////////////////////////

// END
