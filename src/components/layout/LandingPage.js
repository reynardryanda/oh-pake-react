import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './LandingPage.module.css';
import Jurusan from '../carousel/Jurusan';
import ilkom from '../../images/ilkom.png';
import si from '../../images/si.png';
import compfest from '../../images/compfest.jpg';
import muskan from '../../images/muskan.jpg';
import educare from '../../images/educare.jpg';
import Activities from '../carousel/Activities';


export default class LandingPage extends Component {
  render() {
    const majors = [
      {
        content: 
          <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
            <img
              src={ilkom}
              style={{ width: '100%', height: '100%' }}
              alt=''
            />
          </div>,
        title: "Ilmu Komputer",
        text : "Program Studi Ilmu Komputer memberikan kesempatan kepada para lulusan SMA/sederajat yang untuk mendapatkan pendidikan dan keahlian di bidang Ilmu Komputer pada tingkat sarjana (S1). Program ini dirancang untuk memenuhi kebutuhan terhadap tenaga-tenaga muda yang terampil dan profesional di bidang Teknologi Informasi."
      }, 
      {
        content: 
          <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
            <img
              src={si}
              style={{ width: '100%', height: '100%' }}
              alt=''
            />
          </div>,
        title : "Sistem Informasi",
        text : "Program Studi Sistem Informasi memberikan kesempatan kepada lulusan SMA/sederajat untuk mendapatkan pendidikan dan keahlian di bidang Sistem Informasi/Teknologi Informasi pada tingkat sarjana (S1). Program ini dirancang untuk memenuhi kebutuhan terhadap tenaga-tenaga muda yang terampil dan profesional, terutama terkait dengan pengembangan, pemanfaatan, dan pengelolaan Sistem Informasi/Teknologi Informasi dalam suatu organisasi."
      }
    ]

    const activities = [
      {
        content: 
          <div style={{ maxWidth: '500px', maxHeight: '500px', minWidth: '105px' }}>
            <img
              src={compfest}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              alt=''
            />
          </div>,
        title: "Compfest",
        text : "COMPFEST adalah acara IT tahunan terbesar yang diselenggarakan oleh pelajar di Indonesia. Dengan memiliki misi untuk memberi kesadaran masyarakat dalam bidang teknologi informasi, COMPFEST menyelenggarakan berbagai macam acara antara lain: akademi, kompetisi, seminar, dan juga playground."
      }, 
      {
        content: 
          <div style={{ maxWidth: '500px', maxHeight: '500px', minWidth: '105px' }}>
            <img
              src={muskan}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              alt=''
            />
          </div>,
        title : "Muskan",
        text : "Musik Kantin atau biasa disebut Muskan adalah penampilan seni musik dari seluruh elemen Fasilkom UI yang diadakan setiap hari Kamis pada jam makan siang di kantin Fasilkom UI."
      },
      {
        content: 
          <div style={{ maxWidth: '500px', maxHeight: '500px', minWidth: '105px' }}>
            <img
              src={educare}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              alt=''
            />
          </div>,
        title : "Educare",
        text : "Educare adalah acara tahunan yang memiliki tujuan untuk membantu atau memfasilitasi mahasiswa yang akan lulus dalam melanjutkan kehidupan karirnya. Rangkaian acara yang diselenggarakan antara lain: workshop, seminar, talkshow, dan juga TOEFL."
      }
    ]
    return (
      <header id="header" className={styles.Header}>
        <div className={styles.landingpage}>
        </div>
        <Fade bottom>
          <div className={styles.TextWrapper}>
            <h1>A GLIMPSE OF LIFE AT FASILKOM UI</h1>
            <p>
            Berdiri sejak tahun 1993, Fakultas Ilmu Komputer UI atau biasa disebut Fasilkom UI adalah salah satu fakultas Rumpun Ilmu Sains dan Teknologi. Fasilkom UI mengelola program pendidikan jenjang dengan gelar sarjana (S1), magister (S2), dan doktor (S3) serta program pelatihan non-gelar.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <h2 style={{ color: 'rgb(207, 151, 30)', width: '100%', marginTop: '30px'}}>MAJORS</h2>
          <div className={styles.LandingPage}>
            <Jurusan content={majors[0]} />   
            <Jurusan content={majors[1]} />    
          </div>
        </Fade>
        <Fade bottom>
          <Activities title={"ACTIVITIES"} content={activities}/>
        </Fade>
      </header>
    );
  }
}