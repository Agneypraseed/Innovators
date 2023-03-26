
import React, { Component } from 'react';

import styles from './Impact.module.css';

class Impact extends Component {
  render() {

    return (
        <><h2 className={styles.reportings_title}>{this.props.page} impact</h2><div className={styles.reportings_metricListing}>
            <p className={styles.reportings_metricListing_left}>
                <img src="icons/card.png" className={styles.reportings_image} />
                <b>80lb</b> &#160;less fossil fuels burned
            </p>
        </div><div className={styles.reportings_metricListing}>
                <p className={styles.reportings_metricListing_left}>
                    <img src="icons/nonprofit.png" className={styles.reportings_image} />
                    <b>22L</b> &#160;of water saved
                </p>
            </div><div className={styles.reportings_metricListing}>
                <p className={styles.reportings_metricListing_left}>
                    <img src="icons/nonprofit.png" className={styles.reportings_image} />
                    <b>8b</b> &#160;less toxins in your system
                </p>
            </div></>

    );
	}
}

export default Impact;
