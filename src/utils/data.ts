import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

export type Tweet = {
  account: string
  timestamp: number
  content: string
}

export type TweetDataType = Tweet & { isLiked: boolean; id: string }

export const createTweetSource = (
  frequency: number,
  account: string,
  attribute: string
) => {
  return interval(frequency).pipe(
    map((i) => ({
      account,
      timestamp: Date.now(),
      content: `${attribute} Tweet number ${i + 1}`
    }))
  )
}

// Returns tweets from the array, in the given time window
// Handles the operation efficiently, stopping the search when the first tweet outside the time window is found
export const getTweetsInTimeWindow = (
  tweets: TweetDataType[],
  timeWindow: number
) => {
  const result: TweetDataType[] = []
  const start = Date.now() - timeWindow
  tweets.some((tweet) => {
    tweet.timestamp >= start && result.push(tweet)
  })
  return result
}
