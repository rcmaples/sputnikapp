import React from 'react';
import {
  GITHUB_CLIENT_ID_DEV,
  GITHUB_REDIRECT_URI_DEV
} from '../config/config';

export const GithubAuth = () => {
  console.log(process.env.NODE_ENV);

  return (
    <section className="github-section">
      <h1 className="gh-header">Authorize GitHub</h1>
      <p>In order to work, Sputnik requires access to your GitHub account. </p>
      <p>Use the button below to sign into GitHub and authorize Sputnik.</p>
      {process.env.NODE_ENV === 'development' ? (
        <button
          onClick={() => {
            window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID_DEV}&redirect_uri=${GITHUB_REDIRECT_URI_DEV}`;
          }}
          className="github-button ok-color"
        >
          Authorize GitHub
        </button>
      ) : (
        <button
          onClick={() => {
            window.location.href = `https://github.com/login/oauth/authorize?client_id=${
              process.env.GITHUB_CLIENT_ID
            }&redirect_uri=${process.env.GITHUB_REDIRECT_URI}`;
          }}
          className="github-button ok-color"
        >
          Authorize GitHub
        </button>
      )}
      <p>
        If you would prefer not to authorize, please logout and use the demo
        account to see what Sputnik can do.
      </p>
    </section>
  );
};
