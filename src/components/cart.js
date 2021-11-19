import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../context/store-context";
import LineItem from "./line-item";
import formatPrice from "./format-price";
import {
  wrap,
  scrollBox,
  header,
  chevLeft,
  cartQuan,
  checkoutBox,
  lineItemBox,
  checkoutButton,
  emptyStateContainer,
  emptyStateHeading,
  emptyStateLink,
  disclaimer,
} from "./cart.module.css";

const Cart = ({ handleOpenCart, quantity }) => {

  const { checkout, loading } = React.useContext(StoreContext);

  const emptyCart = checkout.lineItems.length === 0;

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  console.log("CHECKOUT: ", checkout);
  console.log("LOADING: ", loading);


  return (
    <div className={wrap}>
      <div className={header}>
        <div className={chevLeft}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => { handleOpenCart(false); }}
          />
        </div>
        <p
          className={cartQuan}>
          CART
          [{quantity}]
        </p>
      </div>
      <div className={scrollBox}>
        <div className={lineItemBox} >

          {emptyCart ? (
            <div className={emptyStateContainer}>
              <p className={emptyStateHeading}>Your cart is empty.</p>
              <Link to="/products/" className={emptyStateLink}>
                View products
              </Link>
            </div>
          ) : (
            <>
              {checkout.lineItems.map((item) => (
                <LineItem item={item} key={item.id} />
              ))}
            </>
          )}
        </div>
      </div>
      <div
        className={checkoutBox}
      >
        <p
          className={disclaimer}
        >
          Shipping & taxes calculated at checkout
        </p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={checkoutButton}
        >
          Checkout • {
            checkout.subtotalPriceV2 &&
            formatPrice(
              checkout.subtotalPriceV2.currencyCode,
              checkout.subtotalPriceV2.amount
            )
          }
        </button>
      </div>
    </div>
  );
};
export default Cart;