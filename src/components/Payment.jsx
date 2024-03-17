import React, { useState } from "react";

export default function Payment({
  pizza = 0,
  burger = 0,
  coffee = 0,
  Price = 0,
}) {
  return (
    <>
      <div className="arrL">
        <br />
        <h1>Your Order : </h1>
        <br />
        {pizza > 0 ? <p className="">Pizza x({pizza})</p> : <></>}
        {burger > 0 ? <p className="">Burger x({burger})</p> : <></>}
        {coffee > 0 ? <p className="">Coffee x({coffee}) </p> : <></>}
        <br />
        <h1 id="me"> Total Price = {Price} </h1>
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
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Phone-Number" />
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
                  id="mebtn"
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
