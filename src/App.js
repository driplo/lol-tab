import React, { Component } from 'react'
import BackgroundSplash from './layouts/BackgroundSplash'
import OptionButton from './components/Options/OptionsButton/OptionButton'
import Clock from './components/Clock/Clock'
import PanelsWrapper from './components/PanelsWrapper/PanelsWrapper'
import Reddit from './components/Reddit/Reddit'
import Twitch from './components/Twitch/Twitch'
import OptionsPopin from './components/Options/OptionsPopin/OptionsPopin'

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

export default App
