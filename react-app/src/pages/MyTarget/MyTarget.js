import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

import styles from "./myTarget.module.css";

class MyTarget extends Component {
  state = {
    data: null,
    data2: null,
  };

  componentDidMount() {
    fetch("http://localhost:4000/gettotalcashback")
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.error(error));
    fetch("http://localhost:4000/getgreencashback")
      .then((response) => response.json())
      .then((data2) => this.setState({ data2 }))
      .catch((error) => console.error(error));
  }

  render() {
    const { data } = this.state;
    const { data2 } = this.state;

    return (
      <body className={styles.body}>
        <header className={styles.header}>
          <div className={styles.actionButtonsContainer}>
            <a href="/" className={styles.noStyle}>
              <img src="icons/close.png" className={styles.actionButtons} />
            </a>
            <img src="icons/scanBarcode.png" className={styles.actionButtons} />
          </div>

          <div className={styles.header_textContainer}>
            <h1 className={styles.header_title}>Target Circle</h1>
            <p className={styles.header_subtext}>More rewarding, all around.</p>
          </div>
        </header>

        <a href="/" className={styles.listItem}>
          <div className={styles.listItem_leftContentContainer}>
            <img src="icons/birthday.png" className={styles.listItem_image} />
            <div className={styles.listItem_descriptionContainer}>
              <h2 className={styles.listItem_title_normal}>
                Birthday: <b>05/11</b>
              </h2>
            </div>
          </div>
        </a>

        <a href="/greenprogram" className={styles.listItem}>
          <div className={styles.listItem_leftContentContainer}>
            <img
              src="icons/circleActivity.png"
              className={styles.listItem_image}
            />
            <div className={styles.listItem_descriptionContainer}>
              <h2 className={styles.listItem_title}>Target Circle activity</h2>
            </div>
          </div>
          <img src="icons/carat_right.png" className={styles.listItem_carat} />
        </a>

        <a href="/greenprogram" className={styles.listItem}>
          <div className={styles.listItem_leftContentContainer}>
            <img src="icons/leaf.png" className={styles.listItem_image} />
            <div className={styles.listItem_descriptionContainer}>
              <h2 className={styles.listItem_title}>Green Loyalty Program</h2>
              <p className={styles.listItem_subtext}>
                Shop Green for More Green
              </p>
            </div>
          </div>
          <img src="icons/carat_right.png" className={styles.listItem_carat} />
        </a>

        <a href="/greenprogram" className={styles.listItem}>
          <div className={styles.listItem_leftContentContainer}>
            <div className={styles.listItem_descriptionContainer}>
              <h2 className={styles.listItem_title}>Partners</h2>
              <p className={styles.listItem_subtext}>
                Enjoy perks from Ulta Beauty and Apple
              </p>
            </div>
          </div>
          <img src="icons/carat_right.png" className={styles.listItem_carat} />
        </a>

        <a href="/" className={styles.reportings}>
          <h2 className={styles.reportings_title}>Available earnings</h2>
          <div className={styles.reportings_metricListing}>
            <p className={styles.reportings_metricListing_left}>
              <img src="icons/card.png" className={styles.reportings_image} />
              {data2 ? (
                <b>${parseFloat(data2.result).toFixed(2)}&#160;available</b>
              ) : (
                <b>Loading... &#160;available</b>
              )}
            </p>
            <a href="/" className={styles.reportings_metricListing_link}>
              Apply
            </a>
          </div>
          <div className={styles.reportings_metricListing}>
            <p className={styles.reportings_metricListing_left}>
              <img
                src="icons/nonprofit.png"
                className={styles.reportings_image}
              />
              Vote for nonprofits
            </p>
            <a href="/" className={styles.reportings_metricListing_link}>
              [1] vote
            </a>
          </div>
        </a>

        <a href="/" className={styles.reportings}>
          <div className={styles.reportings_metricListing}>
            <p className={styles.reportings_metricListing_left}>
              <img
                src="icons/lifetimeEarnings.png"
                className={styles.reportings_image}
              />
              {data ? (
                <b>${data.result}&#160;lifetime earnings</b>
              ) : (
                <b>Loading... &#160;lifetime earnings</b>
              )}
            </p>
            <img
              src="icons/informational.png"
              className={styles.reportings_informationalIcon}
            />
          </div>
          <div className={styles.reportings_metricListing}>
            <p className={styles.reportings_metricListing_left}>
              <img
                src="icons/lifetimeSavings.png"
                className={styles.reportings_image}
              />
              <b>$250.00 </b> &#160;lifetime savings
            </p>
            <img
              src="icons/informational.png"
              className={styles.reportings_informationalIcon}
            />
          </div>
        </a>

        <a href="/" className={styles.howItWorks}>
          How it works
        </a>

        <Nav />
      </body>
    );
  }
}

export default MyTarget;
