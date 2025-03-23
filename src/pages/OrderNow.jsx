import React, { useState } from "react";
import { Link } from "react-router";

const menuItems = [
  { id: 1, name: "Burger", price: 5 },
  { id: 2, name: "Pizza", price: 8 },
  { id: 3, name: "Pasta", price: 7 },
  { id: 4, name: "Salad", price: 4 },
];

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      {checkout ? (
        <CheckoutPage cart={cart} total={total} onConfirm={() => {clearCart(); setCheckout(false);}} />
      ) : (
        <>
          <h1>Eat Out - Order Now</h1>
          <div className="menu">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => addToCart(item)}>Add</button>
              </div>
            ))}
          </div>

          <h2>Order Summary</h2>
          <div className="cart">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name} - ${item.price}</span>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))
            ) : (
              <p>No items in cart</p>
            )}
          </div>

          <h3>Total: ${total}</h3>
          {cart.length > 0 && (
           <Link to="/checkout">
            <button className="checkout" onClick={() => setCheckout(true)}>Proceed to Checkout</button>
           </Link>
          )}
        </>
      )}
    </div>
  );
};

export default OrderPage;
