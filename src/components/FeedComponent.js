// import React, { Component } from 'react';
import React, { Component } from 'react';

import List from './List';
import Loader from './Loader';

class FeedComponent extends Component {
  state = {
    loading: true,
    actors: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    if (this.props.type === 'following') {
      // fetch(`https://api.github.com/users/rcmaples/received_events/public`)
      fetch(`https://randomuser.me/api/?lego&results=50`)
        .then(json => json.json())
        .then(actors => {
          this.setState({
            loading: false,
            actors: actors.results
          });
        });
    }
  }

  render() {
    return (
      <div className={`feedComponent ${this.props.className}`}>
        <div className="feedComponentHeader">
          <img src={this.props.icon} alt={this.props.alt} />
          <span className="feedComponentTitle">{this.props.name}</span>
        </div>
        <div className="feedComponentContainer">
          {this.state.loading ? <Loader /> : <List items={this.state.actors} />}
        </div>
      </div>
    );
  }
}

export default FeedComponent;
