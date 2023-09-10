import { TweetDataType } from 'utils/data'

type Action =
  | {
      type: 'TOGGLE_LIKE'
      payload: Pick<TweetDataType, 'id'> & { direction: 'up' | 'down' }
    }
  | {
      type: 'ADD_TWEET'
      payload: TweetDataType
    }

const tweetReducer = (
  state: { tweets: TweetDataType[]; likeCount: number },
  action: Action
): { tweets: TweetDataType[]; likeCount: number } => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      return {
        tweets: state.tweets.map((tweet) => {
          if (tweet.id === action.payload.id) {
            return { ...tweet, isLiked: !tweet.isLiked }
          }
          return tweet
        }),
        likeCount:
          state.likeCount + (action.payload.direction === 'up' ? +1 : -1)
      }
    case 'ADD_TWEET':
      return {
        tweets: [action.payload, ...state.tweets],
        likeCount: state.likeCount
      }
    default:
      break
  }
  return state
}

export default tweetReducer
