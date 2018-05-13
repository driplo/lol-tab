import React from 'react'

const SidePanelLink = ({ href, title, description }) => (
  <li>
    <a href={href} title={description}>
      {title}
    </a>
  </li>
)

export default SidePanelLink
