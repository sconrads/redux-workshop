import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './containers/App.jsx'
import { Provider } from 'react-redux'
import configureStore from './configureStore';

const ws = new WebSocket('ws://twitterws.herokuapp.com');
const MAX_TWEETS = 1000;

const store = configureStore();

ws.onmessage = ms => {
  const tweet = JSON.parse(ms.data);
  if (store.getState().tweets.length < MAX_TWEETS) {
    store.dispatch({ type: 'TWEET_RECEIVED', payload: tweet });
  }
};

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#app')
);


