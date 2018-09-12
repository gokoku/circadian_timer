import React, { Component } from 'react'

export default class SetTime extends Component {
  render() {
    const { limitTime, setTime } = this.props
    const list = [0, 15 * 60, 30 * 60, 45 * 60].map(function(item, index) {
      if (limitTime === item)
        return (
          <li key={index} className="active" onClick={() => setTime(item)}>
            {item / 60} min
          </li>
        )
      else
        return (
          <li key={index} onClick={() => setTime(item)}>
            {item / 60} min
          </li>
        )
    })
    return <ul>{list}</ul>
  }
}
