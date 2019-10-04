import React, { Component } from 'react';
import styles from './Jurusan.module.css';
import image2 from '../../images/lumba-lumba.png';


export class Jurusan extends Component {
  render() {
    const content = this.props.content;

    return (
      <div className={styles.box}>
        <h4 className={styles.slideTitle} >{content.title}</h4>
        <div
          className={styles.Jurusan}
        >
        <div className={styles.slidr}>
            {content.content}
        </div>
          <div className={styles.ImageWrapper}>
            <img src={image2} alt='' />
          </div>
        </div>
        <div className={styles.text}>
        <p>{content.text}</p>
        </div>
        </div>
    );
  }
}

export default Jurusan;
