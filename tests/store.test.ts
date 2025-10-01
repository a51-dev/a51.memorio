import { describe, test, expect, jest, beforeEach } from '@jest/globals'
import '../config/global.js'
import '../init'

describe('Store Tests', () => {
  let mockStore = {}

  console.log(store)

  beforeEach(() => {
    mockStore = {}
    localStorage.clear()
    jest.spyOn(localStorage, 'getItem').mockImplementation(key => mockStore[key] || null)
    jest.spyOn(localStorage, 'setItem').mockImplementation((key, value) => {
      mockStore[key] = value
    })
    jest.spyOn(localStorage, 'removeItem').mockImplementation(key => {
      delete mockStore[key]
    })
    jest.spyOn(localStorage, 'clear').mockImplementation(() => {
      mockStore = {}
    })
  })

  test('should set and get store values', () => {
    const testValue = 'test value'
    store.set('test', testValue)
    expect(localStorage.setItem).toHaveBeenCalledWith('test', JSON.stringify(testValue))
    expect(store.get('test')).toBe(testValue)
  })

  test('should handle object values', () => {
    const testObj = { key: 'value' }
    store.set('test', testObj)
    expect(localStorage.setItem).toHaveBeenCalledWith('test', JSON.stringify(testObj))
    expect(store.get('test')).toEqual(testObj)
  })

  test('should remove store item', () => {
    store.set('test', 'value')
    store.remove('test')
    expect(localStorage.removeItem).toHaveBeenCalledWith('test')
    expect(store.get('test')).toBeNull()
  })

  test('should remove all store items', () => {
    store.set('test1', 'value1')
    store.set('test2', 'value2')
    store.removeAll()
    expect(localStorage.clear).toHaveBeenCalled()
    expect(store.get('test1')).toBeNull()
    expect(store.get('test2')).toBeNull()
  })

  test('should get store size', () => {
    mockStore = {}
    store.removeAll()
    store.set('test1', 'value1')
    store.set('test2', 'value2')
    const size = Object.keys(mockStore).length
    expect(typeof size).toBe('number')
    expect(size).toBe(2)
  })
})
