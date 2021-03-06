import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import HeadTag from '../../../components/headTag';
import { ProductListing } from "../../../components/product-listing";

const Products = ({ data: { products }, }) => {
  return (
    <Layout
      showCartButton={true}
    >
      <HeadTag
        title={'Shop'}
      />
      <ProductListing products={products.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: publishedAt, order: ASC }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }`;

export default Products;