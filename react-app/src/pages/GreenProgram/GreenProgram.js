import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

import styles from './GreenProgram.module.css';

class GreenProgram extends Component {
  render() {

    return (
      <body className={styles.body}>

      <header className={styles.header}>
      <div className={styles.actionButtonsContainer}>
        <a href="/mytarget" className={styles.noStyle}>
          <img src="icons/backArrow.png" className={styles.actionButtons}/>
        </a>

        <img src="icons/scanBarcode.png" className={styles.actionButtons}/>
      </div>

      <div className={styles.header_textContainer}>
        <h1 className={styles.header_title}>Green for Green</h1>
        <p className={styles.header_subtext}>
          Shop sustainably and get rewarded for it! Earn 1.5% cashback when you shop products from our Green Initiatives.
        </p>
      </div>
      </header>

      <a href="/" className={styles.reportings}>
        <div className={styles.reportings_metricListing}>
          <p className={styles.reportings_metricListing_left}>
            <img src="icons/lifetimeEarnings.png" className={styles.reportings_image}/>
            <b>$[0.00] </b> &#160;lifetime earnings
          </p>
        </div>
      </a>

      <a href="/" className={styles.reportings}>
        <h2 className={styles.reportings_title}>Personal impact</h2>
        <div className={styles.reportings_metricListing}>
          <p className={styles.reportings_metricListing_left}>
            <img src="icons/card.png" className={styles.reportings_image}/>
            <b>80lb</b> &#160;less fossil fuels burned
          </p>
        </div>
        <div className={styles.reportings_metricListing}>
          <p className={styles.reportings_metricListing_left}>
            <img src="icons/nonprofit.png" className={styles.reportings_image}/>
            <b>22L</b> &#160;of water saved
          </p>
        </div>
        <div className={styles.reportings_metricListing}>
          <p className={styles.reportings_metricListing_left}>
            <img src="icons/nonprofit.png" className={styles.reportings_image}/>
            <b>8b</b> &#160;less toxins in your system
          </p>
        </div>
      </a>


      <section className={styles.initiatives}>
        <h2 className={styles.initiatives_title}>Explore our initiatives</h2>
        <ul className={styles.initiatives_list}>
          <a href="/" className={styles.initiatives_listItem}>
            <img src="icons/zeroTarget.png" className={styles.initiatives_image}/>
            <p className={styles.initiatives_listItem_title}>Target Zero</p>
          </a>
          <a href="/" className={styles.initiatives_listItem}>
            <img src="icons/zeroTarget.png" className={styles.initiatives_image}/>
            <p className={styles.initiatives_listItem_title}>Target Zero</p>
          </a>
          <a href="/" className={styles.initiatives_listItem}>
            <img src="icons/zeroTarget.png" className={styles.initiatives_image}/>
            <p className={styles.initiatives_listItem_title}>Target Zero</p>
          </a>
          <a href="/" className={styles.initiatives_listItem}>
            <img src="icons/zeroTarget.png" className={styles.initiatives_image}/>
            <p className={styles.initiatives_listItem_title}>Target Zero</p>
          </a>
          <a href="/" className={styles.initiatives_listItem}>
            <img src="icons/zeroTarget.png" className={styles.initiatives_image}/>
            <p className={styles.initiatives_listItem_title}>Target Zero</p>
          </a>

        </ul>
      </section>


      <Nav/> 
      </body>
    );
	}
}

export default GreenProgram;