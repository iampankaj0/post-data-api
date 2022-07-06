import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./more.css";
import { decNumber, incNumber } from "../redux/actions/index";

const More = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="more">
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using react & redux</h4>

        <div className="parent-form-sec">
          <div className="inc_dec-sec">
            <button onClick={() => dispatch(decNumber())}>-</button>
            <input name="quantity" type="text" value={myState} />
            <button onClick={() => dispatch(incNumber())}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
