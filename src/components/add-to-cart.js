/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { StoreContext } from "../context/store-context";
// import { addToCart as addToCartStyle } from "./add-to-cart.module.css";
import { addToCartStyles } from '../utils';

const AddToCart = ({ variantId, quantity, available, ...props }) => {
  const { addVariantToCart, loading } = React.useContext(StoreContext);

  function addToCart(e) {
    e.preventDefault();
    addVariantToCart(variantId, quantity);
  }

  return (
    <button
      type="submit"
      sx={addToCartStyles.addToCart}
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      {available ? "ADD TO CART" : "Out of Stock"}
    </button>
  );
};

export default AddToCart;
