import React, { useState } from "react";
import Card from "./Card";
import Payment from "./Payment";

export default function Content() {
  const [Price, setPrice] = useState(0);
  const [pizza, setpizza] = useState(0);
  const [Burger, setBurger] = useState(0);
  const [Coffee, setCoffee] = useState(0);

  let prate = 200;
  let brate = 100;
  let crate = 50;

  return (
    <>
      <div className="Container">
        <Card
          image={"https://pranavbhatdinerapp.netlify.app/images/pizza.png"}
          item="PIZZA"
          Price={Price}
          SetPrice={setPrice}
          rate={prate}
          inital={pizza}
          setInital={setpizza}
        />
        <Card
          image={"https://pranavbhatdinerapp.netlify.app/images/hamburger.png"}
          item="BURGER"
          Price={Price}
          SetPrice={setPrice}
          rate={brate}
          inital={Burger}
          setInital={setBurger}
        />
        <Card
          image={"https://pranavbhatdinerapp.netlify.app/images/coffee-cup.png"}
          item="COFFEE"
          Price={Price}
          SetPrice={setPrice}
          rate={crate}
          inital={Coffee}
          setInital={setCoffee}
        />

        {pizza > 0 || Burger > 0 || Coffee > 0 ? (
          <Payment
            pizza={pizza}
            burger={Burger}
            coffee={Coffee}
            Price={Price}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
