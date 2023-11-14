import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../feature/counterSlice";
import { NavLink } from "react-router-dom";

const Example = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("변경됨");
  }, [count]);
  return (
    <div>
      <NavLink to={"/"}>X</NavLink>
      <Button onClickEvent={() => dispatch(increment())}>hi</Button>
      <div className="hi" onClick={() => dispatch(incrementByAmount(2))}>
        {count}
      </div>
      <button onClick={() => dispatch(decrement())}>ddd</button>
    </div>
  );
};
export default Example;
