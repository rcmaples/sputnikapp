import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
// import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegisterForm';
// import FeedComponent from './components/FeedComponent';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundcolor: 'white' }}>
        <Header />
        <main>
          <RegistrationForm />
          {/* <FeedComponent type="following" />
          <FeedComponent type="watching" />
          <FeedComponent type="starred" />
          <FeedComponent type="repos" />
          <FeedComponent type="popular" /> */}
        </main>
      </div>
    );
  }
}

export default App;
