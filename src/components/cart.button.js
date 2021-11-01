/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import CartIcon from '../icons/cart';

const CartButton = ({ quantity, badge }) => {
  return (
    <>
      <CartIcon />
      {quantity > 0 && <div className={badge}>{quantity}</div>}
    </>
  );
};

export default CartButton;
