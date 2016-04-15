import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import tweetReducer from './reducers/tweets.js'
import App from './containers/App.jsx'


function getTwwets() {
  const ws = new WebSocket('ws://twitterws.herokuapp.com');
  const MAX_TWEETS = 1000;

  ws.onmessage = ms => {
    const tweet = JSON.parse(ms.data);
    if (store.getState().tweets.length < MAX_TWEETS) {
      store.dispatch({ type: 'TWEET_RECEIVED', payload: tweet });
    }
  };
}

let store = createStore(tweetReducer);

store.subscribe(renderApp);

document.addEventListener('click', () => getTwwets());

function renderApp() {
  render(<App tweets={store.getState().tweets} />, document.querySelector('#app'));
}

