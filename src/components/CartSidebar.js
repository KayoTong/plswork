import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

export default function CartSidebar() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold">Shopping Cart</h3>
          <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.name} className="flex items-center mb-4">
                <img src={require(`../assets/${item.image}`)} alt={item.name} className="w-16 h-16 object-cover rounded mr-3" />
                <div className="flex-1">
                  <h4 className="font-bold">{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-1">
                    <button
                      className="px-2"
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                    >-</button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-2"
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                    >+</button>
                  </div>
                </div>
                <button
                  className="ml-2 text-red-500"
                  onClick={() => removeFromCart(item.name)}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between font-bold mb-2">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-restaurant-orange text-white py-2 rounded mb-2"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <button
            className="w-full bg-green-600 text-white py-2 rounded"
            onClick={() => setShowModal(true)}
          >
            Checkout
          </button>
        </div>
      </div>
      <CheckoutModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}