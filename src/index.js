import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Tweet from './components/Tweet.jsx'
import ExampleTweet from './example-tweet.js'
import TweetReducer from './reducers/tweets.js'

function reducer(state={}, action) {
  if (action.type === 'TWEET_RECEIVED')
  {
    state=action.payload;
    //state=[action.payload].concat(action.payload);
  }
  return state;
}

let store = createStore(reducer, { tweets: ExampleTweet });


store.subscribe(renderApp);

document.addEventListener('click', () => store.dispatch({ type: 'TWEET_RECEIVED', payload: ExampleTweet }));

function renderApp() {
  render(<Tweet tweet={store.getState()} />, document.querySelector('#app'));
}

