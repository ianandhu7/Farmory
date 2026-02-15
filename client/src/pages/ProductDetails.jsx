import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);

    // Mock products data (should ideally come from a central store or API)
    const products = [
        // Livestock
        { id: 101, name: 'Fresh Chicken', price: 280, category: 'Livestock Products', subcategory: 'Fresh Meat', isOrganic: true, unit: 'kg', stock: 15, description: 'Naturally raised, growth-hormone free fresh chicken. Processed under hygienic conditions to ensure the highest quality meat for your family.', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=600&auto=format&fit=crop' },
        { id: 102, name: 'Farm Eggs', price: 120, category: 'Livestock Products', subcategory: 'Eggs', isOrganic: true, unit: 'dozen', stock: 50, description: 'Fresh farm eggs from pasture-raised hens. Rich in nutrients and perfect for your daily breakfast.', image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?q=80&w=600&auto=format&fit=crop' },
        { id: 103, name: 'Fresh Cow Milk', price: 60, category: 'Livestock Products', subcategory: 'Milk & Dairy', isOrganic: true, unit: 'liter', stock: 40, description: 'Pure, antibiotic-free cow milk delivered fresh from our dairy farm to your doorstep.', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop' },

        // Vegetables
        { id: 201, name: 'Organic Spinach', price: 40, category: 'Vegetables', subcategory: 'Leafy Greens', isOrganic: true, unit: 'bundle', stock: 25, description: 'Nutrient-rich Organic Spinach, harvested fresh from our fields. No pesticides or chemical fertilizers used.', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=600&auto=format&fit=crop' },
        { id: 202, name: 'Fresh Kale', price: 80, category: 'Vegetables', subcategory: 'Leafy Greens', isOrganic: true, unit: 'kg', stock: 20, description: 'Crisp and nutrient-dense organic kale, perfect for smoothies, salads, or healthy chips.', image: 'https://images.unsplash.com/photo-1524179091875-9057f583f53a?q=80&w=600&auto=format&fit=crop' },
        { id: 203, name: 'Broccoli', price: 120, category: 'Vegetables', subcategory: 'Exotic Vegetables', isOrganic: true, unit: 'kg', stock: 15, description: 'Freshly harvested organic broccoli florets, rich in fiber and vitamins.', image: 'https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?q=80&w=600&auto=format&fit=crop' },
        { id: 204, name: 'Roma Tomatoes', price: 45, category: 'Vegetables', subcategory: 'Regular Vegetables', isOrganic: true, unit: 'kg', stock: 30, description: 'Plump and juicy organic Roma tomatoes, ideal for salads, sauces, and everyday cooking.', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop' },
        { id: 205, name: 'Pumpkin', price: 35, category: 'Vegetables', subcategory: 'Regular Vegetables', isOrganic: true, unit: 'kg', stock: 10, description: 'Grown naturally in our fields, this sweet and versatile pumpkin is perfect for soups and curries.', image: 'https://images.unsplash.com/photo-1570586437263-162f27db1bef?q=80&w=600&auto=format&fit=crop' },

        // Fruits
        { id: 301, name: 'Alphonso Mango', price: 600, category: 'Fruits', subcategory: 'Seasonal Fruits', isOrganic: true, unit: 'dozen', stock: 12, description: 'The King of Mangoes. Sweet, pulpy, and incredibly flavorful Alphonso mangoes, handpicked for perfection.', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop' },
        { id: 302, name: 'Fresh Grapes', price: 120, category: 'Fruits', subcategory: 'Seasonal Fruits', isOrganic: true, unit: 'kg', stock: 25, description: 'Sweet and seedless organic grapes, harvested at the peak of ripeness for maximum flavor.', image: 'https://images.unsplash.com/photo-1537640538966-79f369b41e8c?q=80&w=600&auto=format&fit=crop' },
        { id: 305, name: 'Nendran Banana', price: 80, category: 'Fruits', subcategory: 'Seasonal Fruits', isOrganic: true, unit: 'kg', stock: 40, description: 'High-quality Nendran bananas, perfect for making traditional snacks or eating fresh. Rich in dietary fiber and essential nutrients.', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=600&auto=format&fit=crop' },
        { id: 303, name: 'Blueberries', price: 450, category: 'Fruits', subcategory: 'Exotic Fruits', isOrganic: true, unit: 'pack', stock: 8, description: 'Fresh, antioxidant-rich exotic blueberries, imported directly for premium quality.', image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600&auto=format&fit=crop' },
        { id: 304, name: 'Avocado', price: 250, category: 'Fruits', subcategory: 'Exotic Fruits', isOrganic: true, unit: 'piece', stock: 15, description: 'Creamy and ripe organic avocados, perfect for toast, salads, or guacamole.', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=600&auto=format&fit=crop' },

        // Grains & Seeds
        { id: 401, name: 'Chia Seeds', price: 350, category: 'Grains & Seeds', subcategory: 'Seeds', isOrganic: true, unit: 'kg', stock: 20, description: 'Organic chia seeds, a superfood rich in Omega-3, perfect for puddings and smoothies.', image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=600&auto=format&fit=crop' },
        { id: 402, name: 'Quinoa', price: 480, category: 'Grains & Seeds', subcategory: 'Pulses', isOrganic: true, unit: 'kg', stock: 15, description: 'High-protein organic quinoa, a healthy and versatile alternative to rice.', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop' },
        { id: 403, name: 'Chickpeas', price: 140, category: 'Grains & Seeds', subcategory: 'Pulses', isOrganic: true, unit: 'kg', stock: 30, description: 'Naturally grown organic chickpeas, high in protein and perfect for curries and hummus.', image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=600&auto=format&fit=crop' },

        // Microgreens
        { id: 501, name: 'Sunflower Microgreens', price: 150, category: 'Microgreens', subcategory: 'Fresh Microgreens', isOrganic: true, unit: 'pack', stock: 20, description: 'Fresh, crunchy sunflower microgreens packed with vitamins and minerals. Perfect for salads.', image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=600&auto=format&fit=crop' },
        { id: 502, name: 'Growing Kit - Basil', price: 850, category: 'Microgreens', subcategory: 'Indoor Growing Kits', isOrganic: true, unit: 'kit', stock: 10, description: 'Complete indoor growing kit for fresh Basil microgreens. Includes organic seeds and substrate.', image: 'https://images.unsplash.com/photo-1620127807580-990a42e3962d?q=80&w=600&auto=format&fit=crop' },

        // Organic Packs
        { id: 601, name: 'Weekly Farm Box', price: 1200, category: 'Organic Packs', subcategory: 'Combo Offers', isOrganic: true, unit: 'box', stock: 10, description: 'A curated selection of our best seasonal vegetables and fruits delivered to your door weekly.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop' },
    ];

    useEffect(() => {
        const found = products.find(p => p.id === parseInt(id));
        if (found) {
            setProduct(found);
        } else {
            // If not found in mock, just use a placeholder
            setProduct(products[0]);
        }
    }, [id]);

    if (!product) return <div style={{ paddingTop: '150px', textAlign: 'center' }}>Loading...</div>;

    const handleWhatsAppOrder = () => {
        const message = `Hello RAECH HEL! I would like to order ${quantity} ${product.unit} of ${product.name}. Total Price: ₹${product.price * quantity}`;
        window.open(`https://wa.me/911234567890?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="product-details-page" style={{ paddingTop: '120px', minHeight: '100vh', background: '#fff' }}>
            <div className="container">
                <button
                    onClick={() => navigate(-1)}
                    style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '500' }}
                >
                    ← Back to Shop
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>
                    {/* Left: Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ background: '#f9f9f9', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
                        />
                    </motion.div>

                    {/* Right: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span style={{ color: 'var(--primary-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px' }}>
                            {product.category}
                        </span>
                        <h1 style={{ fontSize: '3rem', margin: '15px 0', color: '#1a1a1a' }}>{product.name}</h1>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
                            <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-color)' }}>
                                ₹{product.price}
                            </span>
                            <span style={{ background: '#f0f0f0', padding: '5px 15px', borderRadius: '50px', fontSize: '14px', color: '#666' }}>
                                Per {product.unit}
                            </span>
                        </div>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#666', marginBottom: '30px' }}>
                            {product.description}
                        </p>

                        <div style={{ marginBottom: '30px' }}>
                            <span style={{ display: 'block', fontWeight: '600', marginBottom: '10px' }}>
                                Availability: <span style={{ color: product.stock > 0 ? '#2c5f2d' : '#e53e3e' }}>
                                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
                                </span>
                            </span>
                        </div>

                        {/* Quantity and Actions */}
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '50px', padding: '5px 15px' }}>
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    style={{ background: 'none', border: 'none', fontSize: '20px', padding: '10px', cursor: 'pointer' }}
                                >-</button>
                                <span style={{ padding: '0 20px', fontWeight: 'bold' }}>{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    style={{ background: 'none', border: 'none', fontSize: '20px', padding: '10px', cursor: 'pointer' }}
                                >+</button>
                            </div>

                            <button
                                onClick={() => addToCart({ ...product, quantity })}
                                className="btn btn-primary"
                                style={{ flex: 1, minWidth: '200px', padding: '20px' }}
                            >
                                Add to Cart
                            </button>
                        </div>

                        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

                        {/* Extra Actions */}
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <button
                                onClick={handleWhatsAppOrder}
                                style={{
                                    flex: 1,
                                    background: '#25D366',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px',
                                    borderRadius: '12px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}
                            >
                                💬 Order on WhatsApp
                            </button>
                            <button
                                style={{
                                    padding: '15px 25px',
                                    borderRadius: '12px',
                                    border: '1px solid #ddd',
                                    background: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                ❤️ Wishlist
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Why Choose Us Micro-section */}
            <div style={{ background: '#f9f9f9', marginTop: '80px', padding: '60px 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '30px', marginBottom: '10px' }}>📦</div>
                        <h4 style={{ marginBottom: '5px' }}>Fast Delivery</h4>
                        <p style={{ fontSize: '14px' }}>Within 24 hours</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '30px', marginBottom: '10px' }}>🔐</div>
                        <h4 style={{ marginBottom: '5px' }}>Secure Payment</h4>
                        <p style={{ fontSize: '14px' }}>100% secure checkout</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '30px', marginBottom: '10px' }}>🌱</div>
                        <h4 style={{ marginBottom: '5px' }}>100% Organic</h4>
                        <p style={{ fontSize: '14px' }}>Fresh from farm</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '30px', marginBottom: '10px' }}>💵</div>
                        <h4 style={{ marginBottom: '5px' }}>COD Option</h4>
                        <p style={{ fontSize: '14px' }}>Pay on delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
