import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="bg-white text-black py-12 px-4 md:pl-12 lg:pl-20 lg:pr-24 font-['Be_Vietnam_Pro']">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-8">
            {/* Column 1: Logo + Contact */}
            <div>
              <Link to="/" className="block w-[140px] mb-4">
                <img
                    src="/images/logo.svg"
                    alt="Life Hospital Logo"
                    className="h-10 md:h-12 object-contain"
                />
              </Link>
              <div className="space-y-4 text-sm sm:text-base">
                <p className="flex items-start text-gray-600">
                  <Mail className="w-6 h-6 text-[#565656] mr-3 mt-1" />
                  <span>support@personal.com</span>
                </p>
                <p className="flex items-start text-gray-600">
                  <Phone className="w-6 h-6 text-[#565656] mr-3 mt-1" />
                  <span>+91 7763545463</span>
                </p>
                <p className="flex items-start text-gray-600">
                  <MapPin className="w-6 h-6 text-[#565656] mr-3 mt-1" />
                  <span>Kamareddy, Telangana, India</span>
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

            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg font-bold mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link to="/services/joint-replacement" className="text-gray-600 hover:text-hospital-blue">Joint Replacement</Link></li>
                <li><Link to="/services/orthopedic" className="text-gray-600 hover:text-hospital-blue">Orthopedics & Muscle Care</Link></li>
                <li><Link to="/services/general-health" className="text-gray-600 hover:text-hospital-blue">General Health</Link></li>
                <li><Link to="/services/specialized-services" className="text-gray-600 hover:text-hospital-blue">Specialized Services</Link></li>
              </ul>
            </div>

            {/* Column 4: Helpline */}
            <div>
              <h3 className="text-lg font-bold mb-3 sm:mb-4">24/7 Helpline</h3>
              <div className="space-y-5 text-sm sm:text-base text-gray-800">
                <div>
                  <p className="font-['Be_Vietnam_Pro'] font-medium text-[16px] leading-[100%] text-[#D61A1A]">Emergency:</p>
                  <p className=" font-['Be_Vietnam_Pro'] mt-3  text-[16px] leading-[100%] text-[#D61A1A]">+91 99999 99999</p>
                </div>
                <div>
                  <p className="font-['Be_Vietnam_Pro'] font-medium text-[16px] leading-[100%] text-[#06009E]">Appointment Booking:</p>
                  <p className="mt-1 font-['Be_Vietnam_Pro'] mt-3  text-[16px] leading-[100%] text-[#06009E]">+91 88888 88888</p>
                </div>
                <div>
                  <p className="font-['Be_Vietnam_Pro'] font-medium text-[16px] leading-[100%] text-[#06009E]">General Query:</p>
                  <p className="mt-1 font-['Be_Vietnam_Pro'] mt-3  text-[16px] leading-[100%] text-[#06009E]">+91 77777 77777</p>
                </div>
              </div>
            </div>

            {/* Column 5: Map + Socials */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Location</h3>
              <a
                  href="https://www.google.com/maps?q=Life+Hospital+Kamareddy&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-32 rounded-md overflow-hidden"
              >
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps?q=Life+Hospital+Kamareddy&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Life Hospital Location"
                    allowFullScreen
                ></iframe>
              </a>

              <h3 className="text-lg font-bold mt-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#"
                   className="p-2 bg-gray-100 rounded-full text-[#565656] hover:bg-hospital-blue hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#"
                   className="p-2 bg-gray-100 rounded-full text-[#565656] hover:bg-hospital-blue hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#"
                   className="p-2 bg-gray-100 rounded-full text-[#565656] hover:bg-hospital-blue hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#"
                   className="p-2 bg-gray-100 rounded-full text-[#565656] hover:bg-hospital-blue hover:text-white transition-colors">
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
