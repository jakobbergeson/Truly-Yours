import * as React from "react";
import { StoreProvider } from "./src/context/store-context";
import "./src/styles/layout.scss";
import "./src/styles/preloader.scss";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
);