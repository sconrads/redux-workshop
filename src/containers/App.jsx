import React, { PropTypes } from 'react';

import Tweet from '../components/Tweet.jsx'

class App extends React.Component {

  render() {

    const { tweets } = this.props;

    return (
      <ul>
        {tweets.map((tweet) => {
          return <li><Tweet tweet={tweet}/></li>;
        })}
      </ul>
    );
  }
}

App.propTypes = {
  tweets: PropTypes.object.isRequired
};

export default App;
