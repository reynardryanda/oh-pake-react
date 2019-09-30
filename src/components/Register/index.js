import React, { Component } from 'react';
import styles from './register.module.css';
import RegisterButton from '../registerButton';


export default class Register extends Component {
    render(){
        return(
            <div className={styles.registerContainer}>
                <h1>What Are You Waiting For?</h1>
                <h5 className={styles.h5Dive}>LET'S #DIVEINTOIT</h5>
                <RegisterButton className={styles.biggerButton}/>
            </div>
        )
    }
}