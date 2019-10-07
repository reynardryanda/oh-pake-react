import React, { Component } from 'react';
import styles from './Footer.module.css';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footerContainer}>
        <p>© Copyright, OH Fasilkom UI 2019</p>
        <div className={styles.sosmed}>
            <a href="https://twitter.com/ohfasilkom?lang=en" ><img src={twitter} alt=""/></a>
            <a href="https://www.instagram.com/ohfasilkom/?hl=en"><img src={instagram} alt=""/></a>
        </div>
      </div>
    )
  }
}