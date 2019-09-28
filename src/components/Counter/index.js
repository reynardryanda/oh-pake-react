import React, { Component } from 'react';
import styles from './counter.module.css';
import RegisterButton from '../registerButton';

export default class Counter extends Component {
    state = {
        day: 80,
        hour: 80,
        minute: 80,
        second: 80
    };
    render(){
        return(
            <div className={styles.counterContainer}>
                <div>
                    <h1 className={styles.title}>DIVING DEEP IN:</h1>
                </div>
                <div>
                    <div className={styles.counterBox}>
                        <div className={styles.time}>
                            <h1>{this.state.day}</h1>
                            <p className="aquatico">days</p>
                        </div>
                        <div className={styles.separator}>
                            <h1>:</h1>
                        </div>
                        <div className={styles.time}>
                            <h1>{this.state.hour}</h1>
                            <p className="aquatico">hours</p>
                        </div>
                        <div className={styles.separator}>
                            <h1>:</h1>
                        </div>
                        <div className={styles.time}>
                            <h1>{this.state.minute}</h1>
                            <p className="aquatico">minutes</p>
                        </div>
                        <div className={styles.separator}>
                            <h1>:</h1>
                        </div>
                        <div className={styles.time}>
                            <h1>{this.state.second}</h1>
                            <p className="aquatico">seconds</p>
                        </div>
                    </div>
                </div>
                <RegisterButton />
            </div>
        )
    }
}