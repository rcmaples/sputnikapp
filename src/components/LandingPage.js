// import React, { Component } from 'react';
import React from 'react';

import iconLogo from '../images/spunik-mark.svg';

const LandingPage = props => {
  return (
    <div className="landingPage">
      <div className="feedComponentHeader">
        <img src={iconLogo} alt="Landing Page Icon" />
        <span className="feedComponentTitle">What's this about?</span>
      </div>
      <div className="landingPageContainer">
        <p>
          Sputnik is the missing dashboard for GitHub. By authorizing Sputnik to
          access your GitHub account, we'll display the users you're following
          and the repos you've favorited in a meaningful way. No more hunting
          and pecking around in GitHub to find relevant information about the
          projects you want to know more about.
        </p>
        <p>
          If you would prefer to use a Demo account, login with the following
          information:
        </p>
        <p>Username: Demo</p>
        <p>Password: Demo</p>
        <div>
          <button className="landingPage-button">Register</button>
          <button className="landingPage-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
