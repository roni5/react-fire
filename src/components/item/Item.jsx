import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ListToggle from '../togglelist/ListToggle';
import PropTypes from 'prop-types';
import style from './style.scss';

/**
 * @render react
 * @name Item
 * @description fetch's title items
 * @example
 * <Item
 *   title='Demo List Item'
 *   rating={6}
 *   overview='This demo item brought you by the Bit team'
 *   backdrop='https://image.tmdb.org/t/p/w500_and_h282_face/cCz1uWakOmxhIcoyX3U6Afyl5Ju.jpg '
 * />
 */
export default class Item extends Component {
  static defaultProps = {
    title: 'Demo Item',
    rating: 6,
    overview: 'This demo item brought you by Bit team',
    backdrop: 'https://image.tmdb.org/t/p/w500_and_h282_face/cCz1uWakOmxhIcoyX3U6Afyl5Ju.jpg ',
  }

  static propTypes = {
    /**
     * @property {string} title item's title
     */
    title: PropTypes.string,

    /**
     * @property {number} score item's score (1-10 float range)
     */
    score: PropTypes.number,

    /**
     * @property {string} overview text for describing the item's overview
     */
    overview: PropTypes.string,

    /**
     * @property {string} backdrop thumbnail image for item
     */
    backdrop: PropTypes.string
  }

  render() {
    const { backdrop, title, score, overview } = this.props;
    return (
      <div className={style.Item} style={{ backgroundImage: 'url(' + backdrop + ')' }} >
        <div className={style.overlay}>
          <div className={style.title}>{title}</div>
          <div className={style.rating}>{score} / 10</div>
          <div className={style.plot}>{overview}</div>
          <ListToggle />
        </div>
      </div>
    );
  }
}