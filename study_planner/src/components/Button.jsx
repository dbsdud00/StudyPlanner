import classNames from "classnames";
import React from "react";
import "./Button.scss";
import styled from "styled-components";
const StyledButton = styled.button`
  display: inline-flex;
  font-weight: bold;
  outline: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  height: 2.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bgColor || "black"};
  width: ${(props) => props.width || "3.5rem"};
  height: ${(props) => props.height || "2.25rem"};

  &:hover {
    background: lighten(${(props) => props.bgColor || "black"}, 10%);
  }
  &:active {
    background: darken(${(props) => props.bgColor || "black"}, 10%);
  }
  &.outline {
    color: $color;
    background: none;
    border: 1px solid $color;
    &:hover {
      background: $color;
      color: white;
    }
  }
`;

const Button = ({ children, bgColor, color, width, height, onClick }) => {
  return (
    <StyledButton
      className="Button"
      color={color}
      bgColor={bgColor}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
