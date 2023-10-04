import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cats from "./pages/cats";
import Home from "./pages/home";
import Checkout from "./pages/checkout";

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
      setCats(catData);
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
        <Route path="/" element={<Home />} />
        <Route
          path="/cats"
          element={
            <Cats checkout={checkout} setCheckout={setCheckout} cats={cats} />
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
