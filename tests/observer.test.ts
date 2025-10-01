import { describe, test, expect, jest, beforeEach } from '@jest/globals'
import '../config/global.js'

// Initialize memorio object first
if (!globalThis.memorio) {
  Object.defineProperty(globalThis, 'memorio', {
    value: {},
    writable: false,
    enumerable: false
  })
}

// Then import other modules
import { buildProxy } from '../functions/state/index.js'
import '../init.js'

describe('Observer Tests', () => {
  beforeEach(() => {
    // Reset state for each test
    globalThis.state = buildProxy({}, () => { })
  })

  test('should observe state changes', async () => {
    const mockCallback = jest.fn()
    observer('state.test', mockCallback)

    state.test = 'value'

    // Observer events are async, so we need to wait
    await new Promise(resolve => setTimeout(resolve, 100))
    expect(mockCallback).toHaveBeenCalled()
  })

  test('should handle multiple observers', async () => {
    const mockCallback1 = jest.fn()
    const mockCallback2 = jest.fn()

    observer('state.test', mockCallback1)
    observer('state.test', mockCallback2)

    state.test = 'value'

    await new Promise(resolve => setTimeout(resolve, 100))
    expect(mockCallback1).toHaveBeenCalled()
    expect(mockCallback2).toHaveBeenCalled()
  })

  test('should observe nested state changes', async () => {
    const mockCallback = jest.fn()

    // Initialize nested state structure first
    state.nested = {}
    observer('state.nested.deep', mockCallback)

    // Then set the deep value
    state.nested.deep = 'value'

    await new Promise(resolve => setTimeout(resolve, 100))
    expect(mockCallback).toHaveBeenCalled()
  })
})
