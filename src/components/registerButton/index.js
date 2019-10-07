import React, { Component } from 'react';
import styles from './registerButton.module.css';

export default class RegisterButton extends Component {
    render(){
        return(
            <div className={this.props.className}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDlkFijBJnEI8lPO08u-lHqoayeQIQlMUlGApp4yoj8pZKRw/viewform">
                    <button className={styles.button} onClick={()=>{window.location.assign('https://docs.google.com/forms/d/e/1FAIpQLSfDlkFijBJnEI8lPO08u-lHqoayeQIQlMUlGApp4yoj8pZKRw/viewform')}}>
                        Register Here!
                    </button>
                </a>                
                
            </div>
        )
    }
}