/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styles from './Navbar.module.css';
import logo from '../../images/logo.png';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  render() {
    return (
      <div className={styles.Navbar}>
        <img src={logo} alt='logo' />
        <nav>
          <ul class='navbar'>
            <li>
                <Link
                  activeClass="active"
                  to=""
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                >Home</Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="fasilkom"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
              >Fasilkom</Link>
            </li>
            <li>
              <a href='#info'>OH 2019</a>
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
