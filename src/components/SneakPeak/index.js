import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styles from './sneakpeak.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
 

export default class SneakPeak extends Component {
  state = {
    activeItemIndex: 0
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;
    const children = [<div className={styles.anjay}/>,
        <div className={styles.anjay}/>]

    return (
      <div>
        <h2 className={styles.slideTitle} >SneakPeak</h2>
        <div className={styles.box}>
            <div
            style={{
                padding: '0 60px',
                maxWidth: '80vw',
                maxHeight: 'auto',
                margin: '0 auto',
                position: 'relative'
            }}
            className={styles.Jurusan}
            >
            <ItemsCarousel
                numberOfCards={1}
                gutter={12}
                showSlither={false}
                firstAndLastGutter={false}
                freeScrolling={false}
                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}
                chevronWidth={88}
                // rightChevron={<p style={{ zIndex: 99 }} className={styles.gede}>{'>'}</p>}
                // leftChevron={<p style={{ zIndex: 99 }} className={styles.gede}>{'<'}</p>}
                leftChevron = {<FontAwesomeIcon icon={faChevronCircleLeft} className={styles.gede} />}
                rightChevron = {<FontAwesomeIcon icon={faChevronCircleRight} />}
                outsideChevron={true}
                className={styles.slidr}
            >
                {children}
            </ItemsCarousel>
            </div>
            <div>ahahahha</div>
        </div>
      </div>
    );
  }
}

