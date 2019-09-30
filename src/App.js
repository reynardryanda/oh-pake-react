import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/layout/LandingPage';
import './App.css';
import Counter from './components/Counter';
import Information from './components/Information';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <Counter />
        <Information />
        <Register />
      </div>
    );
  }
}

export default App;
