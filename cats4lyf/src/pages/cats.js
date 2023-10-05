import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CatPage = ({ checkout, setCheckout, cats }) => {
  const buyCat = (cat) => {
    if (checkout.find((currentCat) => currentCat.id === cat.id) === undefined) {
      const archive = [...checkout];
      archive.push(cat);
      setCheckout(archive);
    }
  };

  return (
    <div className="App">
      <h1>Cats</h1>
      <div className="catWindow">
        {cats.map((currentCat, index) => {
          return <Cat key={index} catInfo={currentCat} buyFunc={buyCat} />;
        })}
      </div>
    </div>
  );
};

const Cat = ({ catInfo, buyFunc }) => {
  const [modal, setModal] = useState(false);

  const openModal = async () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="Cat" onClick={openModal}>
        <img className="catImage" src={catInfo.url} alt="catImage" />
        <div className="CatDetails">
          <h3>{catInfo.name}</h3>
          <h1>{catInfo.price}</h1>
        </div>
      </div>{" "}
      <Modal className="ModalStyle" isOpen={modal} onRequestClose={closeModal}>
        <img className="catImage" src={catInfo.url} alt="catImage" />
        <h1>{catInfo.name}</h1>
        <button className="checkoutAdd" onClick={() => buyFunc(catInfo)}>
          Add to Checkout
        </button>
      </Modal>
    </>
  );
};

export default CatPage;
