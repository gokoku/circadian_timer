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
  it('moveTimer Action', () => {


    const expected = [
      {
        type: "STOP_TIMER",
        payload: {
          timerId: null
        }
      }
    ]
    const store = mockStore()
    store.setState({timerId: null})
    store.dispatch(actions.moveTimer())

    expect(store.getActions()).toEqual(expected)

  })
})
