import React from "react";
import "./LiForDay.scss";
import classNames from "classnames";

const LiForDay = ({ children, onClick }) => {
  return (
    <li className="day" onClick={onClick}>
      {children}
    </li>
  );
};
export default LiForDay;
