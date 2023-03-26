
import React, { Component } from 'react';

import styles from './Impact.module.css';

class Impact extends Component {
  render() {

    return (
        <>
        <div className={styles.container}>
        <h2 className={styles.reportings_title}>{this.props.page} impact</h2>

<img src="icons/fairtrade.png" className={styles.reportings_image} />


          <p className={styles.reportings_metricListing_left}>
                <b className={styles.data}>5</b>
            </p>
            <p className={styles.subtext}>ethically sourced products</p>

            <img src="icons/organic.png" className={styles.reportings_image} />
            <p className={styles.reportings_metricListing_left}>
                   
                    <b className={styles.data}>20</b>
                </p>
                <p className={styles.subtext}>100% organic products</p>

                <img src="icons/reusable.png" className={styles.reportings_image}></img>

                <p className={styles.reportings_metricListing_left}>
                    <b className={styles.data}>1</b>
                </p>
                <p className={styles.subtext}>reusable or recycleable product</p>
            
                </div>
            </>

    );
	}
}

export default Impact;
