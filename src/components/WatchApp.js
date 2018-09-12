import React from 'react'
import '../App.css'
import SetTime from '../containers/SetTime'

export default class WatchApp extends React.Component {
  constructor(props) {
    super(props)
    this.displayTime = this.displayTime.bind(this)
  }

  displayTime() {
    const counter = this.props.timerCounter
    const sec = '0' + (counter % 60)
    const min = '0' + Math.floor(counter / 60)
    return (
      <div>
        <span className="min">{min.substr(min.length - 2, 2)}</span>
        <span className="sec">{sec.substr(sec.length - 2, 2)}</span>
      </div>
    )
  }

  render() {
    const { timerId, moveTimer, clearTimer, timeOver } = this.props
    return (
      <div className={timeOver ? 'App over' : 'App'}>
        <div className="display">{this.displayTime()}</div>
        <div className="button">
          <button
            onClick={() => {
              moveTimer()
            }}
          >
            {timerId ? (
              <i className="fas fa-pause" />
            ) : (
              <i className="fas fa-play" />
            )}
          </button>
          <button
            onClick={() => {
              clearTimer()
            }}
          >
            <i className="fas fa-undo" />
          </button>
        </div>
        <SetTime />
      </div>
    )
  }
}
