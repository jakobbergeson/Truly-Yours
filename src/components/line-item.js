import * as React from "react";
import debounce from "lodash.debounce";
import { StoreContext } from "../context/store-context";
import formatPrice from "./format-price";
import { GatsbyImage } from "gatsby-plugin-image";
import { getShopifyImage } from "gatsby-source-shopify";
import DeleteIcon from "../icons/delete";
import NumericInput from "./numeric-input";
import {
  title,
  remove,
  lineVariant,
  lineImage,
  lineInfo,
  lineQuan,
  linePrice,
  totals,
  priceColumn,
  lineWrap,
} from "./line-item.module.css";

const LineItem = ({ item }) => {
  const {
    removeLineItem,
    checkout,
    updateLineItem,
    loading,
  } = React.useContext(StoreContext);
  const [quantity, setQuantity] = React.useState(item.quantity);

  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  };
  const price = formatPrice(
    item.variant.priceV2.currencyCode,
    Number(item.variant.priceV2.amount)
  );

  const subtotal = formatPrice(
    item.variant.priceV2.currencyCode,
    Number(item.variant.priceV2.amount) * quantity
  );

  const handleRemove = () => {
    removeLineItem(checkout.id, item.id);
  };

  const uli = debounce(
    (value) => updateLineItem(checkout.id, item.id, value),
    300
  );
  // eslint-disable-next-line
  const debouncedUli = React.useCallback((value) => uli(value), []);

  const handleQuantityChange = (value) => {
    if (value !== "" && Number(value) < 1) {
      return;
    }
    setQuantity(value);
    if (Number(value) >= 1) {
      debouncedUli(value);
    }
  };

  function doIncrement() {
    handleQuantityChange(Number(quantity || 0) + 1);
  }

  function doDecrement() {
    handleQuantityChange(Number(quantity || 0) - 1);
  }

  const image = React.useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: "constrained",
        crop: "contain",
        width: 160,
        height: 160,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variantImage.src]
  );

  return (
    <div
      className={lineWrap}
    >
      <div
        className={lineImage}
      >
        {image && (
          <GatsbyImage
            key={variantImage.src}
            image={image}
            alt={variantImage.altText ?? item.variant.title}
          />
        )}
      </div>
      <div className={lineInfo}>
        <div className={lineVariant}>
          <div>
            <p className={title}>{item.title}</p>
            {item.variant.title === "Default Title" ? "" : item.variant.title}
          </div>
          <p
            className={linePrice}
          >
            {price}
          </p>
        </div>
        <div className={lineQuan}>
          <NumericInput
            width='88px'
            display='none'
            value={quantity}
            aria-label="Quantity"
            onIncrement={doIncrement}
            onDecrement={doDecrement}
            onChange={(e) => handleQuantityChange(e.currentTarget.value)}
          />
          <div className={remove}>
            <button onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineItem;
