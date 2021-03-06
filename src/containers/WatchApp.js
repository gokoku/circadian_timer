import { connect } from 'react-redux'
import WatchApp from '../components/WatchApp'
import { moveStartTimer, moveStopTimer, clearTimer } from '../actions'

function mapStateToProps({ timeOver, timerCounter, timerId }) {
  return {
    timerCounter,
    timerId,
    timeOver
  }
}

function mapDispatchToProps(dispatch) {
  return {
    moveStartTimer() {
      dispatch(moveStartTimer())
    },
    moveStopTimer() {
      dispatch(moveStopTimer())
    },
    clearTimer() {
      dispatch(clearTimer())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchApp)
