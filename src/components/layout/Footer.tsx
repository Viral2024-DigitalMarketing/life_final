import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="bg-white text-black py-12 px-4 md:pl-12 lg:pl-20 lg:pr-24 font-['Be_Vietnam_Pro']">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-8">
            {/* Column 1: Logo + About + Contact */}
            <div>
              <Link to="/" className="block w-[140px] mb-4">
                <img
                    src="/images/logo.svg"
                    alt="Life Hospital Logo"
                    className="h-10 md:h-12 object-contain"
                />
              </Link>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Providing exceptional healthcare with cutting-edge technology and compassionate care since 2015.
              </p>
              <div className="space-y-3 text-sm sm:text-base">
                <p className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 text-hospital-blue mr-2" />
                  support@personal.com
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 text-hospital-blue mr-2" />
                  +91 7763545463
                </p>
                <p className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 text-hospital-blue mr-2" />
                  Kamareddy, Telangana, India
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link to="/services" className="text-gray-600 hover:text-hospital-blue">Services</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-hospital-blue">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-hospital-blue">Contact Us</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-hospital-blue">Blog</Link></li>
              </ul>
            </div>

            {/* Column 3: Departments */}
            <div>
              <h3 className="text-lg font-bold mb-3 sm:mb-4">Departments</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li>Orthopedic</li>
                <li>Arthroscopy</li>
                <li>General Medicine</li>
                <li>General Surgery</li>
                <li>Plastic Surgery</li>
                <li>Dental Surgery</li>
                <li>ENT</li>
              </ul>
            </div>

            {/* Column 4: Helpline */}
            <div>
              <h3 className="text-lg font-bold mb-3 sm:mb-4">24/7 Helpline</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-800">
                <div>
                  <p className="font-medium">Emergency:</p>
                  <p>+91 99999 99999</p>
                </div>
                <div>
                  <p className="font-medium">Appointment Booking:</p>
                  <p>+91 88888 88888</p>
                </div>
                <div>
                  <p className="font-medium">General Query:</p>
                  <p>+91 77777 77777</p>
                </div>
              </div>
            </div>

            {/* Column 5: Map + Socials */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Location</h3>
              <iframe
                  className="w-full h-32 rounded-md"
                  src="https://maps.google.com/maps?q=Kamareddy,%20Telangana,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  title="Map Location"
              ></iframe>

              <h3 className="text-lg font-bold mt-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-hospital-blue hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-hospital-blue hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-hospital-blue hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-hospital-blue hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-100 text-center pt-6 mt-6 text-sm sm:text-base">
            <p className="text-gray-600">© {new Date().getFullYear()} Life Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
