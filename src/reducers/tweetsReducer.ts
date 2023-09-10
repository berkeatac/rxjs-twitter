import { Direction, FiltersEnum, TweetDataType } from '../types'

type Action =
  | {
      type: 'TOGGLE_LIKE'
      payload: Pick<TweetDataType, 'id'> & { direction: Direction }
    }
  | {
      type: 'ADD_TWEET'
      payload: TweetDataType
    }
  | {
      type: 'SET_FILTER'
      payload: FiltersEnum
    }

const tweetReducer = (
  state: {
    tweets: TweetDataType[]
    likeCount: number
    activeFilter: FiltersEnum
  },
  action: Action
): {
  tweets: TweetDataType[]
  likeCount: number
  activeFilter: FiltersEnum
} => {
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
          state.likeCount +
          (action.payload.direction === Direction.UP ? +1 : -1),
        activeFilter: state.activeFilter
      }
    case 'ADD_TWEET':
      return {
        tweets: [action.payload, ...state.tweets],
        likeCount: state.likeCount,
        activeFilter: state.activeFilter
      }
    case 'SET_FILTER':
      return {
        tweets: state.tweets,
        likeCount: state.likeCount,
        activeFilter: action.payload
      }
    default:
      break
  }
  return state
}

export default tweetReducer
