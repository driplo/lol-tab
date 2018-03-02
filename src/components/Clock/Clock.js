import React, { Component } from 'react'
import { format } from 'date-fns'
import './Clock.css'

const getlocaleDate = () =>
  new Date().toLocaleDateString(navigator.locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const setDateTime = () => ({
  time: format(new Date(), 'HH:mm'),
  date: getlocaleDate(),
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
