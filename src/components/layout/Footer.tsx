import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-white text-black py-8 md:py-12 px-4 md:px-8 font-['Be_Vietnam_Pro']">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo + Contact */}
            <div className="flex flex-col">
              <Link to="/" className="block w-40 md:w-48 mb-6">
                <img
                    src="/images/logo.svg"
                    alt="Life Hospital Logo"
                    className="h-12 object-contain"
                />
              </Link>
              <div className="space-y-3 text-sm md:text-base">
                <p className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
                  <span>support@personal.com</span>
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
                  <span>+91 9030339116</span>
                </p>
                <p className="flex items-start text-gray-600">
                  <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Kamareddy, Telangana, India</span>
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col md:ml-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Services</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link to="/services/joint-replacement" className="text-gray-600 hover:text-blue-600 transition-colors">Joint Replacement</Link></li>
                <li><Link to="/services/orthopedic" className="text-gray-600 hover:text-blue-600 transition-colors">Orthopedics & Muscle Care</Link></li>
                <li><Link to="/services/general-health" className="text-gray-600 hover:text-blue-600 transition-colors">General Health</Link></li>
                <li><Link to="/services/specialized-services" className="text-gray-600 hover:text-blue-600 transition-colors">Specialized Services</Link></li>
              </ul>
            </div>

            {/* Column 4: Socials + Map */}
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-3 mb-6">
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Location</h3>
              <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Life+Hospital+Kamareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200 transition-colors"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-6 mt-8 text-sm text-center md:text-left">
            <p className="text-gray-600">© {currentYear} Life Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
