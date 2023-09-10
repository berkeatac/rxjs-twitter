import React from 'react'

import Tweet from '../Tweet'
import { TweetDataType } from '../../utils/data'

interface TweetListProps {
  tweets: TweetDataType[]
  handleLike: (id: string) => void
}

const TweetList = ({ tweets, handleLike }: TweetListProps) => {
  return (
    <>
      {tweets
        .filter((tweet: TweetDataType) => Date.now() - tweet.timestamp <= 30000)
        .sort((a: TweetDataType, b: TweetDataType) => b.timestamp - a.timestamp)
        .map((tweet: TweetDataType) => (
          <Tweet key={tweet.id} handleLike={handleLike} {...tweet} />
        ))}
    </>
  )
}

export default React.memo(TweetList)
