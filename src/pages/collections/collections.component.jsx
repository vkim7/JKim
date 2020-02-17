import React, { Component, Fragment } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';

import COLLECTIONS_DATA from './collections.data';

import './collections.styles.scss';

class CollectionsPage extends Component {
  render() {
    return (
      <Fragment>
        <div className='collection-items'>
          <h1 className='title'>FALL WINTER 2019</h1>
          <div className='image-container'>
            {COLLECTIONS_DATA.summer.map(col => (
              <div className='image'>
                <img
                  src={col.imageUrl}
                  alt=''
                  style={{
                    // width: 320,
                    // height: 426
                    width: 260,
                    height: 340
                  }}
                />
              </div>
            ))}
          </div>
          <h1 className='title'>DETAILS</h1>
        </div>
        <Carousel
          slidesPerScroll={2}
          slidesPerPage={4}
          infinite
          arrows
          animationSpeed={1500}
          autoPlay={3000}
          stopAutoPlayOnHover
          offset={0}
          itemWidth={324}
          clickToChange
          centered
          arrowLeft={
            <FontAwesomeIcon icon={faAngleDoubleLeft} size='1x' color='grey' />
          }
          arrowRight={
            <FontAwesomeIcon icon={faAngleDoubleRight} size='1x' color='grey' />
          }
          addArrowClickHandler
        >
          {COLLECTIONS_DATA.details.map(col => (
            <div className='image'>
              <img
                src={col.imageUrl}
                alt=''
                style={{
                  // width: 320,
                  // height: 426
                  width: 320,
                  height: 426
                }}
              />
            </div>
          ))}
        </Carousel>
        <div className='description-container'>
          <h3 className='description'>
            <p>FALL WINTER 2017</p>
            For J.Kim fall–winter 2017/2018 J.Kim collection designer Jenia Kim
            again chooses national Korean costume as her main reference. This
            time the collection is based on military parades aesthetics of North
            Korean. This reference can be seen in boxy cuts of the jackets,
            dresses with collars and floor length coats. This season it’s all
            about the silhouette and cut, everything is clean and very
            minimalistic. Another source of inspiration for the collection are
            still life paintings featuring different compositions of flowers
            captured against the backdrop of draped fabrics. This reference is
            translated through the second part of the collection where one can
            find jackets, pants and skirts in fluid fabrics and decorated with
            beautiful flowers made of silk and wool. The color palette of the
            collection includes deep shades of maroon, dark green, black and
            dark pink.
            <p>
              YOU CAN MAKE A SPECIAL ORDER FOR ANY GARMENT THAT YOU LIKE FROM
              THE COLLECTION BY E-MAIL INFO@JKIM.RU
            </p>
          </h3>
        </div>
      </Fragment>
    );
  }
}

export default CollectionsPage;
