import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

import styles from './confirmation.module.css';

class Confirmation extends Component {
  render() {

    return (
      <body className={styles.body}>
        <header className={styles.header}>
        <img src="images/discover-header.png"></img>
        </header>

        <img src="images/order-confirmation.png" className={styles.orderImg}></img>
        <h1>thank you for your order!</h1>
        <p>We'll send confirmations and order updates to <b>nigel.vaz@publicissapient.com</b></p>
        <br></br>
        <h1 className={styles.orderDetails}>your order helped save the planet!</h1>


      

      <div className={styles.container}>
        <img src="icons/pickup-order.png" />
        <h1 className={styles.orderDetails}>Order Details</h1>
        <p>Pickup at Merrifield: <br></br>2905 District Ave S Ste 400, <br></br>Fairfax, VA 22031</p>
      </div>

      <Nav/>
      </body>
    );
	}
}

export default Confirmation;