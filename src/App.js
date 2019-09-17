import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/layout/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
