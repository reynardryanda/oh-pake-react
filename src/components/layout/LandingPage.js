import React, { Component } from 'react';
import styles from './LandingPage.module.css';
import Jurusan from '../carousel/Jurusan';

export class LandingPage extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <div className={styles.TextWrapper}>
          <h1>A GLIMPSE OF LIFE AT FASILKOM UI</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            eveniet qui cupiditate facilis quas id aliquam repellendus ipsa
            accusantium dolore? Eligendi quae quis consectetur neque modi natus
            corrupti odio suscipit assumenda sequi molestiae ipsa impedit
            dignissimos dolore, tempora esse laborum et asperiores eveniet
            possimus molestias quaerat autem, reiciendis voluptates! Quaerat.
          </p>
        </div>
        <div className={styles.LandingPage}>
          <Jurusan image={1}></Jurusan>
          <Jurusan image={2}></Jurusan>
        </div>
      </header>
    );
  }
}

export default LandingPage;