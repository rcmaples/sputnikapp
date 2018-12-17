// import React, { Component } from 'react';
import React from 'react';

import iconLogo from '../images/spunik-mark.svg';

import Loader from './Loader';

const LandingPage = props => {
  return (
    <div className="landingPage">
      <div className="feedComponentHeader">
        <img src={iconLogo} alt="Landing Page Icon" />
        <span className="feedComponentTitle">What's this about?</span>
      </div>
      <div className="landingPageContainer">
        <Loader />
      </div>
    </div>
  );
};

export default LandingPage;
