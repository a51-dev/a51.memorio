const buildProxy = (obj: Record<string, any>, callback: (props: any) => void, tree: string[] = []): any => {

  // EVENT FUNCTION FOR OBSERVER
  const event = (name: string) => {
    const array = name.split("-")
    array.forEach(
      (x, i) => {
        const command = array.slice(0, i + 1).join("-")
        memorio.dispatch.set(command, { detail: { name: command } })
      }
    )
  }

  ///////////////////////////////////////////////

  // CREATE THE PROXY
  return new Proxy(
    obj,
    {
      get(target: any, prop: any) {

        if (Object.isFrozen(target[prop])) return target[prop]

        try {
          const value = Reflect.get(target, prop)
          if (value && typeof value === "object" && ["Array", "Object"].includes(value.constructor.name)) return buildProxy(value, callback, tree.concat(prop as string))
          return value
        } catch (error) {
          console.error("Error: ", error)
          return false
        }
      },

      set(target: any, prop: string, value: any): boolean {

        if (target[prop] && typeof target[prop] === "object" && Object.isFrozen(target[prop])) {
          console.error(`Error: state "${prop}" is locked`)
          return
        }

        try {

          const path = memorio.obj.path(prop as string, tree)

          callback(
            {
              action: "set",
              path,
              target,
              newValue: value,
              previousValue: Reflect.get(target, prop)
            }
          )

          event("state-" + path.replaceAll(".", "-"))

          Reflect.set(target, prop, value)

          // DEFINE LOCK PROPERTY FUNCTION
          if (target[prop] && typeof target[prop] === "object") {

            Reflect.defineProperty(
              target[prop],
              "lock",
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

          console.error("Error in set trap:", error)
          return false

        }

      },

      deleteProperty(target: any, prop: string | symbol): boolean {
        try {
          const path = memorio.obj.path(prop as string, tree)
          callback({ action: "delete", path, target })
          return Reflect.deleteProperty(target, prop)
        } catch (error) {
          console.error("Error in deleteProperty trap:", error)
          return false
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
      alert("memorio State is compromised, check if you override it and please reload the page")
      for (let i = 1; i < 99999; i++) clearInterval(i)
      stop()
    }
  }, 1000
)

///////////////////////////////////////////////

// DEFINE THE STATE IN GLOBAL
Object.defineProperty(
  globalThis,
  "state",
  {
    enumerable: false,
    configurable: false
  }
)

///////////////////////////////////////////////

// ADD FUNCTION IN STATE IN GLOBAL
Object.defineProperties(
  state,
  {
    list: {
      get() {
        const clone = memorio.array.deepClone(state)
        console.info(clone)
        return
      }
    },

    remove: {
      value(s: string) {
        if (s in state) {
          delete state[s]
          console.debug(`State '${s}' deleted`)
        } else {
          console.error(`'${s}' not exist`)
        }
        return
      },
      writable: false,
      configurable: false
    },

    removeAll: {
      value() {
        state.forEach(
          item => {
            delete state[item[0]]
          }
        )
        return
      },
      writable: false,
      configurable: false
    }

  }

)
