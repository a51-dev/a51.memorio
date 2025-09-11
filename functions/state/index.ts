Object.defineProperty(
  memorio,
  'objPath',
  {
    writable: false,
    configurable: false,
    enumerable: false,
    value: (prop: string, object: string[], separator: string = '.'): string => {
      return object.concat(prop).join(separator)
    }
  }
)

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
          const result = {}
          for (const key in target) {
            if (typeof target[key] !== 'function' && !['list', 'remove', 'removeAll'].includes(key)) {
              result[key] = target[key]
            }
          }
          return result
        }

        if (prop === 'remove') {
          return function (key: string) {
            if (key in target && !['list', 'remove', 'removeAll'].includes(key)) {
              delete target[key]
              return true
            }
            return false
          }
        }

        if (prop === 'removeAll') {
          return function () {
            for (const key in target) {
              if (typeof target[key] !== 'function' && !['list', 'remove', 'removeAll'].includes(key)) {
                delete target[key]
              }
            }
            return true
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

      set(target: any, prop: string, value: any): boolean {

        if (target[prop] && typeof target[prop] === 'object' && Object.isFrozen(target[prop])) {
          console.error(`Error: state '${prop}' is locked`)
          return
        }

        try {

          const path = globalThis.memorio.objPath(prop as string, tree)

          callback(
            {
              action: 'set',
              path,
              target,
              newValue: value,
              previousValue: Reflect.get(target, prop)
            }
          )

          event('state.' + path)

          Reflect.set(target, prop, value)

          // DEFINE LOCK PROPERTY FUNCTION
          if (target[prop] && typeof target[prop] === 'object') {

            Reflect.defineProperty(
              target[prop],
              'lock',
              {
                value() {
                  Object.defineProperty(
                    target,
                    prop,
                    {
                      writable: false,
                      enumerable: false
                      // configurable: false
                    }
                  )

                  Object.freeze(target[prop])
                }
              }
            )

          }

          return true

        } catch (error) {

          console.error('Error in set trap:', error)
          return false

        }

      },

      deleteProperty(target: any, prop: string | symbol): boolean {
        try {
          const path = globalThis.memorio.objPath(prop as string, tree)
          callback({ action: 'delete', path, target })
          return Reflect.deleteProperty(target, prop)
        } catch (error) {
          console.error('Error in deleteProperty trap:', error)
          return false
        }
      }

    }

  )

}

// Initialize base state object
const baseState = {}

// SET STATE AS PROXY
!globalThis?.state
  ? globalThis.state = buildProxy(baseState, () => { })
  : globalThis.state = state

///////////////////////////////////////////////

// TEST IF STATE IS A PROXY
const testProxy = new WeakSet()

testProxy.add(state)

setInterval(
  () => {
    if (!testProxy.has(state)) {
      alert('memorio state is compromised, check if you override it and please reload the page')
      for (let i = 1; i < 99999; i++) clearInterval(i)
      stop()
    }
    return
  }, 1000
)

///////////////////////////////////////////////

// DEFINE THE STATE IN GLOBAL
Object.defineProperty(
  globalThis,
  'state',
  {
    enumerable: false,
    configurable: false
  }
)

///////////////////////////////////////////////

// END
