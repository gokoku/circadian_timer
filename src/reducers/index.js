const initialState = {
  timerCounter: 0,
  timerId: null,
  limitTime: 0,
  timeOver: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        timerId: action.payload.timerId
      }
    case 'STOP_TIMER':
      return {
        ...state,
        timerId: null
      }
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        timerCounter: state.timerCounter + 1
      }
    case 'RESET_TIMER':
      return {
        ...state,
        timerId: null,
        timerCounter: 0,
        timeOver: false
      }
    case 'SET_TIME':
      return {
        ...state,
        limitTime: action.payload.limitTime
      }
    case 'TIME_OVER':
      return {
        ...state,
        timeOver: action.payload.timeOver
      }
    default:
      return state
  }
}
