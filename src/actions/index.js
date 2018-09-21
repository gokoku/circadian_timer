const startTimer = id => ({
  type: 'START_TIMER',
  payload: {
    timerId: id
  }
})
const stopTimer = () => ({
  type: 'STOP_TIMER',
  payload: {
    timerId: null
  }
})

const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER'
})

const resetTimer = () => {
  return {
    type: 'RESET_TIMER'
  }
}

export const setTime = time => ({
  type: 'SET_TIME',
  payload: {
    limitTime: time
  }
})

export const timeOverTime = result => {
  return {
    type: 'TIME_OVER',
    payload: {
      timeOver: result
    }
  }
}

export const moveStartTimer = () => {
  return (dispatch, getState) => {
    const id = setInterval(() => {
      dispatch(checkTimer())
      dispatch(incrementCounter())
    }, 1000)
    dispatch(startTimer(id))
  }
}

export const moveStopTimer = () => {
  return (dispatch, getState) => {
    const { timerId } = getState()
    clearInterval(timerId)
    dispatch(stopTimer())
  }
}

export const clearTimer = () => {
  return (dispatch, getState) => {
    const { timerId } = getState()
    if (timerId) {
      clearInterval(timerId)
    }
    dispatch(resetTimer())
  }
}

export const checkTimer = () => {
  return (dispatch, getState) => {
    const { timerCounter, limitTime, timeOver } = getState()
    if (limitTime !== 0 && timerCounter >= limitTime && timeOver === false) {
      dispatch(timeOverTime(true))
    }
  }
}
