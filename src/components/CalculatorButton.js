import React from "react";
import PropTypes from "prop-types";

function CalculatorButton({ value, handleClick, class_name, ...props }) {
  return (
    <button className={class_name} onClick={(e) => handleClick(value)}>
      <label className="buttonLabel">{value}</label>
    </button>
  );
}
CalculatorButton.prototype = {
  value: PropTypes.number || PropTypes.string,
  handleClick: PropTypes.func,
  class_name: PropTypes.string,
};

export default CalculatorButton;
