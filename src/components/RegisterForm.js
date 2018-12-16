import React from 'react';

export const RegistrationForm = () => (
  <form>
    <fieldset>
      <legend>Sign Up:</legend>
      <label for="username">Username:</label>
      <input
        type="text"
        defaultValue="username"
        id="username"
        name="username"
        autocomplete="username"
      />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        autocomplete="current-password"
      />
      <input type="submit" value="Sign up" />
    </fieldset>
  </form>
);
