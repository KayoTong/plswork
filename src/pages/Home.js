import { useCart } from "../context/CartContext";

export default function Home() {
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
          <h1 className="text-5xl font-lobster mb-4 drop-shadow-lg">Welcome to Delicious Bites</h1>
          <p className="text-xl font-semibold drop-shadow">Experience the finest dining in town</p>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-lobster mb-2">Our Story</h2>
          <p className="mb-4">
            Founded in 2010, Delicious Bites has been serving authentic cuisine with a modern twist. Our passion for food and commitment to quality has made us a favorite among food lovers.
          </p>
          <a
            href="/about"
            className="inline-block bg-restaurant-orange text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-lobster mb-8">Featured Dishes</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Dish 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img src={require('../assets/pizza.jpg')} alt="Special Pizza" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Special Pizza</h3>
              <p className="mb-2">Our signature pizza with premium toppings</p>
              <span className="block font-bold text-restaurant-orange mb-2">$18.99</span>
              <button
                onClick={() =>
                  addToCart({
                    name: "Special Pizza",
                    price: 18.99,
                    image: "pizza.jpg",
                  })
                }
                className="bg-restaurant-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
            {/* Dish 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img src={require('../assets/salad.jpg')} alt="Fresh Salad" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">Fresh Salad</h3>
              <p className="mb-2">Organic greens with house dressing</p>
              <span className="block font-bold text-restaurant-orange mb-2">$12.99</span>
              <button
                onClick={() =>
                  addToCart({
                    name: "Fresh Salad",
                    price: 12.99,
                    image: "salad.jpg",
                  })
                }
                className="bg-restaurant-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <a
            href="/menu"
            className="inline-block mt-8 bg-restaurant-orange text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition"
          >
            View Full Menu
          </a>
        </div>
      </section>
    </div>
  );
}