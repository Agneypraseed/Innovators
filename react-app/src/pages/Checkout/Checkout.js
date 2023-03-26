import { withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

import styles from "./checkout.module.css";

class Checkout extends Component {

	updateGreen = e => {
		fetch("http://localhost:4000/getgreencashback")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				const new_green_cashback = data['result'] + 0.12
				const requestOptions = {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ green_cashback: new_green_cashback })
				};
				fetch("http://localhost:4000/addgreencashback/641ff49c19224ce852c9f89f", requestOptions)
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((error) => console.error(error));

			})
			.catch((error) => console.error(error));

	}

	render() {
		return (
			<body className={styles.body}>
				<header className={styles.header}>
					<div className={styles.actionButtonsContainer}>
						<a href="/" className={styles.noStyle}>
							<img src="icons/close.png" className={styles.actionButtons} />
						</a>
					</div>

					<div className={styles.header_textContainer}>
						<h1 className={styles.header_title}>Checkout</h1>
						<p className={styles.header_subtext}>
							By placing an order, you agree to Target's terms.
						</p>
					</div>
				</header>

				<Accordion className={styles.accordion} defaultExpanded={true}>
					<AccordionSummary
						className={styles.accordionSummary}
						expandIcon={<ExpandMoreIcon />}
						aria-controls="cart-total"
						id="panel1a-header"
					>
						<ShoppingCartIcon class={styles.shoppingCartIcon} />
						<h2 className={styles.listItem_title}>
							$7.86 total <p className={styles.listItem_subtext}>1 item</p>
							<p className={styles.listItem_subtext}>
								Order Pickup at Merrifield
							</p>
						</h2>
					</AccordionSummary>

					<AccordionDetails>
						<p className={styles.accordionDetails}>
							{" "}
							Ready within 2 hours at Merrifield{" "}
						</p>
						<img src="images/product2.png" />
					</AccordionDetails>
				</Accordion>

				<div className={styles.listItem}>
					<div className={styles.listItem_leftContentContainer}>
						<img
							src="icons/pickup-order.png"
							className={styles.listItem_image}
						/>
						<div className={styles.listItem_descriptionContainer}>
							<h2 className={styles.listItem_title}>Pickup person</h2>
							<p className={styles.listItem_subtext}>Nigel Vaz</p>
						</div>
					</div>
					<a href="/" className={styles.reportings_metricListing_link}>
						Add
					</a>
				</div>

				<div className={styles.listItem}>
					<div className={styles.listItem_leftContentContainer}>
						<img
							src="icons/payment-method.png"
							className={styles.listItem_image}
						/>
						<div className={styles.listItem_descriptionContainer}>
							<h2 className={styles.listItem_title}>Payment</h2>
							<p className={styles.listItem_subtext}>RedCard Debit *1234</p>
						</div>
					</div>
					<a href="/" className={styles.reportings_metricListing_link}>
						Edit
					</a>
				</div>

				<div className={styles.listItem}>
					<div className={styles.listItem_leftContentContainer}>
						<img src="icons/giftcard.png" className={styles.listItem_image} />
						<div className={styles.listItem_descriptionContainer}>
							<h2 className={styles.listItem_title}>Gift cards</h2>
							<p className={styles.listItem_subtext}>
								Pay with a Target GiftCard
							</p>
						</div>
					</div>
					<a href="/" className={styles.reportings_metricListing_link}>
						Add
					</a>
				</div>

				<a href="/" className={styles.reportings}>
					<h2 className={styles.reportings_title}>
						Applied offers & discounts
					</h2>
					<div className={styles.appliedOffers}>
						<p className={styles.reportings_metricListing_left}>
							<img src="icons/check.png" className={styles.reportings_image} />
							Earn $1.5% cashback for shopping green
						</p>
						<p className={styles.appliedOfferSubText}>Applied</p>
					</div>
				</a>

				<div className={styles.container}>
					<h2>Order summary</h2>
					<p className={styles.listItem_subtext}>
						Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$7.79
					</p>
					<p className={styles.listItem_subtext}>
						Estimated
						tax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$0.07
					</p>
					<br></br>
					<hr></hr>
					<br></br>
					<h2 className={styles.listItem_subtext}>
						Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$7.86
					</h2>
				</div>

				<a href="/confirmation" onClick={this.updateGreen}>
					<img src="images/order-button.png" />
				</a>
				<Nav />
			</body>
		);
	}
}

export default Checkout;
