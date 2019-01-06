import React, { Component } from 'react';
import FeedComponent from './FeedComponent';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <FeedComponent type="following" />
        <div className="dashboard-center">
          <FeedComponent type="watching" />
          <FeedComponent type="starred" />
        </div>
        <div className="dashboard-right">
          <FeedComponent type="repos" />
          <FeedComponent type="popular" />
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
