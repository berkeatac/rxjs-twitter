import { useEffect, useState } from 'react'
import { merge } from 'rxjs'

import { createTweetSource, Tweet } from './utils/data'

const App = () => {
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    const tweetStream = merge(
      createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
      createTweetSource(3000, 'iamdevloper', 'Expert'),
      createTweetSource(5000, 'CommitStrip', 'Funny')
    )

    const subscription = tweetStream.subscribe((newTweet: Tweet) => {
      setTweets((prevTweets) => [...prevTweets, newTweet])
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <div>
      <h1>Tweets</h1>
      <ul>
        {tweets
          .filter((tweet: Tweet) => Date.now() - tweet.timestamp <= 30000)
          .map((tweet, index) => (
            <li key={index}>
              <strong>{tweet.account}</strong>: {tweet.content}{' '}
              <small>({new Date(tweet.timestamp).toLocaleString()})</small>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default App
