import './OptionsPopin.css'
import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import championOptions from '../../../data/championList.js'
import conf from '../../../config'
import skins from '../../../data/skins.json'

const menuStyle = {
  borderRadius: '0',
  backgroundColor: '#111318',
  padding: '2px 0',
  border: '1px solid #31271e',
  fontSize: '90%',
  position: 'fixed',
  overflow: 'auto',
  maxHeight: '50%',
}

class OptionsPopin extends Component {
  constructor() {
    super()
    this.state = {
      selected: {
        value: '',
        label: '',
      },
      currentText: '',
      skinSelected: '',
    }
  }
  componentWillMount() {
    console.log(championOptions)
    championOptions.unshift({
      value: 'random',
      label: 'Random',
    })
  }
  render() {
    // const current_champion = localStorage.getItem('splash').split('_')[0]
    // const current_skinID = localStorage.getItem('splash').split('_')[1]
    // const current_skin = skins.data[current_champion].skins[current_skinID].name
    return (
      <div className="popin popin--options">
        <Autocomplete
          items={championOptions}
          getItemValue={item => item.value}
          shouldItemRender={this.matchStateToTerm}
          wrapperStyle={{ display: 'block' }}
          renderInput={props => this.renderInput(props)}
          renderItem={item => this.renderItem(item)}
          value={this.state.currentText}
          onSelect={(item, value) => {
            this.setState({
              currentText: value.label,
              selected: value,
            })
          }}
          onChange={(event, value) => this.setState({ currentText: value })}
          menuStyle={menuStyle}
        />
        {/* Current Champion: {current_champion} <br /> */}
        {/* Options Current Splash Art: {current_skin} */}
      </div>
    )
  }
  renderInput(props) {
    const img =
      this.state.selected.value !== 'random'
        ? `${conf.cdn}/${conf.patch}/img/champion/${this.state.selected.value}.png`
        : '/random.png'
    return (
      <div className="input-wrapper">
        {this.state.selected.value && <img width="25" src={img} />}
        <input {...props} value={this.state.currentText} />
      </div>
    )
  }
  renderItem(item) {
    const img =
      item.value !== 'random'
        ? `${conf.cdn}/${conf.patch}/img/champion/${item.value}.png`
        : '/random.png'
    return (
      <div key={item.value} className="option-champ">
        <img width="25" src={img} alt={item.label} />
        {item.label}
      </div>
    )
  }
  matchStateToTerm(state, value) {
    return state.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
  }
}

export default OptionsPopin
