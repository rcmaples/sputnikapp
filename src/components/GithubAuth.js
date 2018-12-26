import React from 'react';

export const GithubAuth = () => (
  <section className="github-section">
    <h1 className="gh-header">Authorize GitHub</h1>
    <p>In order to work, Sputnik requires access to your GitHub account. </p>
    <p>Use the button below to sign into GitHub and authorize Sputnik.</p>
    <button className="github-button ok-color">Authorize GitHub</button>
    <p>
      If you would prefer not to authorize, please logout and use the demo
      account to see what Sputnik can do.
    </p>
  </section>
);
