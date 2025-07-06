import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-restaurant-dark text-white px-4 py-3 flex items-center justify-between shadow relative">
      <div className="font-lobster text-2xl">Delicious Bites</div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col gap-1 z-30"
        onClick={() => setNavOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all ${navOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${navOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${navOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </button>
      {/* Navigation links */}
      <nav>
        <ul
          className={`
            md:flex gap-6 items-center
            fixed md:static top-0 right-0 h-full w-2/3 max-w-xs bg-restaurant-dark md:bg-transparent z-20
            flex-col md:flex-row justify-center md:justify-end
            transition-transform duration-200
            ${navOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          `}
        >
          <li className="mt-20 md:mt-0">
            <Link to="/" className="hover:text-restaurant-orange block py-2" onClick={() => setNavOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-restaurant-orange block py-2" onClick={() => setNavOpen(false)}>Menu</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-restaurant-orange block py-2" onClick={() => setNavOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-restaurant-orange block py-2" onClick={() => setNavOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Cart Icon */}
      <div className="relative ml-4 cursor-pointer z-30" onClick={() => setIsOpen(true)}>
        <ShoppingCart className="w-7 h-7" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-restaurant-orange text-xs rounded-full px-2 py-0.5 font-bold">
            {totalItems}
          </span>
        )}
      </div>
      {/* Overlay for mobile nav */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}
    </header>
  );
}