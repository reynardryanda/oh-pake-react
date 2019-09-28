import React, { Component } from 'react';
import styles from './registerButton.module.css';

export default class RegisterButton extends Component {
    render(){
        return(
            <div className={this.props.className}>                
                <button className={styles.button}>
                    Register Here!
                </button>
            </div>
        )
    }
}