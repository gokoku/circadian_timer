import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions', () => {
  it('setTime Action', () => {
    const time = 10
    const result = actions.setTime(time)
    const expected = {
      type: 'SET_TIME',
      payload: {
        limitTime: time
      }
    }
    expect(result).toEqual(expected)
  }),
    it('timeOverTime Action', () => {
      const time = 10
      const result = actions.timeOverTime(time)
      const expected = {
        type: 'TIME_OVER',
        payload: {
          timeOver: time
        }
      }
      expect(result).toEqual(expected)
    }),
    it('moveStopTimer Action', () => {
      const expected = [
        {
          type: 'STOP_TIMER',
          payload: {
            timerId: null
          }
        }
      ]
      const store = mockStore()
      store.dispatch(actions.moveStopTimer())
      expect(store.getActions()).toEqual(expected)
    }),
    it('clearTimer Action', () => {
      const expected = [
        {
          type: 'RESET_TIMER'
        }
      ]
      const store = mockStore()
      store.dispatch(actions.clearTimer())
      expect(store.getActions()).toEqual(expected)
    }),
    it('moveStartTimer Action', () => {
      const expected = id => [
        {
          type: 'START_TIMER',
          payload: {
            timerId: id
          }
        }
      ]
      const store = mockStore()
      store.dispatch(actions.moveStartTimer())
      const { timerId } = store.getActions()[0].payload
      expect(store.getActions()).toEqual(expected(timerId))
    }),
    it('ckeckTimer Action', () => {
      const expected = [
        {
          type: 'TIME_OVER',
          payload: {
            timeOver: true
          }
        }
      ]
      const store = mockStore({
        timerCounter: 10,
        limitTime: 9,
        timeOver: false
      })
      store.dispatch(actions.checkTimer())
      expect(store.getActions()).toEqual(expected)
    })
})
