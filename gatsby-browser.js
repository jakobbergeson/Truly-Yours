import * as React from "react";
import { StoreProvider } from "./src/context/store-context";
import "./src/styles/layout.css";
import "./src/styles/preloader.css";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
);