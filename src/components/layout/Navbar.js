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
          <ul>
            <li>
                <Link
                  activeClass="active"
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                ><p className={styles.links} >Home</p></Link>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDlkFijBJnEI8lPO08u-lHqoayeQIQlMUlGApp4yoj8pZKRw/viewform"><p className={styles.links} >RSVP</p></a>
            </li>
            
            <li>
              <Link
                activeClass="active"
                to="sneakpeak"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
              ><p className={styles.links} >Sneak Peak</p></Link>
            </li>
          </ul>
        </nav>
    
      </div>
    );
  }
}
