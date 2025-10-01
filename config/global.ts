import p from '../package.json' with { type: "json" }

/////////////////////////////////////

Object.defineProperty(
  globalThis,
  'memorio',
  {
    value: {},
    writable: false,
    configurable: true,
    enumerable: false
  }
)

Object.defineProperty(
  globalThis,
  'events',
  {
    value: {},
    writable: true,
    enumerable: false
  }
)

Object.defineProperty(
  memorio,
  'version',
  {
    writable: false,
    enumerable: false,
    value: p.version
  }
)

export const protect = [
  'list',
  'state',
  'store',
  'observer',
  'remove',
  'removeAll'
]
