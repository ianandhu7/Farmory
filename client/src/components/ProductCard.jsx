import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            style={{
                background: 'white',
                borderRadius: '24px',
                padding: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}
        >
            {/* Badge */}
            {product.isOrganic && (
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: '#e8f5e9',
                    color: '#2c5f2d',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '11px',
                    fontWeight: '700',
                    zIndex: 2,
                    textTransform: 'uppercase'
                }}>
                    Organic
                </div>
            )}

            {/* Image Container */}
            <Link to={`/product/${product.id}`} style={{ display: 'block' }}>
                <div style={{
                    width: '100%',
                    height: '220px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#f9f9f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img
                        src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop'}
                        alt={product.name}
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop';
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                        }}
                        className="product-image"
                    />
                </div>
            </Link>

            {/* Info */}
            <div style={{ padding: '5px' }}>
                <span style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {product.subcategory || product.category}
                </span>
                <Link to={`/product/${product.id}`}>
                    <h3 style={{
                        fontSize: '18px',
                        margin: '5px 0 10px 0',
                        color: '#1a1a1a',
                        fontFamily: "'Playfair Display', serif",
                        cursor: 'pointer'
                    }}>
                        {product.name}
                    </h3>
                </Link>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <div>
                        <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-color)' }}>
                            ₹{product.price}
                        </span>
                        <span style={{ fontSize: '13px', color: '#94a3b8', marginLeft: '4px' }}>
                            / {product.unit || 'kg'}
                        </span>
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            boxShadow: '0 4px 10px rgba(44, 95, 45, 0.3)'
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
