import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import Loader from './components/Loader';
import FeedComponent from './components/FeedComponent';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundcolor: 'white' }}>
        <Header />
        <main>
          <FeedComponent />
          <Loader />
        </main>
      </div>
    );
  }
}

export default App;
