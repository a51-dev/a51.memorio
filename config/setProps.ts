Object.defineProperty(
  global.memorio,
  'setProps',
  {
    value: (root: any, desc: any, options: any) => {
      Object.defineProperty(
        root,
        desc.name,
        options || {
          writable: false,
          configurable: false,
          enumerable: false
        }
      )
      if (options?.lock) Object.freeze(root[desc.name])
    },
    writable: false,
    configurable: false,
    enumerable: false
  }
)

///////////////////////////////////////////////////////////////////////////////

// PROPERTY SETTER
Object.defineProperty(
  global.memorio,
  'setDescription',
  {
    value: (description, obj) => {

      // set tool properties
      Object.defineProperties(
        global.memorio,
        {
          [description.name]: {
            value: obj,
            writable: false,
            configurable: false,
            enumerable: false
          }
        }
      )

      // subCommands
      Object.keys(obj).forEach(function (key) {
        // set tool properties
        Object.defineProperties(
          global.memorio[description.name],
          {
            [key]: {
              writable: false,
              configurable: false,
              enumerable: false
            }
          }
        )
      })

      // generate description
      global.memorio.setProps(
        global.memorio,
        description,
        {
          writable: false,
          configurable: false,
          enumerable: false
        }
      )

    }
  }
)
