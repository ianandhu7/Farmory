import React from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

    const subtotal = getCartTotal();
    const shipping = subtotal > 0 ? 5.00 : 0.00;
    const total = subtotal + shipping;

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#fcfcfc', paddingBottom: '80px' }}>
            <div className="container">
                <h1 style={{ marginBottom: '40px', fontFamily: "'Playfair Display', serif", fontSize: '3rem' }}>Your Bag</h1>

                {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px 0' }}>
                        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛒</div>
                        <h2 style={{ marginBottom: '15px' }}>Your cart is empty</h2>
                        <p style={{ color: '#718096', marginBottom: '30px' }}>Looks like you haven't added anything to your cart yet.</p>
                        <Link to="/products" className="btn btn-primary" style={{ padding: '15px 40px' }}>Shop Fresh Produce</Link>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                        {/* Cart Items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <AnimatePresence>
                                {cart.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '20px',
                                            background: 'white',
                                            padding: '20px',
                                            borderRadius: '24px',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                                            border: '1px solid #f1f5f9'
                                        }}
                                    >
                                        <div style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '16px',
                                            background: '#f8fafc',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img src={item.image} alt={item.name} style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
                                        </div>

                                        <div style={{ flex: 1 }}>
                                            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>{item.category}</span>
                                            <h3 style={{ fontSize: '18px', margin: '4px 0', fontFamily: "'Playfair Display', serif" }}>{item.name}</h3>
                                            <p style={{ fontWeight: '700', color: 'var(--primary-color)' }}>${item.price.toFixed(2)}</p>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f8fafc', padding: '8px 15px', borderRadius: '50px' }}>
                                            <button
                                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', color: '#64748b' }}
                                            >-</button>
                                            <span style={{ fontWeight: '700', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                style={{ border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', color: '#64748b' }}
                                            >+</button>
                                        </div>

                                        <div style={{ width: '100px', textAlign: 'right', fontWeight: '800' }}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            style={{
                                                border: 'none',
                                                background: '#fee2e2',
                                                color: '#ef4444',
                                                width: '35px',
                                                height: '35px',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '18px'
                                            }}
                                        >
                                            ×
                                        </button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Summary */}
                        <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
                            <div style={{
                                background: 'white',
                                padding: '30px',
                                borderRadius: '24px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid #f1f5f9'
                            }}>
                                <h3 style={{ marginBottom: '25px', fontSize: '20px' }}>Order Summary</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                                        <span>Shipping</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div style={{ height: '1px', background: '#f1f5f9', margin: '10px 0' }}></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '800' }}>
                                        <span>Total</span>
                                        <span style={{ color: 'var(--primary-color)' }}>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', marginTop: '30px', padding: '15px' }}>
                                    Proceed to Checkout
                                </Link>

                                <Link to="/products" style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    marginTop: '20px',
                                    fontSize: '14px',
                                    color: '#64748b',
                                    fontWeight: '600'
                                }}>
                                    ← Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
