import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

export type Tweet = {
  account: string
  timestamp: number
  content: string
}

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
