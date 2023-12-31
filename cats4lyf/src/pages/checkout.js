import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const CheckoutPage = ({ checkout, setCheckout }) => {
  function removeItem(index) {
    let storedCheckout = [...checkout];
    storedCheckout.splice(index, 1);
    setCheckout(storedCheckout);
  }
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(checkout);
    let totalValue = 0;
    for (let i = 0; i < checkout.length; i++) {
      totalValue += parseInt(checkout[i].price);
    }
    setTotal(totalValue);
  }, [checkout]);

  function dltArray() {
    let storedArray = [...checkout];
    storedArray = [];
    setCheckout(storedArray);
    closeModal();
  }

  return (
    <div id="checkout">
      <header>
        <h1>Checkout</h1>
        <h1>Total : £{total.toFixed(2)}</h1>
        <button className="checkoutAdd" onClick={openModal}>
          Proceed to Payment
        </button>
        <Modal
          className="ModalStyle"
          isOpen={modal}
          onRequestClose={closeModal}
        >
          <>
            <form id="checkoutForm">
              <h1>Total : £{total.toFixed(2)}</h1>
              <label>
                Name on card : <input id="cardName" type="text"></input> Card
                Number : <input id="cardNumber" type="text"></input>Expiry Date
                : <input id="expiry" type="text"></input>CCV :{" "}
                <input id="ccv" type="text"></input>
                <button className="checkoutAdd" onClick={() => dltArray()}>
                  <Link target="_blank" to="/matrix">
                    Confirm Purchase
                  </Link>
                </button>
              </label>
            </form>
          </>
        </Modal>
      </header>
      <div className="catWindow">
        {checkout.map((checkItem, index) => {
          return (
            <div key={index} className="Cat">
              <img className="catImage" src={checkItem.url} alt="cats"></img>
              <h3>{checkItem.name}</h3>
              <h1>£{checkItem.price}</h1>
              <h5>{checkItem.breed}</h5>
              <h5>{checkItem.gender}</h5>
              <button className="cartRemove" onClick={() => removeItem(index)}>
                Remove from cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutPage;
