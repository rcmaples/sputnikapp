import React, { Component } from 'react';
import logo from './logo.svg';
import loaderGif from './SatelliteLoader@2x.gif';
import './App.css';
import Loader from './components/Loader';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundcolor: 'white' }}>
        <header className="App-header">
          <img src={loaderGif} className="App-logo loader" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
