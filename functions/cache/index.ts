Object.defineProperty(
  window,
  "cache",
  {
    value: new Proxy({}, {}),
    enumerable: false,
    configurable: false
  }
)

// Object.defineProperties(
//   cache,
//   {
//     get: {},
//     set: {}
//   }
// )

export { }
