import React from "react";
import cartgif from "../Assets/cartGif.gif";
import "./Cart.css";

const emptyCart = () => {
  return (
    <div className="emptyCartMainParent">
      <div id="fs">
        <p>Cart Is Empty Maybe Browse Something :) </p>
      </div>

      <img src={cartgif} className=" absolute cg" />
    </div>
  );
};

export default emptyCart;
