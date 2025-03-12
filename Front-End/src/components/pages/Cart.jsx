import React, { useState } from "react";
import { useCart } from "./CartContext"; // Import useCart
import { useAuth } from "./AuthContext"; // Import useAuth
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { toast } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { state, dispatch } = useCart(); // Access cart state and dispatch
  const { currentUser } = useAuth(); // Access currentUser from AuthContext
  const navigate = useNavigate(); // Hook for navigation
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  console.log("Cart State:", state); // Debugging line
  console.log("Current User:", currentUser); // Debugging line

  // Calculate total price with fallback for undefined cartItems
  const totalPrice = (state.cartItems || []).reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    if (!currentUser) {
      toast.error("Please log in to place an order."); // Show error message
      navigate("/pages/LoginSignupPage"); // Redirect to the login page
      return;
    }

    // Proceed with placing the order
    console.log("Placing order for user:", currentUser);
    navigate("/pages/OrderSummary"); // Redirect to the order summary page
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {/* Display empty cart message */}
      {state.cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {/* Cart Items */}
          {state.cartItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Color: {item.selectedColor}</p>
                <p className="text-gray-600">Size: {item.selectedSize}</p>
                <p className="text-gray-800 font-bold">${item.price}</p>
                <p className="text-gray-600">Delivery by Sat Mar 8 | ₹49 Free</p>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-4">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
                    Save for Later
                  </button>
                  <button
                    className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200"
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Total:</p>
              <p className="text-2xl font-bold">${totalPrice}</p>
            </div>
            <button
              className="w-full bg-green-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-green-600"
              onClick={handlePlaceOrder}
            >
              Order Summary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;