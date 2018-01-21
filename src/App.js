import React, { Component } from 'react'
import Container from './layouts/Container'
import OptionButton from './components/Options/OptionsButton/OptionButton'
import Clock from './components/Clock/Clock'
import PanelContainer from './components/PanelContainer/PanelContainer'
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
      <Container splash={splash}>
        {/* <OptionButton /> */}
        <Clock />
        <PanelContainer>
          <Reddit />
          <Twitch />
        </PanelContainer>
        {/* <OptionsPopin /> */}
      </Container>
    )
  }
}

export default App
