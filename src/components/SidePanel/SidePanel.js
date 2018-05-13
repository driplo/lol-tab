import React from 'react'
import SidePanelLink from './SidePanelLink/SidePanelLink'
import './SidePanel.css'

const SidePanel = ({ isOpen, links }) => (
  <div className="side-panel">
    <div className="side-panel__header">Usefull links</div>
    <div className="side-panel__content">
      <ul>
        {links.official.map((link, key) => (
          <SidePanelLink {...link} key={key} />
        ))}
      </ul>
    </div>
  </div>
)

export default SidePanel
