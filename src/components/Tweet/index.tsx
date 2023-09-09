import React from 'react'

interface TweetProps {
  account: string
  content: string
  timestamp: number
}

const Tweet = ({ account, content, timestamp }: TweetProps) => {
  return (
    <li className="my-2 flex flex-col border border-neutral-800 p-2">
      <strong>{account}</strong>
      {content}
      <small>({new Date(timestamp).toLocaleString()})</small>
    </li>
  )
}

export default React.memo(Tweet)
