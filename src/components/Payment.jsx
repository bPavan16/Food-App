import React, { useState } from "react";

export default function Payment({
  pizza = 0,
  burger = 0,
  coffee = 0,
  Price = 0,
  setPrice,
  setCoffee,
  setBurger,
  setpizza,
  thank,
  SetThank,
}) {
  let prate = 200;
  let brate = 100;
  let crate = 50;

  let ip = document.getElementsByClassName("ip");

  let Dopay = () => {
    let notFilled = 0;
    Array.from(ip).forEach((ele) => {
      if (ele.value == "") {
        alert(`Please Fill the ${ele.placeholder} Details`);
        notFilled = 1;
        return;
      }
    });

    if (notFilled == 1) return;

    console.log("Payment has been done : ) ");
    SetThank(1);

    setTimeout(() => {
      SetThank(0);
      setBurger(0);
      setCoffee(0);
      setpizza(0);
      setPrice(0);
    }, 3000);

    Array.from(ip).forEach((ele) => {
      ele.value = "";
    });
  };

  let ChangePrice = (rate, count) => {
    let curr = Price;
    curr = curr - rate * count;
    setPrice(curr);
  };

  let clearPizza = () => {
    console.log("clicked");
    let c = pizza;
    ChangePrice(prate, c);
    setpizza(0);
  };

  let clearBurger = () => {
    console.log("clicked");
    let c = burger;
    ChangePrice(brate, c);
    setBurger(0);
  };

  let clearCoffee = () => {
    console.log("clicked");
    let c = coffee;
    ChangePrice(crate, c);
    setCoffee(0);
  };

  return (
    <>
      <div className="arrL">
        <br />
        <h1>Your Order : </h1>
        <br />
        {pizza > 0 ? (
          <p className="">
            Pizza x({pizza}){" "}
            <button className="clr" id="pclear" onClick={clearPizza}>
              (remove)
            </button>
          </p>
        ) : (
          <></>
        )}
        {burger > 0 ? (
          <p className="">
            Burger x({burger}){" "}
            <button className="clr" id="bclear" onClick={clearBurger}>
              (remove)
            </button>
          </p>
        ) : (
          <></>
        )}
        {coffee > 0 ? (
          <p className="">
            Coffee x({coffee}){" "}
            <button className="clr" id="cclear" onClick={clearCoffee}>
              (remove)
            </button>{" "}
          </p>
        ) : (
          <></>
        )}
        <br />
        <h2 id="me"> Total Price = {Price} Rs </h2>
        <br />

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Enter Credentials
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable  ">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Make Payment
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body" id="BdModel">
                <input className="ip" type="text" placeholder="Name" />
                <input className="ip" type="email" placeholder="Email" />
                <input className="ip" type="tel" placeholder="Phone Number" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  id="pay"
                  onClick={Dopay}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
}
