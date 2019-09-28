import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styles from './Jurusan.module.css';
import image2 from '../../images/lumba-lumba.png';
import image3 from '../../images/anemon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
 

export class Jurusan extends Component {
  state = {
    activeItemIndex: 0
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;
    const children = this.props.content;

    return (
      <div>
      <div className={styles.box}>
        <h2 className={styles.slideTitle} >{this.props.title}</h2>
        <div
          style={{
            padding: '0 60px',
            maxWidth: '350px',
            maxHeight: '350px',
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
            leftChevron = {<FontAwesomeIcon icon={faAngleLeft} className={styles.gede} />}
            rightChevron = {<FontAwesomeIcon icon={faAngleRight} className={styles.gede} />}
            outsideChevron={true}
            className={styles.slidr}
          >
            {children.map(c=>c.content)}
          </ItemsCarousel>
          <div
            className={
              this.props.image === 1 ? styles.ImageWrapper : styles.ImageWrapper2
            }
          >
            <img src={this.props.image === 1 ? image2 : image3} alt='' />
          </div>
        </div>
        </div>
        <div className={styles.text}>
          <p>{children[activeItemIndex].text}</p>
        </div>
      </div>
    );
  }
}

export default Jurusan;
