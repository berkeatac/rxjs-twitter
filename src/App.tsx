import { useCallback, useEffect, useReducer } from 'react'
import { merge } from 'rxjs'
import { v4 as uuid } from 'uuid'

import { createTweetSource, getTweetsByFilter } from 'utils/data'
import tweetsReducer from 'reducers/tweetsReducer'

import TweetList from 'components/TweetList'
import Filters from 'components/Filters'

import { Tweet as TweetStreamType, Direction, FiltersEnum } from 'types'

const App = () => {
  const [state, dispatch] = useReducer(tweetsReducer, {
    tweets: [],
    likeCount: 0,
    activeFilter: FiltersEnum.ALL
  })
  const { tweets, likeCount, activeFilter } = state

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

  const handleLike = useCallback((id: string, direction: Direction) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: { id, direction } })
  }, [])

  const handleFilterChange = useCallback((filter: FiltersEnum) => {
    dispatch({ type: 'SET_FILTER', payload: filter })
  }, [])

  return (
    <main className="mx-auto w-1/2 min-w-min max-w-md">
      <h1 className="">Tweets</h1>
      <h2 className="">Liked: {likeCount}</h2>
      <Filters activeFilter={activeFilter} changeFilter={handleFilterChange} />
      <button
        className="rounded border border-blue-500 bg-transparent px-2 py-1 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={() => dispatch({ type: 'CLEAR_TWEETS' })}
      >
        Clear
      </button>
      <ul className="">
        <TweetList
          tweets={getTweetsByFilter(tweets, activeFilter)}
          handleLike={handleLike}
        />
      </ul>
    </main>
  )
}

export default App
