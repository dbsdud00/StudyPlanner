import "./LiForDay.scss";
import React from "react";

const LiForDay = ({ children, onClick }) => {
  return <li onClick={onClick}>{children}</li>;
};
export default LiForDay;
