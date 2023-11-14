import classNames from "classnames";
import React from "react";
import "./Button.scss";

const Button = ({ children, size, color, outline, onClick }) => {
  return (
    <button
      className={classNames("Button", size, color, { outline })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  size: "medium",
  color: "black",
};
export default Button;
