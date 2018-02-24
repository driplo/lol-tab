import React from 'react'
import PropTypes from 'prop-types'
import conf from '../config.js'
import './BackgroundSplash.css'

const BackgroundSplash = ({ children, splash }) => (
  <div className="tab-bg" style={{ backgroundImage: `url(${splash})` }}>
    <main>{children}</main>
    <div className="layer" />
  </div>
)

BackgroundSplash.propTypes = {
  children: PropTypes.array,
  splash: PropTypes.string,
}

BackgroundSplash.defaultProps = {
  splash: conf.cdn.default_splash,
}

export default BackgroundSplash
