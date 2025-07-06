export default function About() {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-lobster mb-2 text-center">Our Story</h1>
          <p className="text-lg text-center mb-8">A journey of passion and excellence</p>
          <div className="md:flex md:gap-12 items-center">
            {/* Text Section */}
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold mb-2">The Beginning</h2>
              <p className="mb-4">
                Founded in 2010 by Chef Kayo Tonge, Delicious Restaurant began as a small family-owned establishment with a big dream. Our founder's passion for creating memorable dining experiences has been the driving force behind our success.
              </p>
              <h2 className="text-xl font-bold mb-2">Our Mission</h2>
              <p className="mb-4">
                We strive to provide our guests with an exceptional dining experience that combines innovative cuisine with warm hospitality. Our commitment to using fresh, locally-sourced ingredients ensures that every dish tells a story of quality and care.
              </p>
              <h2 className="text-xl font-bold mb-2">Our Team</h2>
              <p className="mb-4">
                Our talented team of chefs and staff work together to create an atmosphere where every guest feels like family. With years of experience and a shared passion for culinary excellence, we take pride in every dish we serve.
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <img
                src={require('../assets/restaurant.jpg')}
                alt="Our Restaurant Interior"
                className="rounded-2xl shadow-2xl w-full max-w-lg max-h-[600px] object-cover"
              />
            </div>
          </div>
          {/* Values Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-lobster mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="font-bold">Sustainability</h3>
                <p>We are committed to sustainable practices and supporting local farmers.</p>
              </div>
              <div>
                <div className="text-3xl mb-2">❤️</div>
                <h3 className="font-bold">Passion</h3>
                <p>Every dish is prepared with love and attention to detail.</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="font-bold">Excellence</h3>
                <p>We strive for excellence in every aspect of our service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }