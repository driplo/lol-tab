import React, { Component } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import './Clock.css'

const getlocaleDate = locale =>
  new Date().toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const setDateTime = locale => ({
  time: format(new Date(), 'HH:mm'),
  date: getlocaleDate(locale),
})

class Clock extends Component {
  constructor(props) {
    super()
    this.state = setDateTime()
  }

  componentDidMount() {
    const { locale } = this.props
    this.intervalClock = setInterval(
      () => this.setState(setDateTime(locale)),
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

const mapStateToProps = state => ({
  locale: state.CONFIG.LOCALE,
})

export default connect(mapStateToProps)(Clock)
