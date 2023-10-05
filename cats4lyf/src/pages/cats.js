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
  const removeCat = (cat) => {
    const index = checkout.indexOf(cat);
    if (checkout.find((currentCat) => currentCat.id === cat.id) !== undefined) {
      const archive = [...checkout];
      archive.splice(index, 1);
      setCheckout(archive);
    }
  };

  return (
    <div className="App">
      <h1>Available cats</h1>
      <div className="catWindow">
        {cats.map((currentCat, index) => {
          return (
            <Cat
              key={index}
              catInfo={currentCat}
              buyFunc={buyCat}
              removeFunc={removeCat}
            />
          );
        })}
      </div>
    </div>
  );
};

const Cat = ({ catInfo, buyFunc, removeFunc }) => {
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(true);

  const openModal = async () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const buyToggle = () => {
    buyFunc(catInfo);
    setToggle(!toggle);
  };
  const removeToggle = () => {
    removeFunc(catInfo);
    setToggle(!toggle);
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
        <>
          <img className="catImageModal" src={catInfo.url} alt="catImage" />
          <h1 className="catName">{catInfo.name}</h1>
          <h2 className="catPrice">{catInfo.price}</h2>
          <h3 className="catBreed">Breed : {catInfo.breed}</h3>
          <p className="catGender">Sex : {catInfo.gender}</p>
          <h3 className="ownerDetails">Owner Details</h3>
          <p className="ownerName">{catInfo.ownerName}</p>
          <p className="ownerBio">{catInfo.ownerBio}</p>
          <p className="ownerEmail">{catInfo.ownerEmail}</p>
          {toggle && (
            <button className="checkoutAdd" onClick={() => buyToggle()}>
              Add to Basket
            </button>
          )}
          {!toggle && (
            <button className="checkoutRemove" onClick={() => removeToggle()}>
              Remove from Basket
            </button>
          )}
        </>
      </Modal>
    </>
  );
};

export default CatPage;
