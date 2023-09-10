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
    <li className="relative my-2 flex flex-col border border-neutral-800 p-2">
      {isLiked && <span className="absolute right-2">❤️</span>}
      <strong>{account}</strong>
      {content}
      <small>({new Date(timestamp).toLocaleString()})</small>
      <button
        className="mt-4 rounded border border-blue-500 bg-transparent py-1 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={() => handleLike(id, isLiked ? Direction.DOWN : Direction.UP)}
      >
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </li>
  )
}

export default React.memo(Tweet)
