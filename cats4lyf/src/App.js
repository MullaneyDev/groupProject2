import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Cats from "./pages/cats";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import "./App.css";

function App() {
  const [checkout, setCheckout] = useState([]);

  return <div className="App"></div>;
}

export default App;
