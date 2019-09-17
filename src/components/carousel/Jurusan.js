import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styles from './Jurusan.module.css';
import image from '../../images/cs.jpg';
import image2 from '../../images/lumba-lumba.png';
import image3 from '../../images/anemon.png';

export class Jurusan extends Component {
  state = {
    children: [
      <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
        <img
          src={image}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          alt=''
        />
      </div>,
      <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
        <img
          src={image}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          alt=''
        />
      </div>
    ],
    activeItemIndex: 0
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { children, activeItemIndex } = this.state;

    return (
      <div
        style={{
          padding: '0 60px',
          maxWidth: '400px',
          maxHeight: '400px',
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
          rightChevron={<p style={{ zIndex: 99 }}>{'>'}</p>}
          leftChevron={<p style={{ zIndex: 99 }}>{'<'}</p>}
          outsideChevron={true}
        >
          {children}
        </ItemsCarousel>
        <div
          className={
            this.props.image == 1 ? styles.ImageWrapper : styles.ImageWrapper2
          }
        >
          <img src={this.props.image == 1 ? image2 : image3} alt='' />
        </div>
      </div>
    );
  }
}

export default Jurusan;
