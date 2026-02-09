// src/components/layout/Footer.tsx
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-2xl font-bold">Tira Rwanda</span>
            </div>
            <p className="text-gray-400">
              The perfect way to get around Rwanda. Rent unique cars from local
              hosts.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-tira-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-tira-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-tira-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/search"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Browse Cars
                </a>
              </li>
              <li>
                <a
                  href="/host"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Become a Host
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Safety
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Kigali</li>
              <li className="text-gray-400">Musanze</li>
              <li className="text-gray-400">Rubavu</li>
              <li className="text-gray-400">Huye</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">info@tira.rw</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+250 788 123 456</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Tira Rwanda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
