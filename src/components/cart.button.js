import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { cartButton, badge, cartButtonWrapper } from "./cart-button.module.css";

const CartButton = ({ quantity }) => {
  return (
    <div className={cartButtonWrapper}>
      <Link
        aria-label={`Shopping Cart with ${quantity} items`}
        to="/cart"
        className={cartButton}
      >
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="2x"
        />
        {quantity > 0 && <div className={badge}>{quantity}</div>}
      </Link>

    </div>
  );
};

export default CartButton;
