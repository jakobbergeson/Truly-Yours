import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import isEqual from "lodash.isequal";
import { GatsbyImage } from "gatsby-plugin-image";
import { StoreContext } from "../../../context/store-context";
import AddToCart from "../../../components/add-to-cart";
import NumericInput from "../../../components/numeric-input";
import formatPrice from "../../../components/format-price";
import {
  productBox,
  container,
  header,
  productImageWrapper,
  noImagePreview,
  optionsWrapper,
  priceValue,
  selectVariant,
  addToCartStyle,
  productDescription,
  productImage,
  productDescriptionWrapper,
} from "./product-page.module.css";

const Product = ({ data: { product, suggestions } }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    // images: [firstImage],
  } = product;

  const { client } = React.useContext(StoreContext);

  const [variant, setVariant] = React.useState({ ...initialVariant });
  const [quantity, setQuantity] = React.useState(1);

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant;

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  );

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? [];

        if (result.length > 0) {
          setAvailable(result[0].available);
        }
      });
    },
    [productVariant.storefrontId, client.product]
  );


  const handleOptionChange = (index, event) => {
    const value = event.target.value;

    if (value === "") {
      return;
    }

    const currentOptions = [...variant.selectedOptions];

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    };

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions);
    });

    setVariant({ ...selectedVariant });
  };

  React.useEffect(() => {
    checkAvailablity(product.storefrontId);
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId]);

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  );

  const hasVariants = variants.length > 1;
  const hasImages = images.length > 0;

  return (
    <Layout>
      <div className={container}>
        <div className={productBox}>
          <div className={productImageWrapper}>
            <GatsbyImage
              className={productImage}
              objectFit="contain"
              loading="eager"
              alt={variant.title}
              image={variant.image.gatsbyImageData}
            />
          </div>

          {!hasImages && (
            <span className={noImagePreview}>No Preview image</span>
          )}
          <div className={productDescriptionWrapper}>
            <h1 className={header}>{title}</h1>
            <p className={productDescription}>{description}</p>
            <h2 className={priceValue}>
              <span>{price}</span>
            </h2>
            <fieldset className={optionsWrapper}>
              {hasVariants &&
                options.map(({ id, name, values }, index) => (
                  <div className={selectVariant} key={id}>
                    <select
                      aria-label="Variants"
                      onChange={(event) => handleOptionChange(index, event)}
                    >
                      <option value="">{`Select ${name}`}</option>
                      {values.map((value) => (
                        <option value={value} key={`${name}-${value}`}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
            </fieldset>
            <div className={addToCartStyle}>
              <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              />
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

export const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/products/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 540 aspectRatio: 1)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        image{
          gatsbyImageData
        }
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
