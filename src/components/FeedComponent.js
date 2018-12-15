import React from 'react';
import iconFollow from '../images/follow.svg';

const FeedComponent = () => (
  <div className="feedComponent">
    <div className="feedComponentHeader">
      <img src={iconFollow} alt="following" />
      <span className="feedComponentTitle">Following</span>
    </div>
    <div className="feedComponentContainer">container</div>
  </div>
);

export default FeedComponent;
