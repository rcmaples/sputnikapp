import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Provider } from "react-redux";

import "../styles/styles.scss";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import GithubAuth from "../components/GithubAuth";
import Dashboard from "../components/Dashboard";
import NotFoundPage from "../components/NotFoundPage";
import LandingPage from "../components/LandingPage";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import store from "../store";
import PrivateRoute from "../components/PrivateRoute";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwtDecode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <main>
              <Routes>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/login" component={LoginForm} exact={true} />
                <Route path="/signup" component={RegisterForm} exact={true} />
                <PrivateRoute
                  path="/github/:code?"
                  component={GithubAuth}
                  exact={true}
                />
                <PrivateRoute
                  path="/dashboard"
                  component={Dashboard}
                  exact={true}
                />
                <Route component={NotFoundPage} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRouter;
