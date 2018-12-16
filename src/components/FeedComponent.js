// import React, { Component } from 'react';
import React from 'react';
import iconFollow from '../images/follow.svg';
import iconPopular from '../images/popular.svg';
import iconRepos from '../images/repos.svg';
import iconStar from '../images/starred.svg';
import iconWatch from '../images/watch.svg';

import Loader from './Loader';

const FeedComponent = props => {
  let icon, alt, name, className;

  switch (props.type) {
    case 'following':
      icon = iconFollow;
      alt = 'following';
      name = 'Following';
      className = 'feedComponent--following';
      break;
    case 'popular':
      icon = iconPopular;
      alt = 'popular';
      name = 'Trending';
      className = 'feedComponent--popular';
      break;
    case 'repos':
      icon = iconRepos;
      alt = 'repos';
      name = 'Your Repos';
      className = 'feedComponent--repos';
      break;
    case 'starred':
      icon = iconStar;
      alt = 'starred';
      name = 'Starred';
      className = 'feedComponent--starred';
      break;
    case 'watching':
      icon = iconWatch;
      alt = 'watching';
      name = 'Watching';
      className = 'feedComponent--watching';
      break;
    default:
      icon = null;
      alt = null;
      name = null;
      className = null;
      break;
  }

  return (
    <div className={`feedComponent ${className}`}>
      <div className="feedComponentHeader">
        <img src={icon} alt={alt} />
        <span className="feedComponentTitle">{name}</span>
      </div>
      <div className="feedComponentContainer">
        <Loader />
      </div>
    </div>
  );
};

export default FeedComponent;
