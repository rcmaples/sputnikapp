import React from 'react';

let clientId, redirectURI;

if (process.env.NODE_ENV === 'development') {
  const {
    GITHUB_CLIENT_ID_DEV,
    GITHUB_REDIRECT_URI_DEV
  } = require('../../config');
  clientId = GITHUB_CLIENT_ID_DEV;
  redirectURI = GITHUB_REDIRECT_URI_DEV;
} else {
  clientId = process.env.GITHUB_CLIENT_ID;
  redirectURI = process.env.GITHUB_REDIRECT_URI;
}

export const GithubAuth = () => {
  // console.log(process.env.NODE_ENV);
  console.dir(process.env);

  return (
    <section className="github-section">
      <h1 className="gh-header">Authorize GitHub</h1>
      <p>In order to work, Sputnik requires access to your GitHub account. </p>
      <p>Use the button below to sign into GitHub and authorize Sputnik.</p>
      <button
        onClick={() => {
          window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectURI}`;
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
};
