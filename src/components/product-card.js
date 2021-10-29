/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getShopifyImage } from "gatsby-source-shopify";
import formatPrice from "./format-price";
import { productCardStyles } from "../utils";

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
      sx={productCardStyles.productCard}
      to={slug}
      aria-label={`View ${title} product page`}
    >
      {hasImage
        ? (
          <div
            sx={productCardStyles.productImage}
            data-name="product-image-box"
          >
            <GatsbyImage
              alt={firstImage?.altText ?? title}
              image={firstImage?.gatsbyImageData ?? storefrontImageData}
              loading={eager ? "eager" : "lazy"}
            />
          </div>
        ) : (
          <div sx={{ height: defaultImageHeight, width: defaultImageWidth, }} />
        )
      }
      <Flex
        sx={productCardStyles.productDetail}>
        <h2
          as="h2"
          sx={productCardStyles.productHeading}
        >
          {title}
        </h2>
        <div
          sx={productCardStyles.productPrice}
        >
          {price}
        </div>
      </Flex>
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
      gatsbyImageData(aspectRatio: 1, width: 440)
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
