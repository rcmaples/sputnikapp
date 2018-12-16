import React, { Fragment } from 'react';
import FeedComponent from './FeedComponent';
const Dashboard = () => (
  <Fragment>
    <FeedComponent type="following" />
    <FeedComponent type="watching" />
    <FeedComponent type="starred" />
    <FeedComponent type="repos" />
    <FeedComponent type="popular" />
  </Fragment>
);

export default Dashboard;
