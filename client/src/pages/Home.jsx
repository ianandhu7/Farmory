import React from 'react';
import { motion } from 'framer-motion';
import ImageSequence from '../components/ImageSequence';

const Section = ({ children, className, style }) => (
    <section className={`section ${className || ''}`} style={style}>
        <div className="container">{children}</div>
    </section>
);

const Home = () => {
    return (
        <div className="home-page">

            <section className="hero-section" style={{
                position: 'relative',
                height: '100vh',
                backgroundImage: "url('/assets/banners/farmer-hero.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center 10%',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#3e362e',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Hero content is in the background image; duplicate header is hidden by the navbar */}
                </div>
            </section>

            {/* Featured Categories */}
            <Section className="categories-section">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ color: '#1a1a1a' }}>Shop by Category</h2>
                    <p>Freshness you can trust, quality you can taste.</p>
                </div>

                <div className="categories-grid" style={{
                    display: 'grid',
                    gap: '30px'
                }}>
                    {[
                        { name: 'Fresh Vegetables', icon: '🥦', color: '#e8f5e9' },
                        { name: 'Organic Fruits', icon: '🍎', color: '#fff3e0' },
                        { name: 'Dairy & Eggs', icon: '🥛', color: '#e3f2fd' },
                        { name: 'Quality Meats', icon: '🥩', color: '#fce4ec' }
                    ].map((cat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            style={{
                                background: cat.color,
                                padding: '40px 20px',
                                borderRadius: '16px',
                                textAlign: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ fontSize: '50px', marginBottom: '20px' }}>{cat.icon}</div>
                            <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>{cat.name}</h4>
                            <span style={{ fontSize: '14px', color: 'var(--primary-color)', fontWeight: '500' }}>Shop Now →</span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Special Offer */}
            <Section className="offer-section" style={{ padding: '0' }}>
                <div className="offer-banner" style={{
                    background: 'var(--primary-color)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    color: 'white',
                    position: 'relative'
                }}>
                    <div className="offer-content" style={{ flex: 1 }}>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', fontSize: '12px' }}>LIMITED OFFER</span>
                        <h2 className="offer-title" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Get 20% Off On Your <br /> First Order
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>
                            Use code: <strong>FARMORY20</strong> at checkout. Valid for new customers only.
                        </p>
                        <button style={{ background: 'white', color: 'var(--primary-color)', padding: '15px 40px', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
                            Claim Offer
                        </button>
                    </div>

                    <div className="offer-video-container" style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <ImageSequence />
                    </div>
                </div>
            </Section>

        </div>
    );
};

export default Home;
