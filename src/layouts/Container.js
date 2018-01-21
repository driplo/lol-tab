import React from 'react'
import PropTypes from 'prop-types'
import conf from '../config.js'
import './Container.css'

const Container = ({ children, splash }) => {

  return (
    <div className="tab-bg" style={{ backgroundImage: `url(${splash})` }}>
      <main>{children}</main>
      <div className="layer" />
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.array,
  splash: PropTypes.string,
}

Container.defaultProps = {
  splash: conf.cdn.default_splash,
}

export default Container
