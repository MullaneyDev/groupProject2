import { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CheckoutPage = ({ checkout, setCheckout, cats }) => {
  const [modal, setModal] = useState(false);
  function openModal2() {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  };
  function removeItem(index) {
    let storedCheckout = [...checkout];
    storedCheckout.splice(index, 1);
    setCheckout(storedCheckout);
  }

  return (
    <div>
      <h1>Checkout</h1>;{console.log(checkout)}
      {checkout.map((checkItem, index) => {
        return (
          <>
            <div key={index} className="">
              <img
                className="catImage"
                onClick={openModal2}
                src={checkItem.url}
                alt="cats"
              ></img>
              <h3>{checkItem.name}</h3>
              <h1>{checkItem.price}</h1>
              <h5>{checkItem.breed}</h5>
              <h5>{checkItem.gender}</h5>
              <button onClick={() => removeItem(index)}>
                Remove from cart
              </button>
            </div>
          </>
        );
      })}
      {/* <Modal className="ModalStyle" isOpen={modal} onRequestClose={closeModal}>
        <img className="catImage" src={checkout.url} alt="catimage"></img>
        <button onClick={() => removeItem()}>Delete Item</button>
      </Modal> */}
    </div>
  );
};

export default CheckoutPage;
