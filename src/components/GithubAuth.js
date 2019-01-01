import React from 'react';

let GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI;
console.log('env: ', process.env.NODE_ENV);
console.log('env: ', process.env);

if (process.env.NODE_ENV === 'development') {
  const {
    GITHUB_CLIENT_ID_DEV,
    GITHUB_REDIRECT_URI_DEV
  } = require('../config/config');
  GITHUB_CLIENT_ID = GITHUB_CLIENT_ID_DEV;
  GITHUB_REDIRECT_URI = GITHUB_REDIRECT_URI_DEV;
} else {
  GITHUB_CLIENT_ID = '562ddd888f38676cfe39';
  GITHUB_REDIRECT_URI =
    'http://sputnik-server.herokuapp.com/api/github/authorize/';
}

export const GithubAuth = () => (
  <section className="github-section">
    <h1 className="gh-header">Authorize GitHub</h1>
    <p>In order to work, Sputnik requires access to your GitHub account. </p>
    <p>Use the button below to sign into GitHub and authorize Sputnik.</p>
    <button
      onClick={() => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}`;
      }}
      className="github-button ok-color"
    >
      Authorize GitHub
    </button>
    <p>
      If you would prefer not to authorize, please logout and use the demo
      account to see what Sputnik can do.
    </p>
  </section>
);
