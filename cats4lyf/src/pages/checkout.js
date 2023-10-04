import { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CheckoutPage = ({ checkout, setCheckout }) => {
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
            <div key={index}>
              <img
                className="catImage"
                onClick={openModal2}
                src={checkItem.url}
                alt="cats"
              ></img>
            </div>
          </>
        );
      })}
      <Modal className="ModalStyle" isOpen={modal} onRequestClose={closeModal}>
        <img className="catImage" src={checkout.url} alt="catimage"></img>
        <button onClick={removeItem}>Delete Item</button>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
