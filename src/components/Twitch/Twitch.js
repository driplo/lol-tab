import React, { Component } from 'react'
import axios from 'axios'
import Panel from '../Panel/Panel'
import Loader from '../Loader/Loader'
import Item from './TwitchItem/TwitchItem'

class Reddit extends Component {
  state = {
    streams: [],
    loading: true,
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/')
      .then(response => {
        this.setState({
          streams: response.data,
          loading: false,
        })
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { loading, streams } = this.state

    return (
      <Panel
        title="League of Legends Channels"
        link="https://www.twitch.tv/directory/game/League%20of%20Legends"
      >
        {loading ? (
          <Loader />
        ) : (
          streams.map((stream, i) => (
            <Item
              key={i}
              name={stream.channel.name}
              title={stream.channel.status}
              viewers={stream.viewers}
              img={stream.channel.logo}
              link={stream.channel.url}
            />
          ))
        )}
      </Panel>
    )
  }
}

export default Reddit
