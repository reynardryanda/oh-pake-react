import React, { Component } from 'react';
import styles from './whattheysay.module.css';
import lumba from '../../images/lumba.png';

export default class WhatTheySay extends Component {

  render() {

    return (
      <div>
        <h2 className={styles.title} >WHAT DO THEY SAY?</h2>
        <div className={styles.box}>
            <div className={styles.lumba}>
              <img src={lumba} alt="lumba"/>
            </div>
            <div className={styles.textBubble}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <h4>- Nama Orang</h4>
            </div>
        </div>
      </div>
    );
  }
}

