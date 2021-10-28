/** @jsx jsx */
import { jsx } from "theme-ui";
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
    <div
      sx={numericInputStyles.numericWrapper}
    >
      <input
        disabled={disabled}
        type="numeric"
        sx={numericInputStyles.input}
        {...props}
      />
      <button
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
      </button>
    </div>
  );
};

export default NumericInput;
