import React, { Component } from 'react';
import FeedComponent from './FeedComponent';
import { connect } from 'react-redux';
import iconFollow from '../images/follow.svg';
import iconPopular from '../images/popular.svg';
import iconRepos from '../images/repos.svg';
import iconStar from '../images/starred.svg';
import iconWatch from '../images/watch.svg';
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <FeedComponent
          type="following"
          icon={iconFollow}
          alt="following"
          name="Following"
          className="feedComponent--following"
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
  errors: state.errors
});

export default connect(mapStateToProps)(Dashboard);
