import { useCart } from "../context/CartContext";

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-lobster mb-4 drop-shadow-lg">Our Menu</h1>
          <p className="text-xl font-semibold drop-shadow">Discover our culinary delights.</p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-lobster mb-8">Menu Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Margherita Pizza */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img src={require('../assets/pizza.jpg')} alt="Margherita Pizza" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Margherita Pizza</h3>
              <p className="mb-2">Fresh tomatoes, mozzarella, basil, and our signature sauce</p>
              <span className="block font-bold text-restaurant-orange mb-2">$14.99</span>
              <button
                onClick={() =>
                  addToCart({
                    name: "Margherita Pizza",
                    price: 14.99,
                    image: "pizza.jpg",
                  })
                }
                className="bg-restaurant-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
            {/* Caesar Salad */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img src={require('../assets/salad.jpg')} alt="Caesar Salad" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Caesar Salad</h3>
              <p className="mb-2">Crisp romaine lettuce, parmesan, croutons, and Caesar dressing</p>
              <span className="block font-bold text-restaurant-orange mb-2">$10.99</span>
              <button
                onClick={() =>
                  addToCart({
                    name: "Caesar Salad",
                    price: 10.99,
                    image: "salad.jpg",
                  })
                }
                className="bg-restaurant-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
            {/* Grilled Salmon */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img src={require('../assets/salmon.jpg')} alt="Grilled Salmon" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Grilled Salmon</h3>
              <p className="mb-2">Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables</p>
              <span className="block font-bold text-restaurant-orange mb-2">$24.99</span>
              <button
                onClick={() =>
                  addToCart({
                    name: "Grilled Salmon",
                    price: 24.99,
                    image: "salmon.jpg",
                  })
                }
                className="bg-restaurant-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
            {/* Pasta Carbonara */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img src={require('../assets/pasta.jpg')} alt="Pasta Carbonara" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Pasta Carbonara</h3>
              <p className="mb-2">Creamy sauce with pancetta, parmesan, and fresh black pepper</p>
              <span className="block font-bold text-restaurant-orange mb-2">$16.99</span>
              <button
                onClick={() =>
                  addToCart({
                    name: "Pasta Carbonara",
                    price: 16.99,
                    image: "pasta.jpg",
                  })
                }
                className="bg-restaurant-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
            {/* Classic Beef Burger */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img src={require('../assets/burger.jpg')} alt="Classic Beef Burger" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Classic Beef Burger</h3>
              <p className="mb-2">Angus beef patty with cheese, lettuce, tomato, and special sauce</p>
              <span className="block font-bold text-restaurant-orange mb-2">$13.99</span>
              <button
                onClick={() =>
                  addToCart({
                    name: "Classic Beef Burger",
                    price: 13.99,
                    image: "burger.jpg",
                  })
                }
                className="bg-restaurant-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
            {/* Chocolate Lava Cake */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img src={require('../assets/chocolate.jpg')} alt="Chocolate Lava Cake" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Chocolate Lava Cake</h3>
              <p className="mb-2">Warm chocolate cake with a molten center, served with vanilla ice cream</p>
              <span className="block font-bold text-restaurant-orange mb-2">$8.99</span>
              <button
                onClick={() =>
                  addToCart({
                    name: "Chocolate Lava Cake",
                    price: 8.99,
                    image: "chocolate.jpg",
                  })
                }
                className="bg-restaurant-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}