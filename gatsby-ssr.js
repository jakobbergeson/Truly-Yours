/** @jsx jsx */
import { jsx } from 'theme-ui';
import { preloader } from './src/utils';
import React from 'react';

const onRenderBody = ({
  setPreBodyComponents
}) => {
  setPreBodyComponents([
    <div sx={
      document.readyState === "complete" ? preloader.body.leaving :
        preloader.body}>
    </div>
  ]);
};

export default onRenderBody;