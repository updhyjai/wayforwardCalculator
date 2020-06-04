import React from "react";
import PropTypes from "prop-types";

function Display({ displayValue, ...props }) {
  return (
    <div className="display">
      <span className="displayLabel">{displayValue}</span>
    </div>
  );
}
Display.propTypes = {
  displayValue: PropTypes.string,
};
export default Display;
