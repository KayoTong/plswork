import React from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutModal({ open, onClose }) {
  const { cart, totalPrice, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-4 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Confirm Your Order</h2>
        <div className="mb-4">
          {cart.map((item) => (
            <div key={item.name} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="font-bold text-lg mb-4 text-center">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          onClick={() => {
            clearCart();
            onClose();
            alert("Order confirmed! Thank you for your purchase.");
          }}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}