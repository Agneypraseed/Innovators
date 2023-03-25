import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

class Nav extends Component {
  render() {

    return (
    	<nav className={styles.navContainer}>
    		<a href="facebook.com" className={styles.link}>
          <img src="icons/discover_unselected.png" alt="Discover" className={styles.navImage}/>
          Discover
        </a>
        <a href="/" className={styles.link}>
          <img src="icons/essentials_unselected.png" alt="Essentials" className={styles.navImage}/>
          Essentials
        </a>
        <a href="/" className={styles.link}>
          <img src="icons/wallet_unselected.png" alt="Wallet" className={styles.navImage}/>
          Wallet
        </a>
        <a href="/" className={styles.link}>
          <img src="icons/cart_unselected.png" alt="Cart" className={styles.navImage}/>
          Cart
        </a>
        <a href="/" className={styles.link}>
          <img src="icons/myTarget_unselected.png" alt="My Target" className={styles.navImage}/>
          My Target
        </a>
    	</nav>
    );
	}
}

export default Nav;