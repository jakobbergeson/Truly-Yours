/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import CartIcon from '../icons/cart';

const CartButton = ({ quantity, badge }) => {

  return (
    <>
      <CartIcon />
      {quantity > 0 && <div sx={badge}>{quantity}</div>}
    </>
  );
};

export default CartButton;
