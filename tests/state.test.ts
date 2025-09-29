import { describe, test, expect, beforeEach } from '@jest/globals'
import '../config/global.js'
import { buildProxy } from '../functions/state/index.js'
import '../init'

describe('State Management', () => {

  beforeEach(() => {
    // Reset state by creating a new proxy
    globalThis.state = buildProxy({}, () => { })
  })

  test('should set and get state value', () => {
    state.test = 'value'
    expect(state.test).toBe('value')
  })

  test('should list all states', () => {
    state.test1 = 'value1'
    state.test2 = 'value2'
    const list = state.list
    expect(list).toHaveProperty('test1')
    expect(list).toHaveProperty('test2')
  })

  test('should remove state', () => {
    state.t = 'value'
    state.remove('t')
    expect(state.t).toBeUndefined()
  })

  test('should remove all states', () => {
    state.test1 = 'value1'
    state.test2 = 'value2'
    state.removeAll()
    expect(state.list).toEqual({})
  })

  test('should lock object state', () => {
    state.test = { prop: 'value' }
    state.test.lock()
    expect(() => {
      state.test.newProp = 'value'
    }).toThrow()
  })
})
