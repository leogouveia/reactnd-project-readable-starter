import React, { Component } from 'react';
import './App.scss';
import Navbar from './Navbar';
import { LoadingBar } from 'react-redux-loading-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LoadingBar />
      </div>
    );
  }
}

export default App;
