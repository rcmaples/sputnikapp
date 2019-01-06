// import React, { Component } from 'react';
import React, { Component } from 'react';
import iconFollow from '../images/follow.svg';
import iconPopular from '../images/popular.svg';
import iconRepos from '../images/repos.svg';
import iconStar from '../images/starred.svg';
import iconWatch from '../images/watch.svg';
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

  renderSwitch(type) {
    switch (type) {
      case 'following':
        this.icon = iconFollow;
        this.alt = 'following';
        this.name = 'Following';
        this.className = 'feedComponent--following';
        break;
      case 'popular':
        this.icon = iconPopular;
        this.alt = 'popular';
        this.name = 'Trending';
        this.className = 'feedComponent--popular';
        break;
      case 'repos':
        this.icon = iconRepos;
        this.alt = 'repos';
        this.name = 'Your Repos';
        this.className = 'feedComponent--repos';
        break;
      case 'starred':
        this.icon = iconStar;
        this.alt = 'starred';
        this.name = 'Starred';
        this.className = 'feedComponent--starred';
        break;
      case 'watching':
        this.icon = iconWatch;
        this.alt = 'watching';
        this.name = 'Watching';
        this.className = 'feedComponent--watching';
        break;
      default:
        this.icon = null;
        this.alt = null;
        this.name = null;
        this.className = null;
        break;
    }
  }

  render() {
    this.renderSwitch(this.props.type);
    return (
      <div className={`feedComponent ${this.className}`}>
        <div className="feedComponentHeader">
          <img src={this.icon} alt={this.alt} />
          <span className="feedComponentTitle">{this.name}</span>
        </div>
        <div className="feedComponentContainer">
          {this.state.loading ? <Loader /> : <List items={this.state.actors} />}
        </div>
      </div>
    );
  }
}

export default FeedComponent;
