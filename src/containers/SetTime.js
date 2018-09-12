import { connect } from 'react-redux'
import SetTime from '../components/SetTime'
import { setTime } from '../actions'

function mapStateToProps({ limitTime }) {
  return {
    limitTime
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTime(time) {
      dispatch(setTime(time))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTime)
