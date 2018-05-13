import React, { Component } from 'react'
import { connect } from 'react-redux'
import BackgroundSplash from './layouts/BackgroundSplash'
import Clock from './components/Clock/Clock'
import PanelsWrapper from './components/PanelsWrapper/PanelsWrapper'
import Reddit from './components/Reddit/Reddit'
import Twitch from './components/Twitch/Twitch'
// import SidePanel from './components/SidePanel/SidePanelContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      splash: '',
    }
  }

  componentDidMount() {
    this.setState({
      splash: localStorage.getItem('splash')
        ? localStorage.getItem('splash')
        : 'https://na.leagueoflegends.com/sites/default/files/upload/art/teambuilder-wallpaper.jpg',
    })
  }

  render() {
    const { splash } = this.state

    return (
      <BackgroundSplash splash={splash}>
        {/* <SidePanel /> */}
        <Clock />
        <PanelsWrapper>
          <Reddit />
          <Twitch />
        </PanelsWrapper>
      </BackgroundSplash>
    )
  }
}

export default connect()(App)
