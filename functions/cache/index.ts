/*!
  dphelper
  Copyright (c) 2019 Dario Passariello <dariopassariello@gmail.com>
  Licensed under MIT License, see
  https://dario.passariello.ca
*/

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
