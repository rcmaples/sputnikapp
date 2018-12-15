import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
// import Loader from './components/Loader';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundcolor: 'white' }}>
        <Header />
      </div>
    );
  }
}

export default App;
