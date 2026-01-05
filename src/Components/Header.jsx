import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header({ cartCount, cart, removeFromCart }) {
  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* LEFT - Title */}
        <h1 className="title">Lue'sBotique</h1>

        {/* CENTER - Nav */}
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* RIGHT - Cart button */}
        <button className="cart-btn" onClick={() => setOpenCart(!openCart)}>
          <FaShoppingCart size={18} />
          Cart ({cartCount})
        </button>
      </div>

      {/* POPUP */}
      {openCart && (
        <div className="cart-popup">
          <h3>Your Cart</h3>

          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.idx} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <NavLink to="/checkout">
                <button className="checkout-btn">Checkout</button>
              </NavLink>
            </>
          )}
        </div>
      )}
    </header>
  );
}
