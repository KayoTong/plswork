import HeroSection from '../components/HeroSection';

export default function Contact() {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="mb-2 flex items-center gap-2">
              <span role="img" aria-label="location">📍</span>
              <span>123 Restaurant Street, City, State 12345</span>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span role="img" aria-label="phone">📞</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span role="img" aria-label="email">✉️</span>
              <span>info@deliciousbites.com</span>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span role="img" aria-label="clock">⏰</span>
              <span>
                Monday - Friday: 11:00 AM - 10:00 PM<br />
                Saturday - Sunday: 10:00 AM - 11:00 PM
              </span>
            </div>
            <h3 className="text-lg font-bold mt-6 mb-2">Send us a Message</h3>
            <form className="space-y-4 mt-4 max-w-md w-full">
        <div>
            <label className="block font-semibold mb-1 text-lg" htmlFor="name">Name</label>
            <input
            className="w-full border rounded px-4 py-3 text-base"
            type="text"
            id="name"
            name="name"
            required
            />
        </div>
        <div>
            <label className="block font-semibold mb-1 text-lg" htmlFor="email">Email</label>
            <input
            className="w-full border rounded px-4 py-3 text-base"
            type="email"
            id="email"
            name="email"
            required
            />
        </div>
        <div>
            <label className="block font-semibold mb-1 text-lg" htmlFor="message">Message</label>
            <textarea
            className="w-full border rounded px-4 py-3 text-base min-h-[120px]"
            id="message"
            name="message"
            rows={6}
            required
            ></textarea>
        </div>
        <button className="bg-restaurant-orange text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition text-lg" type="submit">
            Send Message
        </button>
        </form>
          </div>
          {/* Map */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Find Us</h2>
            <div className="w-full h-80 rounded-lg overflow-hidden shadow">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}