
import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
      <CardActions>
        <Button variant="contained"  style={{
        backgroundColor: "#bb271a",
        textTransform: "none"
    }}>
          Add to cart
        </Button>
      </CardActions>
    </Card>

            <Card className={styles.cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="images/product2.png"
          title="Method All-Purpose"
        />
        <CardContent>
        
        <p className={styles.cashback}>
        <img src="icons/leaf.png" className={styles.logo}/>
        Earn 1.5% cashback for shopping green</p>
        <p className={styles.cardPrice}><b>$7.79</b></p>
        <p style={{textAlign:'left'}}>Nature's Path Grain Free Maple Almond Granola - ...</p>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" style={{
        backgroundColor: "#bb271a",
        textTransform: "none"
    }} className={styles.whiteLabel}>
          Add to cart
        </Button>
      </CardActions>
    </Card>

  
      </div>
      </div>

      
      <img src="images/greenforgreen.png"></img>

      
      <Nav/>
      </body>


    );
	}
}

export default Discover;