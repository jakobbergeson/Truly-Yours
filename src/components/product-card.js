import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getShopifyImage } from "gatsby-source-shopify";
import formatPrice from "./format-price";
import {
  productCardStyle,
  productHeadingStyle,
  productImageStyle,
  productDetailsStyle,
  productPrice,
} from "./product-card.module.css";

const ProductCard = ({ product, eager }) => {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    storefrontImages,
  } = product;

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  );

  const defaultImageHeight = 200;
  const defaultImageWidth = 200;
  let storefrontImageData = {};
  if (storefrontImages) {
    const storefrontImage = storefrontImages.edges[0].node;
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: defaultImageWidth,
        height: defaultImageHeight,
      });
    } catch (e) {
      console.error(e);
    }
  }

  const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length;

  return (
    <Link
      className={productCardStyle}
      to={slug}
      aria-label={`View ${title} product page`}
    >
      {hasImage
        ? (
          <div className={productImageStyle} data-name="product-image-box">
            <GatsbyImage
              alt={firstImage?.altText ?? title}
              image={firstImage?.gatsbyImageData ?? storefrontImageData}
              loading={eager ? "eager" : "lazy"}
            />
          </div>
        ) : (
          <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
        )
      }
      <div className={productDetailsStyle}>
        <h2 as="h2" className={productHeadingStyle}>
          {title}
        </h2>
        <div className={productPrice}>{price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(aspectRatio: 1, width: 640)
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
  }
`;
