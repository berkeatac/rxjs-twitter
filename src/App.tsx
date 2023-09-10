import { useCallback, useEffect, useReducer } from 'react'
import { merge } from 'rxjs'
import { v4 as uuid } from 'uuid'

import {
  createTweetSource,
  Tweet as TweetStreamType,
  // TweetDataType,
  getTweetsInTimeWindow
} from 'utils/data'
import TweetList from 'components/TweetList'
import tweetsReducer from 'reducers/tweetsReducer'

const App = () => {
  const [state, dispatch] = useReducer(tweetsReducer, {
    tweets: [],
    likeCount: 0
  })
  const { tweets, likeCount } = state

  useEffect(() => {
    const tweetStream = merge(
      createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
      createTweetSource(3000, 'iamdevloper', 'Expert'),
      createTweetSource(5000, 'CommitStrip', 'Funny')
    )

    const subscription = tweetStream.subscribe((newTweet: TweetStreamType) => {
      dispatch({
        type: 'ADD_TWEET',
        payload: { ...newTweet, id: uuid(), isLiked: false }
      })
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleLike = useCallback((id: string, direction: 'up' | 'down') => {
    dispatch({ type: 'TOGGLE_LIKE', payload: { id, direction } })
  }, [])

  return (
    <main className="w-full">
      <h1 className="mx-auto w-1/2 min-w-min max-w-md">Tweets</h1>
      <h2 className="mx-auto w-1/2 min-w-min max-w-md">Liked: {likeCount}</h2>
      <ul className="mx-auto w-1/2 min-w-min max-w-md">
        <TweetList
          tweets={getTweetsInTimeWindow(tweets, 30000)}
          handleLike={handleLike}
        />
      </ul>
    </main>
  )
}

export default App
