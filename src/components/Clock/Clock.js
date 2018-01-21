import React, { Component } from 'react'
import moment from 'moment'
import './Clock.css'

class Clock extends Component {
  constructor() {
    super()
    this.state = {
      time: moment().format('HH:mm'),
      date: moment().format('LL'),
    }
  }

  componentDidMount() {
    this.intervalClock = setInterval(
      () =>
        this.setState({
          date: moment().format('LL'),
          time: moment().format('HH:mm'),
        }),
      1000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalClock)
  }

  render() {
    const { time, date } = this.state

    return (
      <div className="Clock">
        <span className="time">{time}</span>
        <div className="date">{date}</div>
      </div>
    )
  }
}

export default Clock
