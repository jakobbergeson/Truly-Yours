/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../context/store-context";
import LineItem from "./line-item";
import formatPrice from "./format-price";
import { cartStyles } from "../utils";

const Cart = ({ handleOpenCart, quantity, open }) => {

  const { checkout, loading } = React.useContext(StoreContext);

  const emptyCart = checkout.lineItems.length === 0;

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <div sx={cartStyles.wrap}>
      <div sx={cartStyles.header}>
        <div sx={cartStyles.chevLeft}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => { handleOpenCart(false); }}
          />
        </div>
        <p
          sx={cartStyles.cartQuan}>
          CART
          [{quantity}]
        </p>
      </div>
      <div sx={cartStyles.scrollBox}>
        <div sx={open ? cartStyles.lineItemBoxOpen : cartStyles.lineItemBox} >

          {emptyCart ? (
            <div sx={cartStyles.emptyStateContainer}>
              <p sx={cartStyles.emptyStateHeading}>Your cart is empty.</p>
              <Link
                to="/products/"
                sx={cartStyles.emptyStateLink}
                onClick={() => { handleOpenCart(false); }}
              >
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
        sx={open ? cartStyles.checkoutBoxOpen : cartStyles.checkoutBox}
      >
        <p
          sx={cartStyles.disclaimer}
        >
          Shipping & taxes calculated at checkout
        </p>
        {emptyCart ? (
          <Link
            to='/products/'
            sx={cartStyles.emptyStateButton}
            onClick={() => { handleOpenCart(false); }}
          >
            Shop Now
          </Link>

        ) : (
          <button
            onClick={handleCheckout}
            disabled={loading}
            sx={cartStyles.checkoutButton}
          >
            Checkout • {
              checkout.subtotalPriceV2 &&
              formatPrice(
                checkout.subtotalPriceV2.currencyCode,
                checkout.subtotalPriceV2.amount
              )
            }
          </button>
        )}
      </div>
    </div>
  );
};
export default Cart;