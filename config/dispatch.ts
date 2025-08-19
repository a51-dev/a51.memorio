Object.defineProperty(
  memorio,
  'dispatch',
  {
    writable: false,
    configurable: false,
    enumerable: false,
    value: {

      /**
       * Dispatches a custom event with the specified name and value.
       * @param name The name of the event.
       * @param value The value to pass with the event.
       */
      set: (name: string, value = {}) => {
        dispatchEvent(new CustomEvent(String(name), value))
      },

      /////////////////////////////////////////////////////

      /**
       * Listens for the specified event names and executes the callback when the event is triggered.
       * @param name The name of the event to listen for.
       * @param cb The callback function to execute when the event is triggered.
       * @param flag A flag to indicate whether to remove existing listeners (default is false).
       */
      listen: (name: string, cb: (e: Event) => void = null, flag = false) => {
        if (observer.list?.[name]?.length > 0) observer.remove(name)
        const exec = (e: Event) => cb
          ? setTimeout(() => cb(e), 1)
          : null
        globalThis.addEventListener(name, exec)
        globalThis.events[name] = exec
      },

      /////////////////////////////////////////////////////

      /**
       * Removes the event listener for the specified event names.
       * @param name The name of the event to remove the listener for.
       */
      remove: (name: string) => {
        globalThis.removeEventListener(name, globalThis.events[name])
        delete globalThis.events[name]
      }

    }
  }
)
