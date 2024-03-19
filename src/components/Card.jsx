import React, { useState } from "react";

export default function Card({
  image,
  item = "FOOD",
  Price,
  SetPrice,
  rate,
  inital,
  setInital,
}) {
  let changePrice = (e) => {
    let old = Price;
    old = old + e * rate;
    SetPrice(old);
  };

  let Inc = () => {
    let counter = inital + 1;
    setInital(counter);
    changePrice(1);
  };

  let Dec = () => {
    if (inital != 0) {
      let counter = inital - 1;
      setInital(counter);
      changePrice(-1);
    }
  };

  return (
    <>
      <div className="holder">
        <img src={image} alt="..." height="80px" />
        <div className="rowL">
          <p className="box">{item}</p>
          <p className="box">PRICE = {rate} Rs</p>
        </div>
        <div className="rowL">
          <button className="BTN" onClick={Inc}>
            +
          </button>
          <button className="BTN" onClick={Dec}>
            -
          </button>
          <p id="MyI" >ITEMS : {inital}</p>
        </div>
      </div>
    </>
  );
}
