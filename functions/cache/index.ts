
Object.defineProperty(
  globalThis,
  "cache",
  {
    value: new Proxy({}, {}),
    enumerable: false,
    configurable: true
  }
)

// Object.defineProperties(
//   cache,
//   {
//     get: {},
//     set: {}
//   }
// )

Object.freeze(cache)
