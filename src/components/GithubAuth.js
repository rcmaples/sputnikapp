import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

let GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI, GITHUB_CODE, API_URL;

if (process.env.NODE_ENV === 'development') {
  const {
    GITHUB_CLIENT_ID_DEV,
    GITHUB_REDIRECT_URI_DEV
  } = require('../config/config');
  GITHUB_CLIENT_ID = GITHUB_CLIENT_ID_DEV;
  GITHUB_REDIRECT_URI = GITHUB_REDIRECT_URI_DEV;
  API_URL = 'http://localhost:5000/';
} else {
  GITHUB_CLIENT_ID = '562ddd888f38676cfe39';
  API_URL = 'http://sputnik-server.herokuapp.com/api/github/authorize/';
}

class GithubAuth extends Component {
  componentDidMount() {
    if (this.props.location.search) {
      GITHUB_CODE = this.props.location.search.split('=')[1];
      console.log('GITHUB_CODE: ', GITHUB_CODE);
      console.log('GITHUB_REDIRECT_URI: ', GITHUB_REDIRECT_URI);

      axios
        .get(`${API_URL}api/github/authorize/${GITHUB_CODE}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.error(err));
    }
    console.log('GITHUB_REDIRECT_URI: ', GITHUB_REDIRECT_URI);
    console.log('GITHUB_CODE: ', GITHUB_CODE);
    console.log('GITHUB_CLIENT_ID: ', GITHUB_CLIENT_ID);
  }

  render() {
    return (
      <section className="github-section">
        <h1 className="gh-header">Authorize GitHub</h1>
        <p>
          In order to work, Sputnik requires access to your GitHub account.{' '}
        </p>
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
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(GithubAuth);
