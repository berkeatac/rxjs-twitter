import React from 'react'

import Tweet from '../Tweet'
import { TweetDataType } from '../../utils/data'

interface TweetListProps {
  tweets: TweetDataType[]
  handleLike: (id: string, direction: 'up' | 'down') => void
}

const TweetList = ({ tweets, handleLike }: TweetListProps) => {
  return (
    <>
      {tweets.map((tweet: TweetDataType) => (
        <Tweet key={tweet.id} handleLike={handleLike} {...tweet} />
      ))}
    </>
  )
}

export default React.memo(TweetList)
