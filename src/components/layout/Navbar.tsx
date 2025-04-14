import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, Siren, X, Headset, Instagram, Linkedin } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import EmergencyCard from '@/components/shared/EmergencyCardModal';
import AppointmentModal from '@/components/shared/AppointmentModal';

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
  const location = useLocation();

  // Determine if hero background should be visible
  const shouldShowHero = () => {
    if (location.pathname === '/') return true;
    if (location.pathname === '/about') return true;
    if (location.pathname === '/services') return true;
    if (location.pathname.includes('/blog')) return false; // Blog page should not show hero styles
    return false;
  };

  const isHeroVisible = shouldShowHero();

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
  };

  // Open appointment modal
  const openAppointmentModal = () => {
    setShowAppointmentModal(true);
  };

  const navLinkClass = `${isScrolled || !isHeroVisible ? 'text-gray-800' : 'text-white'} nav-link`;

  const navLinkActiveClass = 'active';

  const hoverCardContentStyle = {
    marginLeft: '100px',
    marginTop: '12px',
    width: '1200px',
    height: '404.90606689453125px',
    justifyContent: 'space-between',
    padding: '36px 100px',
    borderBottomRightRadius: '16px',
    borderBottomLeftRadius: '16px',
    backgroundColor: '#FFFFFF',
  };

  const serviceCardStyle = {
    width: '380px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#F3F4F6',
    },
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
    '&:hover': { color: '#306EB6' },
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
    '&:hover': { backgroundColor: '#E6F3FF', color: '#306EB6' },
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
          {/* Logo */}
          <Link to="/" className="flex items-center z-10 mt-4">
            <img
                src="/images/logo.svg"
                alt="LIFE Hospital Logo"
                className={`h-10 md:h-12 object-contain ${
                    isScrolled || !isHeroVisible ? 'filter-hospital-blue' : 'filter-white'
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex mt-6 ml-[-550px] items-center gap-8 ${
              isScrolled || !isHeroVisible ? 'text-gray-800' : 'text-white'
          }`}>
            {/* Services Dropdown Hover Card */}
            <HoverCard openDelay={200} closeDelay={100} placement="bottom-end" offset={40}>
              <HoverCardTrigger asChild>
                <Link to="/services" className={`${navLinkClass} ${location.pathname === '/services' || location.pathname.includes('/services/') ? navLinkActiveClass : ''}`}>
                  Services
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="shadow-md" style={hoverCardContentStyle}>
                <div className="grid grid-cols-3 gap-x-4 gap-y-6 items-start">
                  {/* Left Column */}
                  <div className="flex flex-col justify-start space-y-6 ml-[-60px] col-span-1">
                    {/* Joint Replacement */}
                    <Link
                        to="/services/joint-replacement"
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle}>Joint Replacement</h3>
                      <div className="mt-2 space-y-1">
                        <Link to="/services/joint-replacement#knee" className="block" style={subHeadingStyle}>Knee Replacement</Link>
                        <Link to="/services/joint-replacement#hip" className="block" style={subHeadingStyle}>Hip Replacement</Link>
                      </div>
                    </Link>

                    {/* General Health */}
                    <Link
                        to="/services/general-health"
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle}>General Health</h3>
                      <div className="mt-2 space-y-1">
                        <Link to="/services/general-health#medicine" className="block" style={subHeadingStyle}>General Medicine</Link>
                        <Link to="/services/general-health#surgery" className="block" style={subHeadingStyle}>General Surgery</Link>
                        <Link to="/services/general-health#dental" className="block" style={subHeadingStyle}>Dental Surgery</Link>
                      </div>
                    </Link>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col justify-start space-y-6 ml-[-100px] col-span-1">
                    {/* Orthopedics & Muscle Care */}
                    <Link
                        to="/services/orthopedic"
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle}>Orthopedics & Muscle Care</h3>
                      <div className="mt-2 space-y-1">
                        <Link to="/services/orthopedic#orthopedic" className="block" style={subHeadingStyle}>Orthopedic</Link>
                        <Link to="/services/orthopedic#arthroscopy" className="block" style={subHeadingStyle}>Arthroscopy</Link>
                      </div>
                    </Link>

                    {/* Specialized Services */}
                    <Link
                        to="/services/specialized-services"
                        className="group relative rounded-md overflow-hidden transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                        style={serviceCardStyle}
                    >
                      <h3 style={serviceHeadingStyle}>Specialized Services</h3>
                      <div className="mt-2 space-y-1">
                        <Link to="/services/specialized-services#plastic" className="block" style={subHeadingStyle}>Plastic Surgery</Link>
                        <Link to="/services/specialized-services#ent" className="block" style={subHeadingStyle}>ENT</Link>
                      </div>
                    </Link>
                  </div>

                  {/* Image Column */}
                  <div className="flex flex-col justify-start space-y-4 col-span-1">
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
                <div className="absolute bottom-6 left-550 flex ml-[930px] gap-6">
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

            <Link to="/about" className={`${navLinkClass} ${location.pathname === '/about' ? navLinkActiveClass : ''}`}>
              About Us
            </Link>

            {/* Contact Us Link with Hover Card */}
            <HoverCard openDelay={200} closeDelay={100} placement="bottom-end" offset={40}>
              <HoverCardTrigger asChild>
                <Link to="/contact" className={`${navLinkClass} ${location.pathname === '/contact' ? navLinkActiveClass : ''} relative`}>
                  Contact Us
                  <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Headset size={18} color={isScrolled || !isHeroVisible ? '#306EB6' : '#fff'} />
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="shadow-md" style={hoverCardContentStyle}>
                <div className="grid grid-cols-3 gap-x-4 gap-y-6 items-start">
                  {/* Left Column for All Contact Info */}
                  <div className="flex flex-col justify-start space-y-3 ml-[-60px] col-span-1">
                    <div className="space-y-1">
                      <h3 style={{
                        fontFamily: 'Ranade',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        letterSpacing: '1%',
                        color: '#000000',
                      }}>General Enquiry</h3>
                      <div>
                        <a href="tel:+918592859585" style={{
                          fontFamily: 'Be Vietnam Pro',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#2C2C2CF2',
                        }}>+91 8592859585</a>
                      </div>
                      <div>
                        <a href="tel:+918592859585" style={{
                          fontFamily: 'Be Vietnam Pro',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#2C2C2CF2',
                        }}>+91 8592859585</a>
                      </div>
                    </div>

                    {/* Emergency Services */}
                    <div className="space-y-1">
                      <h3 style={{
                        fontFamily: 'Ranade',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        letterSpacing: '1%',
                        color: '#D61A1A',
                      }}>Emergency Services</h3>
                      <div>
                        <a href="tel:+917002585724" style={{
                          fontFamily: 'Be Vietnam Pro',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#2C2C2CF2',
                        }}>+91 7002585724</a>
                      </div>
                      <div>
                        <a href="tel:+917002585724" style={{
                          fontFamily: 'Be Vietnam Pro',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#2C2C2CF2',
                        }}>+91 7002585724</a>
                      </div>
                    </div>

                    {/* Appointment Booking */}
                    <div className="mt-8 space-y-1">
                      <h3 style={{
                        fontFamily: 'Ranade',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        letterSpacing: '1%',
                        color: '#000000',
                      }}>Appointment Booking</h3>
                      <div>
                        <a href="tel:+918597002535" style={{
                          fontFamily: 'Be Vietnam Pro',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#2C2C2CF2',
                        }}>+91 8597002535</a>
                      </div>
                      <div>
                        <a href="tel:+918597002535" style={{
                          fontFamily: 'Be Vietnam Pro',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#2C2C2CF2',
                        }}>+91 8597002535</a>
                      </div>
                    </div>
                  </div>

                  {/* Empty Middle Column */}
                  <div className="col-span-1"></div>

                  {/* Right Column: Images */}
                  <div className="flex flex-col justify-start space-y-4 col-span-1">
                    <div className="mt-4">
                      <img
                          src="/images/nav_con.svg"
                          alt="Contact Image 1"
                          className="rounded-lg ml-[20px] w-[320px] h-[268px] object-cover shadow-none"
                          style={{ borderRadius: '12px' }}
                      />
                    </div>
                    <div className="mt-4">
                      <img
                          src="/images/logos.svg"
                          alt="Contact Image 2"
                          className="rounded-lg object-cover ml-[30px] mt-5 w-[130px] h-[28px] shadow-none"
                          style={{ borderRadius: '12px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-6 left-550 flex ml-[930px] gap-6">
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
            <Link to="/blog" className={`${navLinkClass} ${location.pathname.includes('/blog') ? navLinkActiveClass : ''}`}>
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
                <span className="font-medium">+91 7002585724</span>
              </a>
              <div className="flex items-center gap-6 mt-2">
                <Button
                    onClick={openAppointmentModal}
                    className="bg-hospital-blue hover:bg-blue-800 text-white"
                    style={{ borderRadius: '30px' }}
                >
                  Request Appointment
                </Button>
                <a href="/emergency" className="flex items-center">
                  <Siren size={25} color="red" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-10">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className={`${isScrolled || !isHeroVisible ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMenuOpen && (
              <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          )}

          {/* Mobile Navigation Menu */}
          <div className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-5">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-hospital-blue">LIFE Hospital</h1>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X size={24} />
                </Button>
              </div>

              <nav className="flex flex-col gap-6">
                <Link to="/" className="text-gray-800 text-lg font-medium" onClick={toggleMenu}>Home</Link>

                {/* Services as a clickable button */}
                <Button
                    variant="ghost"
                    className="w-full text-left text-gray-800 text-lg font-medium hover:bg-gray-100 rounded-md p-2"
                    onClick={() => {
                      window.location.href = '/services';
                      toggleMenu();
                    }}
                >
                  Services
                </Button>

                <div className="ml-4 space-y-2">
                  <Link to="/services/joint-replacement" className="block text-gray-700 hover:text-hospital-blue" onClick={toggleMenu}>Joint Replacement</Link>
                  <Link to="/services/orthopedic" className="block text-gray-700 hover:text-hospital-blue" onClick={toggleMenu}>Orthopedics & Muscle Care</Link>
                  <Link to="/services/general-health" className="block text-gray-700 hover:text-hospital-blue" onClick={toggleMenu}>General Health</Link>
                  <Link to="/services/specialized-services" className="block text-gray-700 hover:text-hospital-blue" onClick={toggleMenu}>Specialized Services</Link>
                </div>

                <Link to="/about" className="text-gray-800 text-lg font-medium" onClick={toggleMenu}>About Us</Link>
                <Link to="/contact" className="text-gray-800 text-lg font-medium" onClick={toggleMenu}>Contact Us</Link>
                <Link to="/blog" className="text-gray-800 text-lg font-medium" onClick={toggleMenu}>Blog</Link>
              </nav>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Phone size={18} />
                  <span>+91 7002585724</span>
                </div>

                <Button
                    onClick={() => {
                      setShowAppointmentModal(true);
                      toggleMenu();
                    }}
                    className="w-full bg-hospital-blue hover:bg-blue-800 text-white rounded-full"
                >
                  Request Appointment
                </Button>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center gap-2">
                  <Siren size={18} />
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
      </header>
  );
};

export default Navbar;