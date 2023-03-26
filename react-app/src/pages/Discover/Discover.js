
import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import styles from './discover.module.css';

class Discover extends Component {
  render() {

    return (
      <body className={styles.body}>
        <header className={styles.header}>
        <img src="images/discover-screen.png"></img>
        </header>

       

      <div className={styles.container}>
        
        <h2>Shop Green, Earn Green</h2>

        <div className={styles.cardRow}>
        <Card className={styles.cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="images/product1.png"
          title="Method All-Purpose"
        />
        <CardContent>

        <p className={styles.cashback}><img src="icons/leaf.png" className={styles.logo}/>Earn 1.5% cashback for shopping green</p>
        <p className={styles.cardPrice}><b>$4.39</b></p>

        <p>Method Pink Grapefruit  All Purpose Surface Spray - ..</p>
          
        </CardContent>
      </CardActionArea>
      <img src="images/addtocart.png" ></img>

    </Card>


            <Card className={styles.cardStyle}>
      <CardActionArea>

      <a href="/product">

      
        <CardMedia
          component="img"
          alt="Nature's Path Grain"
          height="140"
          image="images/product2.png"
          title="Nature's Path Grain"
        />

</a>
        <CardContent>
        
        <p className={styles.cashback}>
        <img src="icons/leaf.png" className={styles.logo}/>
        Earn 1.5% cashback for shopping green</p>
        <p className={styles.cardPrice}><b>$7.79</b></p>
        <p style={{textAlign:'left'}}>Nature's Path Grain Free Maple Almond Granola - ...</p>
          
        </CardContent>
      </CardActionArea>
      <a href="/checkout">

      <img src="images/addtocart.png" ></img>
      </a>
    </Card>

  
      </div>
      </div>

      <a href="/greenprogram">
      <img src="images/greenforgreen.png"></img>
      </a>
      
      <Nav/>
      </body>


    );
	}
}

export default Discover;
