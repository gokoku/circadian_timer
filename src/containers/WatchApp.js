import { connect } from 'react-redux'
import WatchApp from '../components/WatchApp'
import { moveTimer, clearTimer } from '../actions'

function mapStateToProps({ timeOver, timerCounter, timerId }) {
  return {
    timerCounter,
    timerId,
    timeOver
  }
}

function mapDispatchToProps(dispatch) {
  return {
    moveTimer() {
      dispatch(moveTimer())
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
