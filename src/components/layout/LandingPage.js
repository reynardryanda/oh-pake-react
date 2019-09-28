import React, { Component } from 'react';
import styles from './LandingPage.module.css';
import Jurusan from '../carousel/Jurusan';
import image from '../../images/cs.jpg';


export class LandingPage extends Component {
  render() {
    const majors = [
      {
        content: 
          <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
            <img
              src={image}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              alt=''
            />
          </div>,
        text : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet qui cupiditate facilis t. Veritatis eveniet qui cupiditate facilis"
      }, 
      {
        content: 
          <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
            <img
              src={image}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              alt=''
            />
          </div>,
        text : " Lorem ipsum dolor eveniet qui cupiditate facilis t. Veritatis eveniet possimus molestias quaerat autem, reiciendis voluptates! Quaerat. sifilis"
      }
    ]
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
            <Jurusan image={1} title={"MAJORS"} content={majors} />          
            <Jurusan image={2} title={"ACTIVITIES"} content={majors}/>
        </div>
      </header>
    );
  }
}

export default LandingPage;
