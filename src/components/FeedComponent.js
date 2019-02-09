import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import Loader from './Loader';

class FeedComponent extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: true });
    if (this.props.type === 'following') {
      
      this.setState({ loading: false });
    }
    if (this.props.type === 'watching') {
      console.log('watch');
    }
    if (this.props.type === 'starred') {
      console.log('star');
    }
    if (this.props.type === 'repos') {
      console.log('repos');
    }
    if (this.props.type === 'popular') {
      console.log('pop');
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
          {this.state.loading ? (
            <Loader />
          ) : (
            <List items={this.props.followers} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
  errors: state.errors,
  followers: state.followers,
  starred: state.starred,
  repos: state.repos,
  watching: state.watching,
  trending: state.trending,
  github_urls: state.github_urls
});

export default connect(mapStateToProps)(FeedComponent);
