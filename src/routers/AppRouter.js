import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../styles/styles.scss';
import Header from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { RegistrationForm } from '../components/RegisterForm';
import { GithubAuth } from '../components/GithubAuth';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import LandingPage from '../components/LandingPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/auth/login" component={LoginForm} exact={true} />
          <Route
            path="/auth/signup"
            component={RegistrationForm}
            exact={true}
          />
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/auth/github" component={GithubAuth} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default AppRouter;
