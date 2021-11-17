import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../context/store-context";
import LineItem from "./line-item";
import formatPrice from "./format-price";
import {
  table,
  wrap,
  header,
  chevLeft,
  cartQuan,
  cartBadge,
  totals,
  grandTotal,
  summary,
  checkoutButton,
  collapseColumn,
  labelColumn,
  imageHeader,
  productHeader,
  emptyStateContainer,
  emptyStateHeading,
  emptyStateLink,
  title,
} from "./cart.module.css";

const Cart = ({ handleOpenCart, quantity }) => {

  const { checkout, loading } = React.useContext(StoreContext);

  const emptyCart = checkout.lineItems.length === 0;
  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <div className={wrap}>
      <div className={header}>
        <FontAwesomeIcon
          className={chevLeft}
          icon={faChevronLeft}
          onClick={() => { handleOpenCart(false); }}
        />
        <p
          className={cartQuan}>
          CART
          [{quantity}]
        </p>
      </div>
      {emptyCart ? (
        <div className={emptyStateContainer}>
          <p className={emptyStateHeading}>Your cart is empty.</p>
          <Link to="/products/" className={emptyStateLink}>
            View products
          </Link>
        </div>
      ) : (
        <>
          <div className={[totals, collapseColumn].join(" ")}>Total</div>
          {checkout.lineItems.map((item) => (
            <LineItem item={item} key={item.id} />
          ))}
          <div className={totals}>
            {formatPrice(
              checkout.subtotalPriceV2.currencyCode,
              checkout.subtotalPriceV2.amount
            )}
          </div>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className={checkoutButton}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;