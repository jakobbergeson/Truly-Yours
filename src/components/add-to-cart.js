/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useContext } from "react";
import { StoreContext } from "../context/store-context";
import { CartContext } from "./layout";
import { addToCartStyles } from '../utils';

const AddToCart = ({ variantId, quantity, available, ...props }) => {

  const { addVariantToCart, loading } = useContext(StoreContext);
  const handleOpenCart = useContext(CartContext);

  function clickHandler(e) {
    addToCart(e);
    openCartHandler(e);
  }

  function addToCart(e) {
    e.preventDefault();
    addVariantToCart(variantId, quantity);
  }

  function openCartHandler(e) {
    e.preventDefault();
    handleOpenCart(true);
  }

  return (
    <button
      type="submit"
      sx={addToCartStyles.addToCart}
      onClick={clickHandler}
      disabled={!available || loading}
      {...props}
    >
      {available ? "ADD TO CART" : "Out of Stock"}
    </button>
  );
};

export default AddToCart;
