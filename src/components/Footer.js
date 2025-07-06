import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-restaurant-dark text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Business Hours */}
          <div>
            <h3 className="font-bold text-restaurant-orange mb-2">Business Hours</h3>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="font-bold text-restaurant-orange mb-2">Connect With Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-restaurant-orange" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-restaurant-orange" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-restaurant-orange" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-restaurant-orange mb-2">Contact Info</h3>
            <p>123 Restaurant Street</p>
            <p>City, State 12345</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          &copy; 2024 Delicious Bites Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}