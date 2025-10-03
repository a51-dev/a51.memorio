Object.defineProperty(
  window,
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

export { }
