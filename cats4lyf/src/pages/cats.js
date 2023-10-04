import { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CatPage = (checkout, setCheckout) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const catRequest = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const catData = await catRequest.json();
      setCats(catData);
    };
    fetchData();
  }, []);

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
      {cats.map((currentCat, index) => {
        return <Cat key={index} catInfo={currentCat} buyFunc={buyCat} />;
      })}
    </div>
  );
};

const Cat = ({ catInfo, buyFunc }) => {
  const [modal, setModal] = useState(false);
  const [cat, setCat] = useState({});

  const openModal = async () => {
    const catRequest = await fetch(
      `https://api.thecatapi.com/v1/images/${catInfo.id}`
    );
    const catData = await catRequest.json();
    setCat(catData);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="Cat" onClick={openModal}>
        <img className="catImage" src={cat.url} alt="catImage" />
      </div>{" "}
      <Modal className="ModalStyle" isOpen={modal} onRequestClose={closeModal}>
        <img className="catImage" src={cat.url} alt="catImage" />
        <h1>Cat Name</h1>
        <button className="checkoutAdd" onClick={() => buyFunc(catInfo)}>
          Add to Checkout
        </button>
      </Modal>
    </>
  );
};

export default CatPage;
