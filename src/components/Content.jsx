import React, { useCallback, useState } from "react";
import Card from "./Card";

export default function Content() {
  const [Price, setPrice] = useState(0);
  let sty = "none";

  let hide = useCallback(() => {
    if (Price != 0) {
      sty = "inline";
    } else sty = "none";
  }, [Price, setPrice]);

  return (
    <>
      <div className="Container">
        <Card
          image={"https://pranavbhatdinerapp.netlify.app/images/pizza.png"}
          item="PIZZA"
          Price={Price}
          SetPrice={setPrice}
          rate={200}
         
        />
        <Card
          image={"https://pranavbhatdinerapp.netlify.app/images/hamburger.png"}
          item="BURGER"
          Price={Price}
          SetPrice={setPrice}
          rate={100}
        />
        <Card
          image={"https://pranavbhatdinerapp.netlify.app/images/coffee-cup.png"}
          item="COFFEE"
          Price={Price}
          SetPrice={setPrice}
          rate={50}
        />
        
        <br />
        <h1>Order</h1>
        <h1 id="me"> Total Price = {Price} </h1>
        <br />
        <button>PAY</button>
      </div>
    </>
  );
}
