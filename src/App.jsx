import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <Router>
      <div className="page">
        <Header
          cartCount={cart.length}
          cart={cart}
          removeFromCart={removeFromCart}
        />

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>

        <footer className="footer">
          © 2025 Lue'sBotique. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
