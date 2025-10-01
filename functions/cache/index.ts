Object.defineProperty(
  window,
  "cache",
  {
    value: new Proxy({}, {}),
    enumerable: false
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
