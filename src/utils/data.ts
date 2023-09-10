import { interval } from 'rxjs'
import { map } from 'rxjs/operators'
import { TweetDataType, FiltersEnum } from '../types'

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

export const getTweetsByFilter = (
  tweets: TweetDataType[],
  filter: FiltersEnum
): TweetDataType[] => {
  switch (filter) {
    case FiltersEnum.ALL:
      return getTweetsInTimeWindow(tweets, 30 * 1000)
    case FiltersEnum.LIKED:
      return tweets.filter((tweet) => tweet.isLiked)
    default:
      return tweets
  }
}
