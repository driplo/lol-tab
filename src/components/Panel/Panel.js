import React from 'react'
import './Panel.css'
import linkIcon from './link.svg'

const Panel = ({ children, title, link }) => (
  <div className="Panel">
    <header>
      <span>{title}</span>
      {link && <PanelLink link={link} icon={linkIcon} />}
    </header>
    <div className="Panel__inner">
      <ul>{children}</ul>
    </div>
  </div>
)

const PanelLink = ({ link, icon }) => (
  <a href={link} target="_blank" className="link">
    {console.log(link)}
    <img src={icon} width="10px" alt={`Go to ${link}`} />
  </a>
)

export default Panel
