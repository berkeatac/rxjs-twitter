import React from 'react'

interface TweetProps {
  account: string
  content: string
  timestamp: number
  isLiked: boolean
  handleLike: (id: string) => void
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
      <button onClick={() => handleLike(id)}>Like</button>
    </li>
  )
}

export default React.memo(Tweet)
