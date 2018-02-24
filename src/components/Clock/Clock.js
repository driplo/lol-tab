import React, { Component } from 'react'
import moment from 'moment'
import './Clock.css'

const setDateTime = () => ({
  time: moment().format('HH:mm'),
  date: moment().format('LL'),
})

class Clock extends Component {
  constructor() {
    super()
    this.state = setDateTime()
  }

  componentDidMount() {
    this.intervalClock = setInterval(() => this.setState(setDateTime()), 1000)
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
