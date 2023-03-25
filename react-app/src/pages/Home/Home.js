import React from "react";
import Nav from '../../components/Nav/Nav';
import styles from './home.module.css';


const Home = () => {
  return (
    <>
      <div>
        <header className={styles.header}>
          <h1 className={styles.heading_greeting}>Hello, [Nigel]</h1>
          <img src="icons/gear.png" alt="Wallet"></img>
        </header>
        <ul className={styles.myTarget_linksList}>
          <a href="/" className={styles.myTarget_imageContainer}>
            <img src="icons/components/purchaseHistoryCard.png" alt="Purchase history" className={styles.myTarget_card}></img>
          </a>

          <a href="/mytarget" className={styles.myTarget_links}>
            <img src="icons/components/targetCircle_visuals.png"/>

            <div className={styles.container}>
            <React.Fragment>
              <section className={styles.metricContainer}>
                <h2 className={styles.metricTitle}>earnings available</h2>
                <p className={styles.metricNumber}>[$0.13]</p>
              </section>
            </React.Fragment>

            <React.Fragment>
              <section className={styles.metricContainer}>
                <h2 className={styles.metricTitle}>vote available</h2>
                <p className={styles.metricNumber}>[1]</p>
              </section>
            </React.Fragment>
            </div>
          </a>

          <a href="/" className={styles.myTarget_imageContainer}>
            <img src="icons/components/myTargetCards.png" alt="My Target" className={styles.myTarget_card}></img>
          </a>

        </ul>
        <Nav></Nav>

      </div>
    </>
  );
};

export default Home;