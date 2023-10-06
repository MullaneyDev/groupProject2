import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

Modal.setAppElement("#root");

const CatPage = ({ checkout, setCheckout, cats, setCats }) => {
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

  const changeSort = (e) => {
    switch (e.value) {
      case "priceLow":
        setCats([...cats].sort((a, b) => a.price - b.price));
        break;
      case "priceHigh":
        setCats([...cats].sort((a, b) => b.price - a.price));
        break;
      default:
        setCats([...cats]);
        break;
    }
  };

  return (
    <div className="App">
      <h1>Available cats</h1>
      <select id="dropdown" onChange={(e) => changeSort(e.target)}>
        <option>Default</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
      </select>
      <div className="catWindow">
        {cats.map((currentCat, index) => {
          return (
            <Cat
              key={index}
              catInfo={currentCat}
              buyFunc={buyCat}
              removeFunc={removeCat}
              checkout={checkout}
            />
          );
        })}
      </div>
      <div className="adverts">
        <Carousel
          width="20%"
          autoPlay="true"
          infiniteLoop="true"
          centerMode="true"
        >
          <div>
            <img
              src="https://cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-10-royal-canin-cat-food?w=480&amp;"
              alt="Royal canin cat food"
              srcset="//cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-10-royal-canin-cat-food/.webp?w=480&amp;, //cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-10-royal-canin-cat-food?w=480&amp;"
            />
          </div>
          <div>
            <img
              src="https://cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-3-cat-accessories?w=480&amp;"
              alt="Cat accessories save 30%"
              srcset="//cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-3-cat-accessories/.webp?w=480&amp;, //cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-3-cat-accessories?w=480&amp;"
            />
          </div>
          <div>
            <img
              src="https://cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-20-feliway?w=480&amp;"
              alt="Feliway - Save 20%"
              srcset="//cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-20-feliway/.webp?w=480&amp;, //cdn.media.amplience.net/i/petsathome/pet-lozenge-phase-save-20-feliway?w=480&amp;"
            />
          </div>
          <div>
            <img
              src="https://cdn.media.amplience.net/i/petsathome/cat-loz-newincat-p7w1?w=480&amp;"
              alt="New in cat"
              srcset="//cdn.media.amplience.net/i/petsathome/cat-loz-newincat-p7w1/.webp?w=480&amp;, //cdn.media.amplience.net/i/petsathome/cat-loz-newincat-p7w1?w=480&amp;"
            />
          </div>
          <div>
            <img
              className="carouselImg"
              src="https://cdn.media.amplience.net/i/petsathome/cat-lozenge-seriously-good-p4w3?w=480&amp;"
              alt="Seriously Good - cat food"
              srcset="//cdn.media.amplience.net/i/petsathome/cat-lozenge-seriously-good-p4w3/.webp?w=480&amp;, //cdn.media.amplience.net/i/petsathome/cat-lozenge-seriously-good-p4w3?w=480&amp;"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

const Cat = ({ catInfo, buyFunc, removeFunc, checkout }) => {
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (
      checkout.find((currentCat) => currentCat.id === catInfo.id) !== undefined
    ) {
      setToggle(false);
    }
  }, [checkout]);

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
          <h1>£{catInfo.price}</h1>
        </div>
      </div>{" "}
      <Modal className="ModalStyle" isOpen={modal} onRequestClose={closeModal}>
        <>
          <img className="catImageModal" src={catInfo.url} alt="catImage" />
          <h1 className="catName">{catInfo.name}</h1>
          <h2 className="catPrice">£{catInfo.price}</h2>
          <h3 className="catBreed">Breed : {catInfo.breed}</h3>
          <p className="catGender">Sex : {catInfo.gender}</p>
          <h3 className="ownerDetails">Owner Details</h3>
          <p className="ownerName">{catInfo.ownerName}</p>
          <p className="ownerBio">{catInfo.ownerBio}</p>
          <p className="ownerEmail">{catInfo.ownerEmail}</p>
          {toggle ? (
            <button className="checkoutAdd" onClick={() => buyToggle()}>
              Add to Basket
            </button>
          ) : (
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
