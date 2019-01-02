import React, { Component } from 'react';
import astronaut from '../images/astonaut-avatar.svg';
import passkey from '../images/password-key.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser, setGitHubToken } from '../actions/authActions';
import empty from 'is-empty';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
      this.props.setGitHubToken(token);
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    let token = localStorage.getItem('github_token');
    if (empty(token)) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/github');
      }
    } else {
      nextProps.setGitHubToken(token);
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
            <div>
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

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, setGitHubToken }
)(LoginForm);
