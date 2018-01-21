import React from 'react'
import './TwitchItem.css'

const Item = ({ name, img, viewers, title, link }) => (
  <li title={title}>
    <a target="_blank" href={link} alt={title}>
      {/\.(jpg|jpeg|png|gif)\b/.test(img) && (
        <img height="40px" alt={title} className="thumb" src={img} />
      )}
      <div className="col">
        <div className="name">
          <strong>{name}</strong>
          <span className="viewers">
            <span className="dot" />
            {viewers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </span>
        </div>
        <div className="description">
          <p class="title">{title}</p>
        </div>
      </div>
    </a>
  </li>
)

export default Item
