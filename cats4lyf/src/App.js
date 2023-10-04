import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Cats from "./pages/cats";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import { faker } from "@faker-js/faker";
import "./App.css";

function App() {
  const [checkout, setCheckout] = useState([]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home checkout={checkout} setCheckout={setCheckout} />}
        />
        <Route
          path="/cats"
          element={<Cats checkout={checkout} setCheckout={setCheckout} />}
        />
        <Route
          path="/checkout"
          element={<Checkout checkout={checkout} setCheckout={setCheckout} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
