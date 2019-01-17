import React, { Component } from 'react';
import astronaut from '../images/astonaut-avatar.svg';
import passkey from '../images/password-key.svg';
import { connect } from 'react-redux';
import {
  loginUser,
  setGitHubToken,
  setUserLoading
} from '../actions/authActions';
import Modal from './Modal';
import empty from 'is-empty';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('github_token');
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (empty(token)) {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/github');
      }
    } else {
      // console.log('A calling setGitHubToken');
      // this.props.setGitHubToken(token);
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    let token =
      localStorage.getItem('github_token') && nextProps.auth.github_token;
    if (!token) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/github');
      }
    } else {
      // console.log('B calling setGitHubToken');
      // console.log('Bs token is: ', token);
      // nextProps.setGitHubToken(token);
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
      }
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.setUserLoading(true);
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <section className="registration-section">
        <Modal show={this.props.auth.loading} handleClose={this.hideModal} />
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Welcome</legend>
            <p className="form-text">
              To get started, please enter your email address and password.
            </p>
            <label htmlFor="email">Email Address:</label>

            <div className="email-field">
              <img
                src={astronaut}
                alt="email"
                className={
                  errors.email || errors.emailnotfound
                    ? 'form-icon error-color'
                    : 'form-icon default-color'
                }
              />
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                type="text"
                placeholder="soyuz@capsule.com"
                id="email"
                name="email"
                autoComplete="email"
              />
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>

            <label htmlFor="password">Password:</label>
            <div className="password-field">
              <img
                src={passkey}
                alt="passkey"
                className={
                  errors.password || errors.passwordincorrect
                    ? 'form-icon error-color'
                    : 'form-icon default-color'
                }
              />
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
              />
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>

            <input
              type="submit"
              value="Sign in"
              className="register-button"
              style={{ float: 'right' }}
            />
          </fieldset>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { loginUser, setGitHubToken, setUserLoading }
)(LoginForm);
