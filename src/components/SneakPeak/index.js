import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styles from './sneakpeak.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import sneak1 from '../../images/pic1.jpg';
import sneak2 from '../../images/pic2.jpg';
import sneak3 from '../../images/pic3.jpg';
import sneak4 from '../../images/pic4.jpg';

export default class SneakPeak extends Component {
  state = {
    activeItemIndex: 0
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;
    const children = [
    <div className={styles.anjay}>
      <img className={styles.anjayImg} src={sneak1} alt=""/>
    </div>,
    <div className={styles.anjay}>
      <img className={styles.anjayImg} src={sneak2} alt=""/>
    </div>,
    <div className={styles.anjay}>
      <img className={styles.anjayImg} src={sneak3} alt=""/>
    </div>,
    <div className={styles.anjay}>
      <img className={styles.anjayImg} src={sneak4} alt=""/>
    </div>
  
  ]

    return (
      <div id="sneakpeak">
        <h2 className={styles.title} >SneakPeak</h2>
        <div className={styles.box}>
            <div
            className={styles.sneakContainer}
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
                chevronWidth={60}
                // rightChevron={<p style={{ zIndex: 99 }} className={styles.gede}>{'>'}</p>}
                // leftChevron={<p style={{ zIndex: 99 }} className={styles.gede}>{'<'}</p>}
                leftChevron = {<FontAwesomeIcon icon={faChevronCircleLeft} className={styles.gede} />}
                rightChevron = {<FontAwesomeIcon icon={faChevronCircleRight} className={styles.gede} />}
                outsideChevron={true}
                className={styles.slidr}
            >
                {children}
            </ItemsCarousel>
            </div>
        </div>
      </div>
    );
  }
}

