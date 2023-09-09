import { interval, merge, map } from 'rxjs'

function App() {
  const createTweetSource = (
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
  const tweets = merge(
    createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
    createTweetSource(3000, 'iamdevloper', 'Expert'),
    createTweetSource(5000, 'CommitStrip', 'Funny')
  )
  tweets.subscribe(console.log.bind(console))

  return <div className="relative overflow-hidden bg-white"></div>
}

export default App
