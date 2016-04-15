function reducer(state={}, action) {
  if (action.type === 'TWEET_RECEIVED')
  {
    state=[action.payload].concat(action.payload);
  }
  return state;
}
