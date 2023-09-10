import React from 'react'

import { Direction } from '../../types'

interface TweetProps {
  account: string
  content: string
  timestamp: number
  isLiked: boolean
  handleLike: (id: string, direction: Direction) => void
  id: string
}

const Tweet = ({
  account,
  content,
  timestamp,
  isLiked,
  handleLike,
  id
}: TweetProps) => {
  return (
    <li className="my-2 flex flex-col border border-neutral-800 p-2">
      <strong>{account}</strong>
      {content} {isLiked && '❤️'}
      <small>({new Date(timestamp).toLocaleString()})</small>
      <button
        onClick={() => handleLike(id, isLiked ? Direction.DOWN : Direction.UP)}
      >
        Like
      </button>
    </li>
  )
}

export default React.memo(Tweet)
