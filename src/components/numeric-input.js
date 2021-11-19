/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as React from "react";
import { numericInputStyles } from "../utils";
const NumericInput = ({
  onIncrement,
  onDecrement,
  className,
  disabled,
  display = 'block',
  width = 'auto',
  ...props
}) => {
  return (
    <Flex
      sx={numericInputStyles.numericWrapper}
      style={{
        width: width
      }}
    >
      <p
        sx={numericInputStyles.inputTitle}
        style={{
          display: display,
          width: width
        }}
      >
        QUANTITY
      </p>
      <input
        disabled={disabled}
        type="numeric"
        sx={numericInputStyles.input}
        {...props}
      />
      {/* <button
        disabled={disabled}
        aria-label="Increment"
        onClick={onIncrement}
      >
        <span>+</span>
      </button>
      <button
        disabled={disabled}
        aria-label="Decrement"
        onClick={onDecrement}
      >
        <span>-</span>
      </button> */}
    </Flex>
  );
};

export default NumericInput;
