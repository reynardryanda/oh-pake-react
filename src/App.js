import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/layout/LandingPage';
import './App.css';
import Counter from './components/Counter';
import Information from './components/Information';
import Register from './components/Register';
import SneakPeak from './components/SneakPeak';
import WhatTheySay from './components/WhatTheySay';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    const components = [
        <LandingPage />,
        <Counter />,
        <Information />,
        <SneakPeak />,
        <WhatTheySay />,
        <Register />,
        <Footer />
    ]
    return (
      <div className='App'>
        <Navbar />
        <div className='landingpage' />
        <div className="main-bg">
          {
          components.map(child => {
            return(
              <Fade bottom>
              {child}
              </Fade>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
