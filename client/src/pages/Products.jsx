import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Meat', 'Grains'];

    const products = [
        { id: 1, name: 'Fresh Organic Kale', price: 4.50, category: 'Vegetables', isOrganic: true, image: 'https://images.unsplash.com/photo-1524179091875-9057f583f53a?auto=format&fit=crop&q=80&w=400' },
        { id: 2, name: 'Red Gala Apples', price: 3.20, category: 'Fruits', isOrganic: true, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb?auto=format&fit=crop&q=80&w=400' },
        { id: 3, name: 'Farm Fresh Eggs', price: 5.90, category: 'Dairy', isOrganic: false, image: 'https://images.unsplash.com/photo-1582722872445-44ad5f73448b?auto=format&fit=crop&q=80&w=400' },
        { id: 4, name: 'Grass-fed Beef', price: 12.00, category: 'Meat', isOrganic: true, image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae0976?auto=format&fit=crop&q=80&w=400' },
        { id: 5, name: 'Whole Wheat Grains', price: 2.50, category: 'Grains', isOrganic: true, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400' },
        { id: 6, name: 'Sun-ripened Tomatoes', price: 3.80, category: 'Vegetables', isOrganic: true, image: 'https://images.unsplash.com/photo-1546473427-e1ad0554817a?auto=format&fit=crop&q=80&w=400' },
        { id: 7, name: 'Natural Honey', price: 8.50, category: 'Dairy', isOrganic: true, image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=400' },
        { id: 8, name: 'Organic Bananas', price: 2.90, category: 'Fruits', isOrganic: true, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400' },
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="products-page" style={{ paddingTop: '100px', minHeight: '100vh', background: '#fcfcfc' }}>
            {/* Page Header */}
            <div className="products-header" style={{
                background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1464226184884-fa280b670b04?auto=format&fit=crop&q=80&w=1500")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '80px 0',
                textAlign: 'center',
                color: 'white',
                marginBottom: '50px'
            }}>
                <div className="container">
                    <h1>Our Fresh Harvest</h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
                        Browse our curated selection of 100% organic and fresh products directly from local farms.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* Filters */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    marginBottom: '50px',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '10px 25px',
                                borderRadius: '50px',
                                border: '1px solid',
                                borderColor: activeCategory === cat ? 'var(--primary-color)' : '#e2e8f0',
                                background: activeCategory === cat ? 'var(--primary-color)' : 'white',
                                color: activeCategory === cat ? 'white' : '#4a5568',
                                cursor: 'pointer',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                boxShadow: activeCategory === cat ? '0 4px 12px rgba(44, 95, 45, 0.2)' : 'none'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '15px', color: '#718096' }}>
                        Showing <strong>{filteredProducts.length}</strong> products
                    </p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px', color: '#718096' }}>Sort by:</span>
                        <select style={{ padding: '8px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none' }}>
                            <option>Default</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px',
                    marginBottom: '80px'
                }}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
