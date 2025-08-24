import { describe, test, expect } from '@jest/globals'
import '../init'

// Basic state management tests
describe('Basic State Tests', () => {
  test('State should exist globally', () => {
    expect(globalThis.state).toBeDefined()
  })

  test('Should set and get a simple value', () => {
    state.testValue = 'hello'
    expect(state.testValue).toBe('hello')
  })

  test('Should handle number values', () => {
    state.number = 42
    expect(state.number).toBe(42)
  })
})

// Object state tests
describe('Object State Tests', () => {
  test('Should handle object values', () => {
    state.obj = { key: 'value' }
    expect(state.obj.key).toBe('value')
  })

  test('Should handle nested objects', () => {
    state.nested = {
      level1: {
        level2: 'deep'
      }
    }
    expect(state.nested.level1.level2).toBe('deep')
  })
})

// Array state tests
describe('Array State Tests', () => {
  test('Should handle array values', () => {
    state.array = [1, 2, 3]
    expect(state.array).toEqual([1, 2, 3])
  })

  test('Should allow array mutations', () => {
    state.array = [1, 2]
    state.array.push(3)
    expect(state.array).toEqual([1, 2, 3])
  })
})
