
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Services menu items
  const serviceItems = [
    { title: 'Self Publishing', link: '/self-publishing' },
    { title: 'Book Marketing Services', link: '/book-marketing' },
    { title: 'Audiobook Services', link: '/audiobook-services' },
    { title: 'Book Illustration', link: '/book-illustration' },
    { title: 'Book Cover Design', link: '/book-cover-design' },
  ];

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-western-blue py-2 text-white">
        <div className="container-custom flex justify-between items-center">
          <div className="hidden md:block">Chat with us now and unlock an exclusive discount</div>
          <div className="flex items-center space-x-6">
            <a href="tel:+1-860-764-8454" className="flex items-center text-sm">
              +1-860-764-8454
            </a>
            <a href="mailto:marketing@westernpublishinghouse.com" className="hidden md:flex items-center text-sm">
              marketing@westernpublishinghouse.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-western-beige py-4 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-1">
              <Link to="/" className="block">
                <h1 className="text-2xl font-semibold text-western">WESTERN PUBLISHING</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-western hover:text-western-blue transition-colors">Home</Link>
              
              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="flex items-center text-western hover:text-western-blue transition-colors"
                  onClick={toggleServicesDropdown}
                >
                  Services <ChevronDown size={16} className="ml-1" />
                </button>
                
                {servicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    <div className="py-2">
                      {serviceItems.map((item, index) => (
                        <Link 
                          key={index}
                          to={item.link}
                          className="block px-4 py-2 text-sm text-western hover:bg-western-blue hover:text-white transition-colors"
                          onClick={() => setServicesDropdown(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/about" className="text-western hover:text-western-blue transition-colors">About Us</Link>
              <Link to="/portfolio" className="text-western hover:text-western-blue transition-colors">Portfolio</Link>
              <Link to="/testimonial" className="text-western hover:text-western-blue transition-colors">Testimonial</Link>
              <Link to="/contact" className="text-western hover:text-western-blue transition-colors">Contact</Link>
            </nav>

            {/* Get Started Button */}
            <Link to="/contact" className="hidden md:block bg-western-blue text-white py-2 px-6 hover:bg-opacity-90 transition-colors duration-300 uppercase text-sm font-medium">
              GET STARTED
            </Link>

            {/* Mobile Menu Button */}
            <button 
              aria-label="Menu" 
              className="text-western hover:text-western-blue transition-colors md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="container-custom py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="block" onClick={() => setMobileMenuOpen(false)}>
                <h1 className="text-2xl font-semibold text-western">WESTERN PUBLISHING</h1>
              </Link>
              <button 
                aria-label="Close menu" 
                className="text-western"
                onClick={toggleMobileMenu}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mt-12 flex flex-col space-y-6">
              <Link to="/" className="text-2xl text-western font-crimson" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              {/* Mobile Services submenu */}
              <div className="space-y-4">
                <p className="text-2xl text-western font-crimson">Services</p>
                <div className="pl-4 space-y-3">
                  {serviceItems.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.link}
                      className="block text-lg text-western-muted hover:text-western-blue transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/about" className="text-2xl text-western font-crimson" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/portfolio" className="text-2xl text-western font-crimson" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
              <Link to="/testimonial" className="text-2xl text-western font-crimson" onClick={() => setMobileMenuOpen(false)}>Testimonial</Link>
              <Link to="/contact" className="text-2xl text-western font-crimson" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              
              <Link to="/contact" className="bg-western-blue text-white py-2 px-6 hover:bg-opacity-90 transition-colors duration-300 uppercase text-sm font-medium inline-block text-center mt-4" onClick={() => setMobileMenuOpen(false)}>
                GET STARTED
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
