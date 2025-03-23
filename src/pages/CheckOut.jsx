const CheckoutPage = ({ cart = [], total }) => {
    return (
      <div className="checkout-container">
        <h1>Checkout</h1>
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <p key={index}>{item.name} - ${item.price}</p>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <h3>Total: ${total}</h3>
        </div>
      </div>
    );
  };
  
  export default CheckoutPage;
  