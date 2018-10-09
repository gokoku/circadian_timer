import { reducer } from './index'

describe('Reducer', () => {
  it('初期値', () => {
    const state = undefined
    const action = {}
    const result = reducer(state, action)
    const expected = {
      timerCounter: 0,
      timerId: null,
      limitTime: 0,
      timeOver: false
    }
    expect(result).toEqual(expected)
  })

  it('START_TIMER action', () => {
    const state = {}
    const action = {
      type: 'START_TIMER',
      payload: {
        timerId: 10
      }
    }
    const result = reducer(state, action)
    const expected = {
      timerId: 10
    }
    expect(result).toEqual(expected)
  })

  it('STOP_TIMER アクション', () => {
    const state = {}
    const action = {
      type: 'STOP_TIMER'
    }
    const expected = {
      timerId: null
    }
    const result = reducer(state, action)
    expect(result).toEqual(expected)
  })

  it('INCREMENT_COUNTER', () => {
    const state = {
      timerCounter: 1
    }
    const action = {
      type: 'INCREMENT_COUNTER'
    }
    const expected = {
      timerCounter: 2
    }
    const result = reducer(state, action)
    expect(result).toEqual(expected)
  })

  it('RESET_TIMER', () => {
    const state = {}
    const action = {
      type: 'RESET_TIMER'
    }
    const expected = {
      timerId: null,
      timerCounter: 0,
      timeOver: false
    }
    const result = reducer(state, action)
    expect(result).toEqual(expected)
  })

  it('SET_TIME', () => {
    const state = {}
    const action = {
      type: 'SET_TIME',
      payload: {
        limitTime: 30
      }
    }
    const expected = {
      limitTime: 30
    }
    const result = reducer(state, action)
    expect(result).toEqual(expected)
  })

  it('TIME_OVER', () => {
    const state = {
      timeOver: false
    }
    const action = {
      type: 'TIME_OVER',
      payload: {
        timeOver: true
      }
    }
    const expected = {
      timeOver: true
    }
    const result = reducer(state, action)
    expect(result).toEqual(expected)
  })
})
