import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Shop', path: '/products' },
    { title: 'Our Story', path: '/about' },
    { title: 'Recipes', path: '/recipes' },
    { title: 'Blog', path: '/blog' }
  ];

  // Hide navbar only on Home page when at the very top (scrolled === false)
  const isHomePage = location.pathname === '/';
  if (isHomePage && !scrolled) return null;

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
        background: 'rgba(255, 255, 255, 0.95)',
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
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px',
            boxShadow: '0 4px 10px rgba(44, 95, 45, 0.2)'
          }}>
            F
          </div>
          <span style={{
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: "'Playfair Display', serif",
            color: 'var(--text-color)'
          }}>
            Farmory
          </span>
        </Link>

        {/* Links */}
        <ul style={{ display: 'flex', gap: '40px' }}>
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link to={item.path} style={{
                fontSize: '15px',
                fontWeight: '600',
                color: 'var(--text-color)',
                opacity: 0.9
              }}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: 'inherit' }}>🔍</button>
          <button
            onClick={() => navigate('/login')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: 'inherit' }}
          >👤</button>
          <Link to="/cart" style={{
            background: 'var(--light-gray)',
            border: 'none',
            cursor: 'pointer',
            width: '45px',
            height: '45px',
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
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  background: 'var(--accent-color)',
                  color: 'white',
                  fontSize: '10px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}
              >
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </motion.span>
            )}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
