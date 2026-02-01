import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Registration logic here
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            background: '#fcfcfc'
        }}>
            {/* Left side: Image */}
            <div style={{
                flex: 1,
                background: 'url("https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=1500")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    left: '60px',
                    color: 'white',
                    maxWidth: '400px'
                }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Join the Harvest Community</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Become a part of our growing community of fresh food lovers and local farm supporters.</p>
                </div>
            </div>

            {/* Right side: Form */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        width: '100%',
                        maxWidth: '450px'
                    }}
                >
                    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'var(--primary-color)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            margin: '0 auto 20px auto'
                        }}>
                            F
                        </div>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontFamily: "'Playfair Display', serif",
                            color: '#1a1a1a',
                            marginBottom: '10px'
                        }}>
                            Create Account
                        </h1>
                        <p style={{ color: '#718096' }}>Start your journey with fresh organic produce</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#4a5568' }}>Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    outline: 'none',
                                    fontSize: '15px'
                                }}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#4a5568' }}>Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    outline: 'none',
                                    fontSize: '15px'
                                }}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#4a5568' }}>Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    outline: 'none',
                                    fontSize: '15px'
                                }}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <button type="submit" style={{
                            background: 'var(--primary-color)',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginTop: '10px',
                            boxShadow: '0 10px 20px rgba(44, 95, 45, 0.2)'
                        }}>
                            Create Account
                        </button>
                    </form>

                    <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '14px', color: '#718096' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>Log in here</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
