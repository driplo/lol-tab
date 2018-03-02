import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLanguage } from './actions/config'

import BackgroundSplash from './layouts/BackgroundSplash'
import Clock from './components/Clock/Clock'
import OptionButton from './components/Options/OptionsButton/OptionButton'
import OptionsPopin from './components/Options/OptionsPopin/OptionsPopin'
import PanelsWrapper from './components/PanelsWrapper/PanelsWrapper'
import Reddit from './components/Reddit/Reddit'
import Twitch from './components/Twitch/Twitch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      splash: '',
    }
  }

  componentWillMount() {
    setLanguage(this.props)
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
        {/* <OptionButton /> */}
        <Clock />
        <PanelsWrapper>
          <Reddit />
          <Twitch />
        </PanelsWrapper>
        {/* <OptionsPopin /> */}
      </BackgroundSplash>
    )
  }
}

export default connect()(App)
