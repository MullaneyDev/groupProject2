import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Cats from "./pages/cats";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import MainMatrix from "./pages/matrix";
import MatrixRain from "./pages/MatrixRain";

import "./App.css";

function App() {
  const [checkout, setCheckout] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    console.log(cats);
    const fetchData = async () => {
      const catRequest = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const catData = await catRequest.json();
      const newCat = catData.map((cat) => {
        return {
          id: cat.id,
          url: cat.url,
          name: faker.person.fullName(),
          breed: faker.animal.cat(),
          gender: faker.person.sex(),
          ownerName: faker.person.fullName(),
          ownerBio: faker.person.bio(),
          ownerEmail: faker.internet.email(),
          price: faker.commerce.price({
            min: 100,
            max: 2000,
            dec: 2,
          }),
        };
      });
      setCats(newCat);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cats">Cats 🐱</Link>
        <Link to="/checkout">🛒</Link>
      </nav>
      <Routes>
        <Route path="/matrix" element={<MatrixRain />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/cats"
          element={
            <Cats
              checkout={checkout}
              setCheckout={setCheckout}
              cats={cats}
              setCats={setCats}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              checkout={checkout}
              setCheckout={setCheckout}
              cats={cats}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
