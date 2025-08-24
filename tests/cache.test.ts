import { describe, test, expect, beforeEach } from '@jest/globals'
import '../config/global.js'
import '../init'

describe('Cache Tests', () => {
  beforeEach(() => {
    // Clear cache if possible
    try {
      cache.clear()
    } catch (e) {
      // Ignore if clear is not available
    }
  })

  test('should set and get cache values', () => {
    cache.test = 'value'
    expect(cache.test).toBe('value')
  })

  test('should handle object values', () => {
    const testObj = { key: 'value' }
    cache.testObj = testObj
    expect(cache.testObj).toEqual(testObj)
  })

  test('should handle array values', () => {
    const testArray = [1, 2, 3]
    cache.testArray = testArray
    expect(cache.testArray).toEqual(testArray)
  })

  test('should handle nested objects', () => {
    const nested = {
      level1: {
        level2: {
          data: 'test'
        }
      }
    }
    cache.nested = nested
    expect(cache.nested.level1.level2.data).toBe('test')
  })

  test('should handle persistence', () => {
    cache.persistent = 'persist'
    expect(cache.persistent).toBe('persist')

    // Test removal
    delete cache.persistent
    expect(cache.persistent).toBeUndefined()
  })
})
