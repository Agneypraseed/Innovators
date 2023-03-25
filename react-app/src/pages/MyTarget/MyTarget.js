import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

import styles from './myTarget.module.css';

class MyTarget extends Component {
  render() {

    return (
      <body className={styles.body}>
      <img src="icons/components/TargetCircleCard.png" className={styles.placeholderImage}/>
    	<a href="/" className={styles.listItem}>
        <div className={styles.listItem_leftContentContainer}>
          <img src="icons/leaf.png" className={styles.listItem_image}/>
          <div className={styles.listItem_descriptionContainer}>
              <h2 className={styles.listItem_title}>Green Loyalty Program</h2>
              <p className={styles.listItem_subtext}>Shop Green for More Green</p>
          </div>
        </div>
        <img src="icons/carat_right.png" className={styles.listItem_carat}/>
      </a>
      <img src="icons/components/TargetCircleCard_bottom.png" className={styles.placeholderImage}/>
      
      <a href="/" className={styles.reportings}>
        <h2 className={styles.reportings_title}>Available earnings</h2>
        <div className={styles.reportings_metricListing}>
          <p className={styles.reportings_metricListing_left}>
            <img src="icons/card.png" className={styles.reportings_image}/>
            $[0.00] available
          </p>
          <a href="/" className={styles.reportings_metricListing_link}>Apply</a>
        </div>
        <div className={styles.reportings_metricListing}>
          <p className={styles.reportings_metricListing_left}>
            <img src="icons/nonprofit.png" className={styles.reportings_image}/>
            Vote for nonprofits
          </p>
          <a href="/" className={styles.reportings_metricListing_link}>[1] vote</a>
        </div>
      </a>

      <a href="/" className={styles.reportings}>
        <div className={styles.reportings_metricListing}>
          <p className={styles.reportings_metricListing_left}>
            <img src="icons/lifetimeEarnings.png" className={styles.reportings_image}/>
            <b>$[0.00] </b> &#160;lifetime earnings
          </p>
          <img src="icons/informational.png" className={styles.reportings_informationalIcon}/>
        </div>
        <div className={styles.reportings_metricListing}>
          <p className={styles.reportings_metricListing_left}>
            <img src="icons/lifetimeSavings.png" className={styles.reportings_image}/>
            <b>$[0.00] </b> &#160;lifetime savings
          </p>
          <img src="icons/informational.png" className={styles.reportings_informationalIcon}/>
        </div>
      </a>

      <a href="/" className={styles.howItWorks}>
        How it works
      </a>

      <Nav/>
      </body>
    );
	}
}

export default MyTarget;