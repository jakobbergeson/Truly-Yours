/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { numericInputStyles } from "../utils";
const NumericInput = ({
  onIncrement,
  onDecrement,
  className,
  disabled,
  ...props
}) => {
  return (
    <Flex
      sx={numericInputStyles.numericWrapper}
    >
      <p
        sx={numericInputStyles.inputTitle}
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
        <MdArrowDropUp />
      </button>
      <button
        disabled={disabled}
        aria-label="Decrement"
        onClick={onDecrement}
      >
        <span>-</span>
        <MdArrowDropDown />
      </button> */}
    </Flex>
  );
};

export default NumericInput;
