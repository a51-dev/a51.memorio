if (!globalThis.observer) globalThis.observer = null

Object.defineProperty(
  globalThis,
  'observer',
  {
    enumerable: false
  }
)

///////////////////////////////////////////////////////////////////////////////
// START OBSERVER FUNCTION

observer = (s, cb = null, option = true) => {

  // CHECK IF 'STATE.' OR 'STORE.' EXIST
  const checkStateOrStore = (s: string) => {
    const t = s.split('.')
    if (t[0] !== 'state') {
      console.error(`Observer Error: You need to declare 'state.' or 'store.'. The '${s}' string is incorrect!`)
      return false
    }
    return true
  }

  if (!checkStateOrStore(s)) return

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // LIST ALL ARRAY FROM STATE
  if (!s && !cb) {
    console.error('Observer Error: You need to setup observer correctly, Some parameters are missed!')
    return
  }

  ////////////////////////////

  // CHECK
  if (!s && cb) {
    console.error(`Observer Error: You need to declare what state need to be monitored as string like 'state.test'.`)
    return
  }

  ////////////////////////////

  // RECALL
  if (s && !cb) {
    globalThis.memorio.dispatch.listen(
      String(s),
      {
        detail: {
          name: String(s)
        }
      } as any
    )

    console.debug('called: ', s)
    return
  }

  ////////////////////////////

  // SETUP
  if (s && cb) {
    if (typeof s !== 'string' || typeof cb !== 'function') {
      console.error(`Observer Error: name of state need to be a 'string' like 'state.test' and the callback need to be a 'function'`)
      return
    }

    globalThis.memorio.dispatch.listen(s, cb, option)
    return
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Object.defineProperties(
  observer,
  {

    /**
     * See the list of all your observer (eventListener) actually installed.
     * @returns The list of all installed observers.
     */
    list: {
      get: () => globalThis.events
    },

    /////////////////////////////////////////////////////

    /**
     * Remove an observer.
     * @param name The name of the observer to remove.
     */
    remove: {
      value: (name: any) => {
        if (!name) return
        globalThis.events[name] = ''
        return
      }
    },

    /////////////////////////////////////////////////////

    /**
     * Remove all observers.
     * @returns void
     */
    removeAll: {
      get: () => {
        Object.entries(observer.list).forEach((el: any) => {
          globalThis.events[el[0]]
        })
        return
      }
    }

  }
)

Object.freeze(observer)
