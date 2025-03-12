import React, { createContext, useReducer, useContext, useEffect } from "react";

// Helper function to get cart from localStorage
const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : { cartItems: [], savedItems: [] };
};

// Initial state for the cart
const initialState = getCartFromLocalStorage();

// Create Cart Context
const CartContext = createContext();

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCartItems = [...state.cartItems, action.payload];
      const newState = { ...state, cartItems: updatedCartItems };
      localStorage.setItem("cart", JSON.stringify(newState)); // Save to localStorage
      return newState;
    }
    case "REMOVE_FROM_CART": {
      // Filter out the item with the matching ID
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id // Ensure payload.id matches item.id
      );
      const newState = { ...state, cartItems: filteredCartItems };
      localStorage.setItem("cart", JSON.stringify(newState)); // Save to localStorage
      return newState;
    }
    case "SAVE_FOR_LATER": {
      // Remove the item from cartItems and add it to savedItems
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const updatedSavedItems = [...state.savedItems, action.payload];
      const newState = {
        ...state,
        cartItems: filteredCartItems,
        savedItems: updatedSavedItems,
      };
      localStorage.setItem("cart", JSON.stringify(newState)); // Save to localStorage
      return newState;
    }
    default:
      return state;
  }
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Sync cart with localStorage on state change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use CartContext
export const useCart = () => useContext(CartContext);