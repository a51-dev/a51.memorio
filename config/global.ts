import p from '../package.json'

/////////////////////////////////////

Object.defineProperty(
  global,
  'memorio',
  {
    value: {},
    writable: false,
    configurable: false,
    enumerable: false
  }
)

Object.defineProperty(
  global,
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
