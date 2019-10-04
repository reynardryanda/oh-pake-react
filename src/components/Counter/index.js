import React, { Component } from 'react';
import styles from './counter.module.css';
import RegisterButton from '../registerButton';

export default class Counter extends Component {
  state = {
    day: 80,
    hour: 80,
    minute: 80,
    second: 80,
    time: null,
    today: false,
  };
  componentDidMount() {
    this.calculateTime(new Date());

    fetch('https://pmb.novi-bot.online/situs/server-time')
      .then(res => {
        return res.json()
      }).then(res => {
        this.calculateTime(new Date(res.server_time));
      }).catch(err => {
        this.calculateTime(new Date());
      });

    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.calculateTime(new Date(this.state.time));
  }

  calculateTime(now) {
    let time = Math.floor((new Date("02 Nov 2019 07:00") - now) / 1000);
    if (time <= 0) {
      this.setState({ today: true })
    }
    const second = time % 60;
    time = Math.floor(time / 60);
    const minute = time % 60;
    time = Math.floor(time / 60);
    const hour = time % 24;
    time = Math.floor(time / 24);
    const day = time;

    this.setState({
      day: this.formating(day),
      hour: this.formating(hour),
      minute: this.formating(minute),
      second: this.formating(second),
      time: now - (-1000)
    })
  }

  formating(num) {
    let s = num + "";
    while (s.length < 2)
      s = "0" + s;
    return s;
  }

  render() {
    return (
      <div className={styles.counterContainer}>
        <div>
          <h1 className={styles.title}>DIVING DEEP IN:</h1>
        </div>
        <div>
          {this.state.today ?
            <div className={styles.counterBox}>
              <div className={styles.time}>
                <h1>TODAY</h1>
              </div>
            </div>
            :
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
            </div>}
        </div>
        <RegisterButton />
      </div>
    )
  }
}