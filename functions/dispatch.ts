const description = {
  name: 'dispatch',
  active: true,
  subCommand: [
    {
      name: 'set',
      version: '0.0.1',
      example: 'memorio.dispatch.set([name, value])',
      author: 'Dario Passariello',
      creationDate: '20231231',
      lastMod: '20240612',
      type: 'function',
      active: true,
      description: 'Dispatches a custom event with the specified name and value.',
      subCommand: []
    }, {
      name: 'listen',
      version: '0.0.1',
      example: 'memorio.dispatch.listen([eventNames, callback=null], flag = true)',
      author: 'Dario Passariello',
      creationDate: '20231231',
      lastMod: '20240612',
      type: 'function',
      active: true,
      description: 'Listens for the specified event names and executes the callback when the event is triggered.',
      subCommand: []
    }, {
      name: 'remove',
      version: '0.0.1',
      example: 'memorio.dispatch.remove([eventNames, callback=null], flag = true)',
      author: 'Dario Passariello',
      creationDate: '20231231',
      lastMod: '20240612',
      type: 'function',
      active: true,
      description: 'Removes the event listener for the specified event names.',
      subCommand: []
    }
  ]
}

///////////////////////////////////////////////////////////////////////////////

const newObj = {

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
    window.addEventListener(name, exec)
    global.events[name] = exec
  },

  /////////////////////////////////////////////////////

  /**
   * Removes the event listener for the specified event names.
   * @param name The name of the event to remove the listener for.
   */
  remove: (name: string) => {
    window.removeEventListener(name, global.events[name])
    delete global.events[name]
  }

}

// ************************************************

global.memorio.setDescription(description, newObj)
