import React, { Fragment } from 'react';
import FeedComponent from './FeedComponent';
const Dashboard = () => (
  <Fragment>
    <FeedComponent type="following" />
    <div className="dashboard-center">
      <FeedComponent type="watching" />
      <FeedComponent type="starred" />
    </div>
    <div className="dashboard-right">
      <FeedComponent type="repos" />
      <FeedComponent type="popular" />
    </div>
  </Fragment>
);

export default Dashboard;
