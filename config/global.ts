import p from '../package.json'

/////////////////////////////////////

Object.defineProperty(
  globalThis,
  'memorio',
  {
    value: {},
    writable: false,
    configurable: false,
    enumerable: false
  }
)

Object.defineProperty(
  globalThis,
  'events',
  {
    value: {},
    writable: true,
    configurable: false,
    enumerable: false
  }
)

Object.defineProperty(
  memorio,
  'version',
  {
    writable: false,
    configurable: false,
    enumerable: false,
    value: p.version
  }
)
