export default function reducer(state=[], action) {
  if (action.type === 'TWEET_RECEIVED')
  {
    return  {tweets: state.tweets.concat(action.payload)};
  }
  return {tweets: []};
}
