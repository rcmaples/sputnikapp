import React, { Component } from 'react';
import FeedComponent from './FeedComponent';
import { connect } from 'react-redux';
import iconFollow from '../images/follow.svg';
import iconPopular from '../images/popular.svg';
import iconRepos from '../images/repos.svg';
import iconStar from '../images/starred.svg';
import iconWatch from '../images/watch.svg';
import { setGitHubToken } from '../actions/authActions';
import { getURLs, setGitHubURLs } from '../actions/userActions';

// import empty from 'is-empty';
// let token = localStorage.getItem('github_token');
class Dashboard extends Component {
  // constructor(props){
  //   super(props);
  //   props.
  // }
  componentDidMount() {
    let token =
      localStorage.getItem('github_token') || this.props.auth.github_token;

    console.log('G is calling setGitHubToken');
    // console.log('Gs token is: ', token);
    this.props.setGitHubToken(token);
    this.props.setGitHubURLs(token);
  }

  render() {
    return (
      <div className="dashboard">
        <FeedComponent
          type="following"
          icon={iconFollow}
          alt="following"
          name="Following"
          className="feedComponent--following"
          // token={token}
        />
        <div className="dashboard-center">
          <FeedComponent
            type="watching"
            icon={iconWatch}
            alt="watching"
            name="Watching"
            className="feedComponent--watching"
          />
          <FeedComponent
            type="starred"
            icon={iconStar}
            alt="starred"
            name="Starred"
            className="feedComponent--starred"
          />
        </div>
        <div className="dashboard-right">
          <FeedComponent
            type="repos"
            icon={iconRepos}
            alt="repos"
            name="Your Repos"
            className="feedComponent--repos"
          />
          <FeedComponent
            type="popular"
            icon={iconPopular}
            alt="popular"
            name="Trending"
            className="feedComponent--popular"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  followers: state.followers,
  starred: state.starred,
  repos: state.repos,
  watching: state.watching,
  trending: state.trending,
  github_urls: state.github_urls
});

export default connect(
  mapStateToProps,
  { setGitHubToken, getURLs, setGitHubURLs }
)(Dashboard);
