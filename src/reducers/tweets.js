export default function tweets(state=[], action) {
  if (action.type === 'TWEET_RECEIVED')
  {
    return  state.concat(action.payload);
  }
  return state;
}
