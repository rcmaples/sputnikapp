import React from 'react';
import astronaut from '../images/astonaut-avatar.svg';
import passkey from '../images/password-key.svg';

export const LoginForm = () => (
  <section className="registration-section">
    <form>
      <fieldset>
        <legend>Welcome</legend>
        <p className="form-text">
          To get started, please enter your email address and choose a password.
        </p>
        <label htmlFor="username">Username:</label>
        <div className="email-field">
          <img
            src={astronaut}
            alt="email"
            className=" form-icon default-color"
          />
          <input
            type="text"
            defaultValue="username"
            id="username"
            name="username"
            autoComplete="username"
          />
        </div>

        <label htmlFor="password">Password:</label>
        <div>
          <img
            src={passkey}
            alt="passkey"
            className="form-icon default-color"
          />
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
          />
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
