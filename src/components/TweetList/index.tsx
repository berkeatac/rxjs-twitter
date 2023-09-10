import React from 'react'

import Tweet from '../Tweet'

import { TweetDataType, Direction } from '../../types'

interface TweetListProps {
  tweets: TweetDataType[]
  handleLikeEvent: (id: string, direction: Direction) => void
}

const TweetList = ({ tweets, handleLikeEvent }: TweetListProps) => {
  return (
    <>
      {tweets.map((tweet: TweetDataType) => (
        <Tweet key={tweet.id} handleLikeEvent={handleLikeEvent} {...tweet} />
      ))}
    </>
  )
}

export default React.memo(TweetList)
