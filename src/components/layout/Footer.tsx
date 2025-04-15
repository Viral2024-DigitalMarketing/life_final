import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="bg-white text-black py-6 sm:py-12 px-4 sm:px-8 font-['Be_Vietnam_Pro']">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
            {/* Column 1: Logo + Contact */}
            <div className="flex flex-col items-start">
              <Link to="/" className="block w-[140px] sm:w-[180px] mb-4 sm:mb-6">
                <img
                    src="/images/logo.svg"
                    alt="Life Hospital Logo"
                    className="h-10 sm:h-14 object-contain"
                />
              </Link>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-base">
                <p className="flex items-start text-gray-600">
                  <Mail className="w-4 sm:w-6 h-4 sm:h-6 text-[#565656] mr-2 sm:mr-3 mt-0.5" />
                  <span>support@personal.com</span>
                </p>
                <p className="flex items-start text-gray-600">
                  <Phone className="w-4 sm:w-6 h-4 sm:h-6 text-[#565656] mr-2 sm:mr-3 mt-0.5" />
                  <span>+91 7763545463</span>
                </p>
                <p className="flex items-start text-gray-600">
                  <MapPin className="w-4 sm:w-6 h-4 sm:h-6 text-[#565656] mr-2 sm:mr-3 mt-0.5" />
                  <span>Kamareddy, Telangana, India</span>
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start ml-20">
              <h3 className="font-[Ranade] font-medium text-sm sm:text-lg leading-6 sm:leading-7 mb-2 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-base">
                <li><Link to="/services" className="text-gray-600 hover:text-hospital-blue">Services</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-hospital-blue">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-hospital-blue">Contact Us</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-hospital-blue">Blog</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col items-start ml-[-15px]">
              <h3 className="font-[Ranade] font-medium text-sm sm:text-lg leading-6 sm:leading-7 mb-2 sm:mb-4">Services</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-base">
                <li><Link to="/services/joint-replacement" className="text-gray-600 hover:text-hospital-blue">Joint Replacement</Link></li>
                <li><Link to="/services/orthopedic" className="text-gray-600 hover:text-hospital-blue">Orthopedics & Muscle Care</Link></li>
                <li><Link to="/services/general-health" className="text-gray-600 hover:text-hospital-blue">General Health</Link></li>
                <li><Link to="/services/specialized-services" className="text-gray-600 hover:text-hospital-blue">Specialized Services</Link></li>
              </ul>
            </div>

            {/* Column 4: Socials + Map */}
            <div className="flex flex-col items-start">
              <h3 className="font-[Ranade] font-medium text-sm sm:text-lg leading-6 sm:leading-7 mb-2 sm:mb-4">Follow Us</h3>
              <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                <a href="#" className="p-1.5 sm:p-2 bg-gray-100 rounded-full text-[#565656] hover:bg-hospital-blue hover:text-white transition-colors">
                  <Facebook className="w-4 sm:w-6 h-4 sm:h-6" />
                </a>
                <a href="#" className="p-1.5 sm:p-2 bg-gray-100 rounded-full text-[#565656] hover:bg-hospital-blue hover:text-white transition-colors">
                  <Twitter className="w-4 sm:w-6 h-4 sm:h-6" />
                </a>
                <a href="#" className="p-1.5 sm:p-2 bg-gray-100 rounded-full text-[#565656] hover:bg-hospital-blue hover:text-white transition-colors">
                  <Instagram className="w-4 sm:w-6 h-4 sm:h-6" />
                </a>
                <a href="#" className="p-1.5 sm:p-2 bg-gray-100 rounded-full text-[#565656] hover:bg-hospital-blue hover:text-white transition-colors">
                  <Linkedin className="w-4 sm:w-6 h-4 sm:h-6" />
                </a>
              </div>

              <h3 className="font-[Ranade] font-medium text-sm sm:text-lg leading-6 sm:leading-7 mb-2 sm:mb-3">Location</h3>
              <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Life+Hospital+Kamareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-100 text-left pt-4 sm:pt-6 mt-6 sm:mt-8 text-xs sm:text-base">
            <p className="text-gray-600">© {new Date().getFullYear()} Life Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;