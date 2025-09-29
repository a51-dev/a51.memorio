
import { jest } from '@jest/globals'

// Mock localStorage and sessionStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn()
}

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn()
}

Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock })
Object.defineProperty(globalThis, 'sessionStorage', { value: sessionStorageMock })

// Mock navigator.storage
Object.defineProperty(globalThis, 'navigator', {
  value: {
    storage: {
      estimate: () => Promise.resolve({ usage: 0, quota: 1000000 })
    }
  }
})

// Initialize global objects
globalThis.state = {}
globalThis.store = {
  get: jest.fn(key => null),
  set: jest.fn((key, value) => true),
  remove: jest.fn(() => true),
  removeAll: jest.fn(() => true),
  delete: jest.fn(() => true),
  clearAll: jest.fn(() => true),
  quota: jest.fn(() => ({ usage: 0, quota: 1000000 })),
  size: jest.fn(() => 0)
}
globalThis.cache = {}
// globalThis.observer = jest.fn()
