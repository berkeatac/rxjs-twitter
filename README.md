A simple twitter like application built using React, RxJS, Tailwind and Vite.

### Notes

- I have taken an approach where all tweets are stored in memory but are not rendered or iterated over during functional methods are run. This is managed by the `getTweetsInTimeWindow` method in `utils/data.ts`. This is done to ensure that the application is performant and does not slow down as the number of tweets increase.

- Sorting of tweets is not needed, as the tweets are guaranteed to be in the order of their generated timestamp.
  https://github.com/ReactiveX/rxjs/issues/3244#issuecomment-360542350

- I have taken steps to ensure the application is performant and accessible. But I have not worked on the UI and responsiveness.

- The profiler sometime bugs and shows the Tweet components rerendering when highlighting is active, however the components are not rerendering. This is observable by the charts of the profiler.

### Installation

Install dependencies.

```bash
npm install
```

Run the application.

```bash
npm run dev
```

## License

This project is licensed under the MIT License.
