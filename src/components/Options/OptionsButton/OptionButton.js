import React from 'react'
import OptionSvg from './options.svg'
import './OptionButton.css'

const OptionButton = () => {
  return (
    <div className="optionBtn">
      <img alt={'Display options'} src={OptionSvg} width="20" />
    </div>
  )
}

export default OptionButton
