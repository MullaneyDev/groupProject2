import { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CheckoutPage = ({ checkout, setCheckout }) => {
  function removeItem(index) {
    let storedCheckout = [...checkout];
    storedCheckout.splice(index, 1);
    setCheckout(storedCheckout);
  }

  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(checkout);
    let totalValue = 0;
    for (let i = 0; i < checkout.length; i++) {
      totalValue += parseInt(checkout[i].price);
    }
    setTotal(totalValue);
  }, [checkout]);

  return (
    <div>
      <h1>Checkout</h1>
      {checkout.map((checkItem, index) => {
        return (
          <>
            <div key={index} className="">
              <img className="catImage" src={checkItem.url} alt="cats"></img>
              <h3>{checkItem.name}</h3>
              <h1>£{checkItem.price}</h1>
              <h5>{checkItem.breed}</h5>
              <h5>{checkItem.gender}</h5>
              <button onClick={() => removeItem(index)}>
                Remove from cart
              </button>
            </div>
          </>
        );
      })}
      <h1>Total :£ {total.toFixed(2)}</h1>
    </div>
  );
};

export default CheckoutPage;
