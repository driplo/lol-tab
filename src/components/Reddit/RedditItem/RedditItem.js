import React from 'react'
import './RedditItem.css'

const Item = ({ title, score, link, thumb, domain }) => {
  return (
    <li title={title}>
      <a target="_blank" href={`https://www.reddit.com${link}`} alt={title}>
        {/\.(jpg|png|gif)\b/.test(thumb) && (
          <img height="30px" alt={title} className="thumb" src={thumb} />
        )}
        <div className="col">
          <div className="title">{title}</div>
          <strong className="score">{score}pts</strong>
          <em> - {domain}</em>
        </div>
      </a>
    </li>
  )
}

export default Item
