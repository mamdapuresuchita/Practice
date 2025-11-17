import React, { useContext } from "react";
import CartContext from "../hooks/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart = [], removeFromCart, clearCart, totalAmount = 0 } = useContext(CartContext);

  console.log("Cart items:", cart); 
  if (!cart || cart.length === 0)
    return (
      <div className="container my-5 text-center">
        <h3 style={{ color: "red" }}>Your cart is empty!</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-12 mb-3">
            <div className="card p-3 d-flex flex-row align-items-center">
              <img
                src={item.image}
                alt={item.title}
                style={{ height: "100px", objectFit: "contain", marginRight: "20px" }}
              />
              <div className="flex-grow-1">
                <h5>{item.title}</h5>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.qty}</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Total: ${totalAmount}</h4>
        <div>
          <button className="btn btn-secondary me-2" onClick={clearCart}>
            Clear Cart
          </button>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
