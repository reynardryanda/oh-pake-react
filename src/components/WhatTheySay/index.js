import React, { Component } from 'react';
import styles from './whattheysay.module.css';
import lumba from '../../images/lumba.png';

export default class WhatTheySay extends Component {

  render() {

    return (
      <div id="testimonials">
        <h2 className={styles.title} >WHAT DO THEY SAY?</h2>
        <div className={styles.box}>
            <div className={styles.lumba}>
              <img src={lumba} alt="lumba"/>
            </div>
            <div className={styles.textBubble}>
              <p>
              Menjadi murid SMA tingkat akhir yaitu kelas 12 tentu menjadi masa-masa yang sangat krusial bagi kita semua.
              Karena kita sebentar lagi akan melanjutkan pendidikan ke jenjang yang lebih tinggi.
              Saat saya sedang bingung mau masuk fakultas apa, saya ingat bahwa saya selalu melibatkan teknologi informasi di kehidupan saya.
              Terbesit dalam benak saya mengenai Fakultas Ilmu Komputer. 
              OH Fasilkom UI sangat membantu saya lebih tahu mengenai peran Teknologi Informasi, dan tentunya lebih tahu tentang Fasilkom, fakultas paling keren di UI ini!
              </p>
              <h4>- Rania Devina Nandini (Sistem Informasi 2019)</h4>
            </div>
        </div>
      </div>
    );
  }
}

