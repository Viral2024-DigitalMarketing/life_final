import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Phone, Siren, X, Headset, Instagram, Linkedin } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import EmergencyCardModal from '@/components/shared/EmergencyCardModal';
import AppointmentModal from '@/components/shared/AppointmentModal';
import HeroSection from "@/components/home/HeroSection.tsx";

// Define proper interface for Navbar props
interface NavbarProps {
  // Add any specific props if needed, otherwise keep it empty but documented
}

// Extend HoverCardProps to include placement
declare module '@radix-ui/react-hover-card' {
  interface HoverCardProps {
    placement?: 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
    offset?: number;
  }
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false); // Add state for emergency modal
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if hero background should be visible
  const shouldShowHero = () => {
    if (location.pathname === '/') return true;
    if (location.pathname === '/services') return true;
    // Removed the about page from hero styles to match blog page behavior
    if (location.pathname.includes('/blog')) return false;
    if (location.pathname === '/about') return false; // About page should not show hero styles, like blog
    if (location.pathname === '/contact') return false; // Contact page should not show hero styles
    return false;
  };

  const isHeroVisible = shouldShowHero();

  // Handle screen resize to prevent layout issues
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Handle scroll event to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Open appointment modal
  const openAppointmentModal = () => {
    setShowAppointmentModal(true);
  };

  // Open emergency modal
  const openEmergencyModal = () => {
    setShowEmergencyModal(true);
  };

  // Navigate to services and close menu
  const navigateToServices = () => {
    navigate('/services');
    toggleMenu();
  };

  // Logo click handler - New function
  const handleLogoClick = (e) => {
    // If already on homepage, scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to homepage
      navigate('/');
      // After navigation, ensure we're at the top
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 100);
    }
  };

  const navLinkClass = `${isScrolled || !isHeroVisible ? 'text-gray-800' : 'text-white'} nav-link`;

  const navLinkActiveClass = 'active';

  // Responsive styles for hover card content
  const hoverCardContentStyle = {
    width: 'calc(100vw - 40px)',
    maxWidth: '1200px',
    height: 'auto',
    maxHeight: '85vh',
    overflow: 'auto',
    justifyContent: 'space-between',
    padding: '24px',
    borderBottomRightRadius: '16px',
    borderBottomLeftRadius: '16px',
    backgroundColor: '#FFFFFF',
  };

  // Responsive styles for service card
  const serviceCardStyle = {
    width: '100%',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  };

  const serviceHeadingStyle = {
    fontFamily: 'Ranade',
    fontWeight: 600,
    fontSize: '22px',
    lineHeight: '120%',
    letterSpacing: '1%',
    color: '#000000',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const subHeadingStyle = {
    fontFamily: 'Be Vietnam Pro',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '120%',
    letterSpacing: '0%',
    color: '#4A5568',
    padding: '6px 10px',
    borderRadius: '6px',
    display: 'block',
    marginBottom: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  return (
      <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              isScrolled || !isHeroVisible
                  ? 'bg-white shadow-md py-2'
                  : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Logo - Updated with click handler */}
          <Link to="/" className="flex items-center z-10 mt-0 sm:mt-2 md:mt-4" onClick={handleLogoClick}>
            <img
                src="/images/logo.svg"
                alt="LIFE Hospital Logo"
                className={`h-8 sm:h-10 md:h-12 object-contain ${
                    isScrolled || !isHeroVisible ? 'filter-hospital-blue' : 'filter-white'
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex mt-0 ml-0 xl:ml-[-550px] items-center gap-6 xl:gap-8 ${
              isScrolled || !isHeroVisible ? 'text-gray-800' : 'text-white'
          }`}>
            {/* Services Dropdown Hover Card */}
            <HoverCard openDelay={200} closeDelay={100} placement="bottom-end" offset={40}>
              <HoverCardTrigger asChild>
                <Link to="/services" className={`${navLinkClass} ${location.pathname === '/services' || location.pathname.includes('/services/') ? navLinkActiveClass : ''} relative hover:text-hospital-blue transition-colors`}>
                  Services
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="shadow-md overflow-auto" style={hoverCardContentStyle}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {/* Left Column */}
                  <div className="flex flex-col justify-start space-y-4 lg:space-y-6 lg:ml-[-60px] col-span-1">
                    {/* Joint Replacement */}
                    <Link
                        to="/services/joint-replacement"
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle} className="hover:text-hospital-blue">Joint Replacement</h3>
                      <div className="mt-2 space-y-1">
                        <Link to="/services/joint-replacement#knee" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>Knee Replacement</Link>
                        <Link to="/services/joint-replacement#hip" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>Hip Replacement</Link>
                      </div>
                    </Link>

                    {/* General Health */}
                    <Link
                        to="/services/general-health"
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle} className="hover:text-hospital-blue">General Health</h3>
                      <div className="mt-2 space-y-1">
                        <Link to="/services/general-health#medicine" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>General Medicine</Link>
                        <Link to="/services/general-health#surgery" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>General Surgery</Link>
                        <Link to="/services/general-health#dental" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>Dental Surgery</Link>
                      </div>
                    </Link>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col justify-start space-y-4 lg:space-y-6 lg:ml-[-100px] col-span-1">
                    {/* Orthopedics & Muscle Care */}
                    <Link
                        to="/services/orthopedic"
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle} className="hover:text-hospital-blue">Orthopedics & Muscle Care</h3>
                      <div className="mt-2 space-y-1">
                        <Link to="/services/orthopedic#orthopedic" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>Orthopedic</Link>
                        <Link to="/services/orthopedic#arthroscopy" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>Arthroscopy</Link>
                      </div>
                    </Link>

                    {/* Specialized Services */}
                    <Link
                        to="/services/specialized-services"
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle} className="hover:text-hospital-blue">Specialized Services</h3>
                      <div className="mt-2 space-y-1">
                        <Link to="/services/specialized-services#plastic" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>Plastic Surgery</Link>
                        <Link to="/services/specialized-services#ent" className="block hover:bg-blue-50 hover:text-hospital-blue" style={subHeadingStyle}>ENT</Link>
                      </div>
                    </Link>
                  </div>

                  {/* Image Column */}
                  <div className="hidden lg:flex flex-col justify-start space-y-4 col-span-1">
                    <div className="mt-4">
                      <img
                          src="/images/nav1.svg"
                          alt="Service Image 1"
                          className="rounded-lg ml-[20px] w-[320px] h-[268px] object-cover shadow-none"
                          style={{ borderRadius: '12px' }}
                      />
                    </div>
                    <div className="mt-4">
                      <img
                          src="/images/logos.svg"
                          alt="Service Image 2"
                          className="rounded-lg object-cover ml-[30px] mt-5 w-[130px] h-[28px] shadow-none"
                          style={{ borderRadius: '12px' }}
                      />
                    </div>
                  </div>
                </div>
                {/* Social Links */}
                <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-6 flex justify-end lg:ml-[930px] gap-6">
                  <Link
                      to="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-hospital-blue transition-colors duration-300"
                  >
                    <Instagram size={24} />
                  </Link>
                  <Link
                      to="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-hospital-blue transition-colors duration-300"
                  >
                    <Linkedin size={24} />
                  </Link>
                </div>
              </HoverCardContent>
            </HoverCard>

            <Link to="/about" className={`${navLinkClass} ${location.pathname === '/about' ? navLinkActiveClass : ''} hover:text-hospital-blue transition-colors`}>
              About Us
            </Link>

            {/* Contact Us Link with Hover Card */}
            <HoverCard openDelay={200} closeDelay={100} placement="bottom-end" offset={40}>
              <HoverCardTrigger asChild>
                <Link to="/contact" className={`${navLinkClass} ${location.pathname === '/contact' ? navLinkActiveClass : ''} relative hover:text-hospital-blue transition-colors`}>
                  Contact Us
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="shadow-md overflow-auto" style={hoverCardContentStyle}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {/* Left Column */}
                  <div className="flex flex-col justify-start space-y-4 lg:space-y-6 lg:ml-[-60px] col-span-1">
                    {/* General Enquiry */}
                    <div
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100 cursor-default"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle}>General Enquiry</h3>
                      <div className="mt-2 space-y-1">
                        <p style={subHeadingStyle}>+91 8592859585</p>
                        <p style={subHeadingStyle}>+91 8592859585</p>
                      </div>
                    </div>

                    {/* Appointment Booking */}
                    <div
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100 cursor-default"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle}>Appointment Booking</h3>
                      <div className="mt-2 space-y-1">
                        <p style={subHeadingStyle}>+91 8597002535</p>
                        <p style={subHeadingStyle}>+91 8597002535</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col justify-start space-y-4 lg:space-y-6 lg:ml-[-100px] col-span-1">
                    {/* Emergency Services */}
                    <div
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100 cursor-default"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle} className="text-red-600">Emergency Services</h3>
                      <div className="mt-2 space-y-1">
                        <p style={subHeadingStyle}>+91 7002585724</p>
                        <p style={subHeadingStyle}>+91 7002585724</p>
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="hidden lg:flex flex-col justify-start space-y-4 col-span-1">
                    <div className="mt-4">
                      <img
                          src="/images/nav_con.svg"
                          alt="Service Image 1"
                          className="rounded-lg ml-[20px] w-[320px] h-[268px] object-cover shadow-none"
                          style={{ borderRadius: '12px' }}
                      />
                    </div>
                    <div className="mt-4">
                      <img
                          src="/images/logos.svg"
                          alt="Service Image 2"
                          className="rounded-lg object-cover ml-[30px] mt-5 w-[130px] h-[28px] shadow-none"
                          style={{ borderRadius: '12px' }}
                      />
                    </div>
                  </div>
                </div>
                {/* Social Links */}
                <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-6 flex justify-end lg:ml-[930px] gap-6">
                  <Link
                      to="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-hospital-blue transition-colors duration-300"
                  >
                    <Instagram size={24} />
                  </Link>
                  <Link
                      to="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-hospital-blue transition-colors duration-300"
                  >
                    <Linkedin size={24} />
                  </Link>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Link to="/blog" className={`${navLinkClass} ${location.pathname.includes('/blog') ? navLinkActiveClass : ''} hover:text-hospital-blue transition-colors`}>
              Blog
            </Link>
          </nav>

          {/* Contact and Appointment */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <a
                  href="tel:+917002585724"
                  className={`flex items-center gap-2 ${
                      isScrolled || !isHeroVisible ? 'text-hospital-blue' : 'text-white'
                  }`}
              >
                <Headset size={18} />
                <span className="font-medium text-sm mr-4 xl:mr-[70px]">+91 7002585724</span>
              </a>
              <div className="flex items-center gap-4 xl:gap-6 mt-2">
                <Button
                    onClick={openAppointmentModal}
                    className="bg-hospital-blue hover:bg-blue-800 text-white text-xs xl:text-sm px-3 py-1 xl:px-4 xl:py-2 whitespace-nowrap"
                    style={{ borderRadius: '30px' }}
                >
                  Request Appointment
                </Button>
                {/* Updated Siren button to trigger emergency modal */}
                <button
                    onClick={openEmergencyModal}
                    className="flex items-center hover:opacity-80 transition-opacity"
                    aria-label="Emergency"
                >
                  <Siren size={20} className="xl:w-6 xl:h-6" color="red" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button - Fixed positioning to prevent scroll issues */}
          <div className="lg:hidden flex items-center z-10">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className={`p-1 ${isScrolled || !isHeroVisible ? 'text-gray-800' : 'text-white'}`}
                aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMenuOpen && (
              <div
                  className="fixed inset-0 z-40 bg-black bg-opacity-50"
                  onClick={toggleMenu}
                  aria-hidden="true"
              ></div>
          )}

          {/* Mobile Navigation Menu with max-width to prevent horizontal scroll */}
          <div className={`fixed top-0 right-0 h-full w-full max-w-[280px] sm:max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto overflow-x-hidden ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-5">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-bold text-hospital-blue">LIFE Hospital</h1>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    className="p-1"
                    aria-label="Close menu"
                >
                  <X size={20} />
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                <Link to="/"
                      className="text-gray-800 text-base font-medium hover:text-hospital-blue transition-colors"
                      onClick={(e) => {
                        toggleMenu();
                        handleLogoClick(e);
                      }}>
                  Home
                </Link>

                {/* Services as a clickable link aligned left like Home */}
                <Link
                    to="/services"
                    className="text-gray-800 text-base font-medium hover:text-hospital-blue transition-colors"
                    onClick={toggleMenu}
                >
                  Services
                </Link>

                <div className="ml-4 space-y-2">
                  <Link to="/services/joint-replacement" className="block text-gray-700 text-sm hover:text-hospital-blue transition-colors" onClick={toggleMenu}>Joint Replacement</Link>
                  <Link to="/services/orthopedic" className="block text-gray-700 text-sm hover:text-hospital-blue transition-colors" onClick={toggleMenu}>Orthopedics & Muscle Care</Link>
                  <Link to="/services/general-health" className="block text-gray-700 text-sm hover:text-hospital-blue transition-colors" onClick={toggleMenu}>General Health</Link>
                  <Link to="/services/specialized-services" className="block text-gray-700 text-sm hover:text-hospital-blue transition-colors" onClick={toggleMenu}>Specialized Services</Link>
                </div>

                <Link to="/about" className="text-gray-800 text-base font-medium hover:text-hospital-blue transition-colors" onClick={toggleMenu}>About Us</Link>

                {/* Contact Us with hover card-like content in mobile */}
                <div className="space-y-3">
                  <Link to="/contact" className="text-gray-800 text-base font-medium hover:text-hospital-blue transition-colors" onClick={toggleMenu}>Contact Us</Link>

                  {/* Contact info styled like hover card */}
                  <div className="ml-4 bg-gray-50 rounded-lg p-3 sm:p-4">
                    {/* General Enquiry */}
                    <div className="mb-3">
                      <h3 className="font-medium text-sm sm:text-base text-gray-900">General Enquiry</h3>
                      <div className="mt-1">
                        <a href="tel:+918592859585" className="block text-xs sm:text-sm text-gray-700 hover:text-hospital-blue transition-colors">+91 8592859585</a>
                      </div>
                    </div>

                    {/* Emergency Services */}
                    <div className="mb-3">
                      <h3 className="font-medium text-sm sm:text-base text-red-600">Emergency Services</h3>
                      <div className="mt-1">
                        <a href="tel:+917002585724" className="block text-xs sm:text-sm text-gray-700 hover:text-red-600 transition-colors">+91 7002585724</a>
                      </div>
                    </div>

                    {/* Appointment Booking */}
                    <div>
                      <h3 className="font-medium text-sm sm:text-base text-gray-900">Appointment Booking</h3>
                      <div className="mt-1">
                        <a href="tel:+918597002535" className="block text-xs sm:text-sm text-gray-700 hover:text-hospital-blue transition-colors">+91 8597002535</a>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/blog" className="text-gray-800 text-base font-medium hover:text-hospital-blue transition-colors" onClick={toggleMenu}>Blog</Link>
              </nav>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Phone size={16} className="text-hospital-blue" />
                  <a href="tel:+917002585724" className="text-sm hover:text-hospital-blue transition-colors">
                    +91 7002585724
                  </a>
                </div>

                <Button
                    onClick={() => {
                      setShowAppointmentModal(true);
                      toggleMenu();
                    }}
                    className="w-full bg-hospital-blue hover:bg-blue-800 text-white text-sm rounded-full"
                >
                  Request Appointment
                </Button>

                {/* Emergency button in mobile menu */}
                <Button
                    onClick={() => {
                      setShowEmergencyModal(true);
                      toggleMenu();
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-sm rounded-full flex items-center justify-center gap-2"
                >
                  <Siren size={16} />
                  Emergency
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Modal */}
        <AppointmentModal
            isOpen={showAppointmentModal}
            onClose={() => setShowAppointmentModal(false)}
        />

        {/* Emergency Card Modal */}
        <EmergencyCardModal
            isOpen={showEmergencyModal}
            onClose={() => setShowEmergencyModal(false)}
        />
      </header>
  );
};

export default Navbar;