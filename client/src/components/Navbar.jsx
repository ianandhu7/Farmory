import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/products' },
    {
      title: 'Categories',
      path: '#',
      dropdown: [
        'Livestock Products',
        'Vegetables',
        'Fruits',
        'Grains & Seeds',
        'Microgreens',
        'Organic Packs'
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';
  // Always show navbar for now to ensure visibility during development, 
  // or adjust the logic if it was intentionally hidden on home scroll
  // if (isHomePage && !scrolled && !mobileMenuOpen && !isMobile) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
        padding: '12px 0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'var(--primary-color)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px'
          }}>
            R
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
            <span className="logo-text" style={{
              fontSize: '22px',
              fontWeight: '800',
              fontFamily: "'Outfit', sans-serif",
              color: 'var(--primary-color)',
              letterSpacing: '2px'
            }}>
              RAECH HEL
            </span>
            <span style={{ fontSize: '10px', color: '#666', fontWeight: '600', letterSpacing: '0.5px' }}>
              FARM FRESH
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="desktop-nav" style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }}>
          {menuItems.map((item) => (
            <li
              key={item.title}
              onMouseEnter={() => item.dropdown && setCategoriesOpen(true)}
              onMouseLeave={() => item.dropdown && setCategoriesOpen(false)}
              style={{ position: 'relative' }}
            >
              <Link to={item.path} style={{
                fontSize: '15px',
                fontWeight: '600',
                color: 'var(--text-color)',
                opacity: location.pathname === item.path ? 1 : 0.7,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                {item.title}
                {item.dropdown && <span style={{ fontSize: '10px' }}>▼</span>}
              </Link>

              {item.dropdown && (
                <AnimatePresence>
                  {categoriesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        background: 'white',
                        minWidth: '220px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        padding: '15px 0',
                        borderRadius: '12px',
                        marginTop: '15px',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {item.dropdown.map((cat) => (
                        <li key={cat}>
                          <Link
                            to={`/products?category=${encodeURIComponent(cat)}`}
                            style={{
                              padding: '10px 20px',
                              display: 'block',
                              fontSize: '14px',
                              color: 'var(--text-color)',
                              fontWeight: '500'
                            }}
                            className="dropdown-item"
                          >
                            {cat}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Actions & Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Search Bar - Desktop */}
          <div style={{ position: 'relative', display: isMobile ? 'none' : 'block' }}>
            <input
              type="text"
              placeholder="Search farm fresh..."
              style={{
                padding: '10px 15px 10px 40px',
                borderRadius: '50px',
                border: '1px solid #eee',
                background: '#f8f8f8',
                fontSize: '14px',
                width: '200px',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.width = '250px'}
              onBlur={(e) => e.target.style.width = '200px'}
            />
            <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
          </div>

          <button className="search-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: 'inherit', display: isMobile ? 'block' : 'none' }}>🔍</button>

          <Link to="/cart" style={{
            background: 'var(--light-gray)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            position: 'relative',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            🛒
            {cart.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                background: 'var(--accent-color)',
                color: 'white',
                fontSize: '10px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>

          {/* Hamburger Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'white',
              overflow: 'hidden',
              borderTop: '1px solid var(--border-color)',
              width: '100%'
            }}
          >
            <ul style={{ padding: '20px' }}>
              {menuItems.map((item) => (
                <li key={item.title} style={{ marginBottom: '15px' }}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'var(--text-color)',
                      display: 'block',
                      padding: '10px'
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li style={{ borderTop: '1px solid #efefef', paddingTop: '15px' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/login');
                  }}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold'
                  }}
                >
                  Login / Account
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
