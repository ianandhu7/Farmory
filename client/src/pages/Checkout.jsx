import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { cart, getCartTotal } = useCart();
    const [step, setStep] = useState(1);

    const subtotal = getCartTotal();
    const shipping = 5.00;
    const total = subtotal + shipping;

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#fcfcfc', paddingBottom: '80px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '50px' }}>

                    {/* Left: Checkout Form */}
                    <div>
                        <h1 style={{ marginBottom: '40px', fontFamily: "'Playfair Display', serif", fontSize: '2.5rem' }}>Checkout</h1>

                        {/* Steps Indicator */}
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
                            {['Shipping', 'Payment', 'Review'].map((s, i) => (
                                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        background: step > i ? 'var(--primary-color)' : (step === i + 1 ? 'var(--primary-color)' : '#e2e8f0'),
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}>
                                        {step > i ? '✓' : i + 1}
                                    </div>
                                    <span style={{ fontWeight: step === i + 1 ? '700' : '500', color: step === i + 1 ? '#1a1a1a' : '#94a3b8' }}>{s}</span>
                                    {i < 2 && <div style={{ width: '40px', height: '1px', background: '#e2e8f0' }}></div>}
                                </div>
                            ))}
                        </div>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '30px', background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                            {step === 1 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <h3 style={{ marginBottom: '10px' }}>Shipping Information</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>First Name</label>
                                            <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>Last Name</label>
                                            <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>Address</label>
                                        <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>City</label>
                                            <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>State</label>
                                            <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>ZIP</label>
                                            <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        </div>
                                    </div>
                                    <button type="button" onClick={() => setStep(2)} className="btn btn-primary" style={{ marginTop: '20px' }}>Continue to Payment</button>
                                </motion.div>
                            )}
                            {step === 2 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <h3 style={{ marginBottom: '10px' }}>Payment Method</h3>
                                    <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid var(--primary-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <input type="radio" checked readOnly style={{ accentColor: 'var(--primary-color)' }} />
                                        <span style={{ fontWeight: '600' }}>Credit / Debit Card</span>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>Card Number</label>
                                        <input type="text" placeholder="xxxx xxxx xxxx xxxx" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>Expiry</label>
                                            <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>CVC</label>
                                            <input type="text" placeholder="xxx" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <button type="button" onClick={() => setStep(1)} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                                        <button type="button" onClick={() => setStep(3)} className="btn btn-primary" style={{ flex: 1 }}>Review Order</button>
                                    </div>
                                </motion.div>
                            )}
                            {step === 3 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚜</div>
                                    <h3 style={{ marginBottom: '10px' }}>Ready to complete your order?</h3>
                                    <p style={{ color: '#64748b', marginBottom: '30px' }}>By clicking complete, you agree to our terms of service and and we will start preparing your fresh items!</p>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <button type="button" onClick={() => setStep(2)} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                                        <button type="button" className="btn btn-primary" style={{ flex: 1 }}>Complete Order</button>
                                    </div>
                                </motion.div>
                            )}
                        </form>
                    </div>

                    {/* Right: Order Details */}
                    <div>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                            <h3 style={{ marginBottom: '25px', fontSize: '20px' }}>In Your Bag</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '400px', overflowY: 'auto', marginBottom: '25px' }}>
                                {cart.map(item => (
                                    <div key={item.id} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                        <div style={{ width: '60px', height: '60px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={item.image} style={{ width: '70%', height: 'auto' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '14px', marginBottom: '2px' }}>{item.name}</h4>
                                            <p style={{ fontSize: '13px', color: '#64748b' }}>Qty: {item.quantity}</p>
                                        </div>
                                        <span style={{ fontWeight: '700' }}>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#64748b' }}>
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#64748b' }}>
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '800', marginTop: '10px' }}>
                                    <span>Total</span>
                                    <span style={{ color: 'var(--primary-color)' }}>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
