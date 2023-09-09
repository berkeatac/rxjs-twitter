import { useEffect, useState } from 'react'
import { merge } from 'rxjs'

import { createTweetSource, Tweet as TweetType } from 'utils/data'
import Tweet from 'components/Tweet'

const App = () => {
  const [tweets, setTweets] = useState<TweetType[]>([])

  useEffect(() => {
    const tweetStream = merge(
      createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
      createTweetSource(3000, 'iamdevloper', 'Expert'),
      createTweetSource(5000, 'CommitStrip', 'Funny')
    )

    const subscription = tweetStream.subscribe((newTweet: TweetType) => {
      setTweets((prevTweets) => [newTweet, ...prevTweets])
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <main className="w-full">
      <h1 className="mx-auto w-1/2 min-w-min max-w-md">Tweets</h1>
      <ul className="mx-auto w-1/2 min-w-min max-w-md">
        {tweets
          .filter((tweet: TweetType) => Date.now() - tweet.timestamp <= 30000)
          .map((tweet, index) => (
            <Tweet key={`${tweet.account}-${index}`} {...tweet} />
          ))}
      </ul>
    </main>
  )
}

export default App
