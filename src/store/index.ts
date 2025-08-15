
Object.defineProperty(
  globalThis,
  "store",
  {
    value: new Proxy({}, {}),
    enumerable: false,
    configurable: false
  }
)

Object.defineProperties(
  store,
  {
    get: {
      value(name: string) {
        if (!name) return
        try {
          const item = localStorage.getItem(name)
          if (item) return JSON.parse(item)
          return item
        } catch (err) {
          console.error(`Error parsing store item "${name}":`, err)
        }
      }
    },

    set: {
      value(name: string, value: any) {
        if (!name) return
        try {

          if (value === null || value === undefined) localStorage.setItem(name, JSON.stringify(null))
          else if (typeof value === "object" || typeof value === "number" || typeof value === "boolean" || typeof value === "string") localStorage.setItem(name, JSON.stringify(value))
          else if (typeof value === "function") console.error("It's not secure to store functions.")

        } catch (err) {

          console.error(`Error setting store item "${name}":`, err)

        }
      }
    },

    remove: {
      value(name: string) {
        if (!name) return
        if (localStorage.getItem(name)) {
          localStorage.removeItem(name)
          return true
        }
      }
    },

    delete: {
      value(name: string) {
        store.remove(name)
      }

    },

    removeAll: {
      value() {
        localStorage.clear()
        return true
      }
    },

    clearAll: {
      value() {
        store.removeAll()
        return true
      }
    },

    quota: {
      value() {
        if ('storage' in navigator && 'estimate' in navigator.storage) {
          navigator.storage.estimate()
            .then(
              ({ usage, quota }) => {
                if (usage && quota) console.debug(`Using ${usage / 1024} out of ${quota / 1024} Mb.`)
              }
            )
            .catch(err => { console.error("Error estimating quota:", err) })
        }
      }
    },

    size: {
      value() {
        let totalSize = 0
        for (const key in localStorage) {
          if (localStorage.hasOwnProperty(key)) {
            const item = localStorage.getItem(key)
            if (item) {
              totalSize += item.length
            }
          }
        }
        return totalSize
      }
    }

  }
)

Object.freeze(store)
