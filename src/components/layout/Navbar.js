import React, { Component } from 'react';
import styles from './Navbar.module.css';
import logo from '../../images/logo.png';

export class Navbar extends Component {
  render() {
    return (
      <div className={styles.Navbar}>
        <img src={logo} alt='logo' />
        <nav>
          <ul class='navbar'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Fasilkom</a>
            </li>
            <li>
              <a href='#'>OH 2019</a>
            </li>
          </ul>
        </nav>
        <a href='#' class='contact'>
          <button type='button' name='button'>
            Contact
          </button>
        </a>
      </div>
    );
  }
}

export default Navbar;
