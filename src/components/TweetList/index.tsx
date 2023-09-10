import React from 'react'

import Tweet from '../Tweet'

import { TweetDataType, Direction } from '../../types'

interface TweetListProps {
  tweets: TweetDataType[]
  handleLike: (id: string, direction: Direction) => void
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
