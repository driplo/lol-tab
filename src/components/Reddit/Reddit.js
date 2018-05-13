import React, { Component } from 'react'
import axios from 'axios'
import Panel from '../Panel/Panel'
import Item from './RedditItem/RedditItem'
import Loader from '../Loader/Loader'

const MAX_THREADS = 25

class Reddit extends Component {
  constructor() {
    super()
    this.state = {
      threads: [],
      loading: true,
    }
  }

  componentDidMount() {
    axios
      .get('https://www.reddit.com/r/leagueoflegends.json')
      .then(response => {
        this.setState({
          threads: response.data.data.children.slice(0, MAX_THREADS),
          loading: false,
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { loading, threads } = this.state

    return (
      <Panel
        title="/r/LeagueOfLegends"
        link="https://www.reddit.com/r/leagueoflegends"
      >
        {loading ? (
          <Loader />
        ) : (
          threads.map((thread, i) => (
            <Item
              key={i}
              title={thread.data.title}
              score={thread.data.score}
              link={thread.data.permalink}
              thumb={thread.data.thumbnail}
              domain={thread.data.domain}
              submitted={thread.data.createdUTC}
            />
          ))
        )}
      </Panel>
    )
  }
}

export default Reddit
