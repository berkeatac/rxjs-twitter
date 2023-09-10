export enum FiltersEnum {
  ALL = 'all',
  LIKED = 'liked'
}

export enum Direction {
  UP = 'up',
  DOWN = 'down'
}

export type Tweet = {
  account: string
  timestamp: number
  content: string
}

export type TweetDataType = Tweet & { isLiked: boolean; id: string }
