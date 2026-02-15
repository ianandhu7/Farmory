import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Section = ({ children, className, style, title, subtitle }) => (
    <section className={`section ${className || ''}`} style={style}>
        <div className="container">
            {(title || subtitle) && (
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    {title && <h2 style={{ color: '#1a1a1a', marginBottom: '15px' }}>{title}</h2>}
                    {subtitle && <p style={{ maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>}
                </div>
            )}
            {children}
        </div>
    </section>
);

const Home = () => {
    const navigate = useNavigate();
    const bestSellers = [
        { id: 101, name: 'Fresh Chicken', price: 280, category: 'Livestock Products', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=600&auto=format&fit=crop', isOrganic: true, unit: 'kg' },
        { id: 102, name: 'Farm Eggs', price: 120, category: 'Livestock Products', image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?q=80&w=600&auto=format&fit=crop', isOrganic: true, unit: 'dozen' },
        { id: 201, name: 'Organic Spinach', price: 40, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=600&auto=format&fit=crop', isOrganic: true, unit: 'bundle' },
        { id: 103, name: 'Fresh Cow Milk', price: 60, category: 'Livestock Products', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop', isOrganic: true, unit: 'liter' },
    ];

    const freshPicks = [
        { id: 204, name: 'Roma Tomatoes', price: 45, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop', isOrganic: true, unit: 'kg' },
        { id: 305, name: 'Nendran Banana', price: 80, category: 'Fruits', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=600&auto=format&fit=crop', isOrganic: true, unit: 'kg' },
        { id: 501, name: 'Sunflower Microgreens', price: 150, category: 'Microgreens', image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=600&auto=format&fit=crop', isOrganic: true, unit: 'pack' },
    ];

    return (
        <div className="home-page">
            {/* 1. Banner */}
            <section className="hero-section" style={{
                position: 'relative',
                height: '100vh',
                backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/assets/banners/farmer-hero.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                textAlign: 'left',
                paddingTop: '80px'
            }}>
                <div className="container" style={{ height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* 1. Desktop Clickable Overlays (Hidden on Mobile) */}
                    <div className="desktop-only" style={{
                        position: 'absolute',
                        top: '65%',
                        left: '42%',
                        display: 'flex',
                        gap: '20px',
                        transform: 'translateX(-50%)',
                        zIndex: 5
                    }}>
                        <div
                            onClick={() => navigate('/products')}
                            style={{ width: '180px', height: '55px', cursor: 'pointer' }}
                            title="Shop Now"
                        />
                        <div
                            onClick={() => navigate('/about')}
                            style={{ width: '220px', height: '55px', cursor: 'pointer' }}
                            title="View Producers"
                        />
                    </div>

                    {/* 2. Mobile Visible Buttons (Hidden on Desktop) */}
                    <div className="mobile-only" style={{
                        flexDirection: 'column',
                        gap: '15px',
                        width: '100%',
                        padding: '0 20px',
                        marginTop: '150px'
                    }}>
                        <button
                            onClick={() => navigate('/products')}
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: '700' }}
                        >
                            SHOP NOW
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="btn btn-outline"
                            style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: '700', borderColor: 'white', color: 'white' }}
                        >
                            VIEW PRODUCERS
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Categories Section */}
            <Section title="Shop by Category" subtitle="Explore our wide range of farm-fresh organic products across various categories.">
                <div className="categories-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px'
                }}>
                    {[
                        { name: 'Vegetables', icon: '🥦', color: '#e8f5e9', path: '/products?category=Vegetables' },
                        { name: 'Fruits', icon: '🍎', color: '#fff3e0', path: '/products?category=Fruits' },
                        { name: 'Meat', icon: '🥩', color: '#fce4ec', path: '/products?category=Livestock Products' },
                        { name: 'Dairy', icon: '🥛', color: '#e3f2fd', path: '/products?category=Livestock Products' },
                        { name: 'Seeds', icon: '🌾', color: '#f5f5f5', path: '/products?category=Grains & Seeds' },
                        { name: 'Microgreens', icon: '🌱', color: '#f1f8e9', path: '/products?category=Microgreens' }
                    ].map((cat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                            style={{
                                background: cat.color,
                                padding: '40px 20px',
                                borderRadius: '24px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ fontSize: '48px', marginBottom: '20px' }}>{cat.icon}</div>
                            <h4 style={{ fontSize: '20px', marginBottom: '8px', color: '#333' }}>{cat.name}</h4>
                            <span style={{ fontSize: '14px', color: 'var(--primary-color)', fontWeight: '600' }}>Explore →</span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* 3. Best Sellers */}
            <Section title="Best Sellers" subtitle="Our most loved products picked fresh for you every single day." style={{ background: '#f9f9f9' }}>
                <div className="products-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {bestSellers.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <button onClick={() => navigate('/products')} className="btn btn-outline">View All Products</button>
                </div>
            </Section>

            {/* 4. Why Choose Us */}
            <Section title="Why Choose RAECH HEL?" subtitle="We take pride in delivering the highest quality organic produce with sustainable farming practices.">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {[
                        { title: '100% Organic', desc: 'No pesticides, no chemicals. Only pure, natural farming for your health.', icon: '🛡️' },
                        { title: 'Farm Fresh', desc: 'Harvested daily and delivered within 24 hours to preserve nutrients.', icon: '🚜' },
                        { title: 'Direct from Farm', desc: 'Cutting out middlemen to ensure fair prices for you and our farmers.', icon: '🏠' }
                    ].map((item, i) => (
                        <div key={i} style={{
                            textAlign: 'center',
                            padding: '40px',
                            background: 'white',
                            borderRadius: '24px',
                            border: '1px solid #eee'
                        }}>
                            <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.icon}</div>
                            <h3 style={{ marginBottom: '15px' }}>{item.title}</h3>
                            <p style={{ color: '#666' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5. Featured Products (Microgreens) */}
            <Section title="Premium Featured" subtitle="Discover our premium range of microgreens and specialty organic packs." style={{ background: 'var(--primary-color)', color: 'white' }}>
                <div className="flex-stack-mobile" style={{
                    gap: '40px',
                    alignItems: 'center'
                }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px' }}>Unlock the Power of Microgreens</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.8' }}>
                            Microgreens are packed with up to 40 times more nutrients than their mature counterparts. Perfect for salads, smoothies, and garnishes. Our indoor growing kits let you grow them fresh at home!
                        </p>
                        <ul style={{ marginBottom: '40px' }}>
                            {['Nutrient Dense', 'Grown Indoors', 'Chemical Free', 'Flavor Intensive'].map((point, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                    <span style={{ color: 'var(--accent-color)' }}>✓</span> {point}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => navigate('/products?category=Microgreens')} className="btn" style={{ background: 'white', color: 'var(--primary-color)' }}>Shop Premium Now</button>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1592394533824-9440e5d68530?q=80&w=800&auto=format&fit=crop"
                            alt="Fresh Harvest"
                            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </Section>

            {/* Subscription / Today's Fresh Picks section */}
            <Section title="Today's Fresh Picks" subtitle="The absolute best quality items harvested just hours ago.">
                <div className="products-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {freshPicks.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Section>

        </div>
    );
};

export default Home;
