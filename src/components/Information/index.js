import React, { Component } from 'react';
import styles from './information.module.css';
import calendarImg from '../../images/calendar.png';
import locationImg from '../../images/location.png';

export default class Information extends Component {
    render(){
        return(
            <div className={styles.infoContainer}>
                <div class={styles.textContainer}>
                    <div>
                        <h2>OPEN HOUSE FASILKOM UI</h2>
                        <h5 className={styles.h5Dive}>#DiveIntoIT</h5>
                    </div>
                    <div className={styles.informationDetail}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet qui cupiditate facilis quas id aliquam repellendus ipsa accusantium dolore? Eligendi quae quis consectetur neque modi natus corrupti odio suscipit assumenda sequi molestiae ipsa impedit dignissimos dolore, tempora esse laborum et asperiores eveniet possimus molestias quaerat autem, reiciendis voluptates! Quaerat.</p>
                    </div>
                    <div className={styles.placeDate}>
                        <img src={calendarImg} alt="" />
                        <div>
                            <p>Sabtu, <span className="bold">30 November 2019</span></p>
                            <p>08.30 - Selesai</p>
                        </div>
                    </div>
                    <div className={styles.placeDate}>
                        <img src={locationImg} alt="" />
                        <div>
                            <p>Fakultas Ilmu Komputer,</p>
                            <p>Universitas Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}