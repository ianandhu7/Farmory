import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" style={{
            background: '#f9f9f9',
            borderTop: '1px solid #eee',
            padding: '80px 0 30px',
            marginTop: 'auto',
            color: '#1a1a1a'
        }}>
            <div className="container">
                <div className="footer-grid" style={{ display: 'grid', gap: '40px', marginBottom: '60px' }}>
                    {/* Brand */}
                    <div className="footer-brand">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <div style={{ width: '30px', height: '30px', background: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>F</div>
                            <h3 style={{ fontSize: '24px', fontFamily: "'Playfair Display', serif" }}>Farmory</h3>
                        </div>
                        <p style={{ color: '#666', lineHeight: '1.6', maxWidth: '300px' }}>
                            We bring the season's best produce from local sustainable farms directly to your doorstep. Freshness guaranteed.
                        </p>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                            {/* Social Placeholders */}
                            {['Fb', 'Tw', 'Ig', 'Li'].map(s => (
                                <div key={s} style={{ width: '35px', height: '35px', background: 'white', border: '1px solid #ddd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', cursor: 'pointer' }}>{s}</div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 style={{ marginBottom: '25px', fontSize: '16px', fontWeight: 'bold' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {['Home', 'Shop', 'Our Story', 'Blog', 'Contact'].map(item => (
                                <li key={item}><Link to="#" style={{ color: '#555', fontSize: '14px' }}>{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="footer-help">
                        <h4 style={{ marginBottom: '25px', fontSize: '16px', fontWeight: 'bold' }}>Help & Support</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {['FAQ', 'Shipping Info', 'Returns', 'Privacy Policy', 'Terms'].map(item => (
                                <li key={item}><Link to="#" style={{ color: '#555', fontSize: '14px' }}>{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-subscribe">
                        <h4 style={{ marginBottom: '25px', fontSize: '16px', fontWeight: 'bold' }}>Subscribe</h4>
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Join our community and get 10% off your first order.</p>
                        <div className="subscribe-form" style={{ display: 'flex' }}>
                            <input type="email" placeholder="Your email address" style={{
                                padding: '12px 15px',
                                border: '1px solid #ddd',
                                borderRadius: '4px 0 0 4px',
                                outline: 'none',
                                flex: 1
                            }} />
                            <button style={{
                                background: 'var(--primary-color)',
                                color: 'white',
                                border: 'none',
                                padding: '0 20px',
                                borderRadius: '0 4px 4px 0',
                                cursor: 'pointer'
                            }}>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom" style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid #eee', color: '#999', fontSize: '13px' }}>
                    <p>&copy; 2026 Farmory Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
