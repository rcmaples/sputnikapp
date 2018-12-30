import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import astronaut from '../images/astonaut-avatar.svg';
import passkey from '../images/password-key.svg';
import email from '../images/email.svg';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <section className="registration-section">
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Welcome</legend>
            <p className="form-text">
              To get started, please enter your details and choose a password.
            </p>
            <label htmlFor="name">Name:</label>
            <div className="name-field">
              <img
                src={astronaut}
                alt="name"
                className={
                  errors.name
                    ? 'form-icon error-color'
                    : 'form-icon default-color'
                }
              />
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                type="text"
                placeholder="Yuri Gagarin"
                id="name"
                name="name"
                autoComplete="name"
              />
            </div>
            <label htmlFor="email">Email Address:</label>
            <div className="email-field">
              <img
                src={email}
                alt="email"
                className={
                  errors.email
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
                autoComplete="emailaddress"
              />
            </div>

            <label htmlFor="password">Password:</label>
            <div>
              <img
                src={passkey}
                alt="passkey"
                className={
                  errors.password
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
                autoComplete="new-password"
              />
            </div>

            <label htmlFor="password-verification">Re-type Password:</label>
            <div>
              <img
                src={passkey}
                alt="passkey"
                className={
                  errors.password2
                    ? 'form-icon error-color'
                    : 'form-icon default-color'
                }
              />
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                type="password"
                id="password2"
                name="password2"
                autoComplete="new-password"
              />
            </div>

            <input
              type="submit"
              value="Sign up"
              className="register-button"
              style={{ float: 'right' }}
            />
          </fieldset>
        </form>
      </section>
    );
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(RegisterForm));
