import React from 'react';
import astronaut from '../images/astonaut-avatar.svg';
import passkey from '../images/password-key.svg';
import email from '../images/email.svg';

export const RegistrationForm = () => (
  <section className="registration-section">
    <form>
      <fieldset>
        <legend>Welcome</legend>
        <p className="form-text">
          To get started, please enter your details and choose a password.
        </p>
        <label htmlFor="Name">Name:</label>
        <div className="name-field">
          <img src={astronaut} alt="name" className="form-icon default-color" />
          <input
            type="text"
            placeholder="Yuri Gagarin"
            id="name"
            name="name"
            // autoComplete="emailaddress"
          />
        </div>
        <label htmlFor="emailaddress">Email Address:</label>
        <div className="email-field">
          <img src={email} alt="email" className=" form-icon default-color" />
          <input
            type="text"
            placeholder="soyuz@capsule.com"
            id="emailaddress"
            name="emailaddress"
            autoComplete="emailaddress"
          />
        </div>

        <label htmlFor="password">Password:</label>
        <div>
          <img
            src={passkey}
            alt="passkey"
            className="form-icon warning-color"
          />
          <input
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
            className="form-icon warning-color"
          />
          <input
            type="password"
            id="password-verification"
            name="password-verification"
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
