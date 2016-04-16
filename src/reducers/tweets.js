export default function tweets(state=[], action) {
  console.log('reducer')
  if (action.type === 'TWEET_RECEIVED')
  {
    return  state.concat(action.payload);
  }
  return state;
}
