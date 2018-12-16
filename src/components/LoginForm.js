import React from 'react';

export const LoginForm = () => (
  <form>
    <fieldset>
      <legend>Log in:</legend>
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
      <input type="submit" value="login" />
    </fieldset>
  </form>
);
