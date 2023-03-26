import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Impact from "../../components/Impact/Impact";

import styles from './product.module.css';

class Product extends Component {
  render() {

    return (
      <body className={styles.body}>
        <header className={styles.header}>
          <img src="images/product_screen.png" ></img>
        </header>

      

      <div className={styles.container}>
        
        <h2>Available offers</h2>
        <p> <img src="icons/leaf.png" className={styles.logo}/><b>Earn 1.5% cashback for shopping green</b></p>
        <a href="#impact"><img src="images/view-impact.png" className={styles.viewImpact}></img> </a>

      </div>
      <a href="/checkout">

      <img src="images/product_screen2.png" className={styles.screen}/>
      </a>

      <div id="impact">
        <Impact page="Sustainability"/>

      </div>

      <img src="images/product_screen3.png" className={styles.screen} />

      <Nav/>
      </body>
    );
	}
}

export default Product;
