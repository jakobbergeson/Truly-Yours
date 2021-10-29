/** @jsx jsx */
import { jsx, Flex, Grid } from 'theme-ui';
import * as React from 'react';
import ProductCard from './product-card';
import { productListingStyles } from '../utils';
import { listingContainerStyle, listingContainerWrapper } from './product-listing.module.css';

export function ProductListing({ products = [] }) {
  return (
    <Flex
      sx={productListingStyles.listingContainerWrapper}
    >
      <Grid
        sx={productListingStyles.listingContainer}
      >
        {products.map((p, index) => (
          <ProductCard
            product={p}
            key={p.id}
            eager={index === 0}
          />
        ))}
      </Grid>
    </Flex>
  );
}
