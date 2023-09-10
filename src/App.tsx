import { useCallback, useEffect, useState } from 'react'
import { merge } from 'rxjs'
import { v4 as uuid } from 'uuid'

import {
  createTweetSource,
  Tweet as TweetStreamType,
  TweetDataType
} from 'utils/data'
import TweetList from 'components/TweetList'

const App = () => {
  const [tweets, setTweets] = useState<TweetDataType[]>([])

  useEffect(() => {
    const tweetStream = merge(
      createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
      createTweetSource(3000, 'iamdevloper', 'Expert'),
      createTweetSource(5000, 'CommitStrip', 'Funny')
    )

    const subscription = tweetStream.subscribe((newTweet: TweetStreamType) => {
      setTweets((prevTweets) => [
        { ...newTweet, isLiked: false, id: uuid() },
        ...prevTweets
      ])
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleLike = useCallback((id: string) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) => {
        if (tweet.id === id) {
          return { ...tweet, isLiked: !tweet.isLiked }
        }
        return tweet
      })
    )
  }, [])

  return (
    <main className="w-full">
      <h1 className="mx-auto w-1/2 min-w-min max-w-md">Tweets</h1>
      <ul className="mx-auto w-1/2 min-w-min max-w-md">
        <TweetList tweets={tweets} handleLike={handleLike} />
      </ul>
    </main>
  )
}

export default App
