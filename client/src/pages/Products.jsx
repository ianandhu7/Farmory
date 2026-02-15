import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryFromQuery = queryParams.get('category');

    const [activeCategory, setActiveCategory] = useState(categoryFromQuery || 'All');
    const [activeSubcategory, setActiveSubcategory] = useState('All');

    const categories = {
        'All': [],
        'Livestock Products': ['Fresh Meat', 'Eggs', 'Milk & Dairy'],
        'Vegetables': ['Leafy Greens', 'Exotic Vegetables', 'Regular Vegetables'],
        'Fruits': ['Seasonal Fruits', 'Exotic Fruits'],
        'Grains & Seeds': ['Seeds', 'Pulses', 'Spices'],
        'Microgreens': ['Fresh Microgreens', 'Indoor Growing Kits'],
        'Organic Packs': ['Combo Offers']
    };

    const products = [
        // Livestock
        { id: 101, name: 'Fresh Chicken', price: 280, category: 'Livestock Products', subcategory: 'Fresh Meat', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=600&auto=format&fit=crop' },
        { id: 102, name: 'Farm Eggs', price: 120, category: 'Livestock Products', subcategory: 'Eggs', isOrganic: true, unit: 'dozen', image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?q=80&w=600&auto=format&fit=crop' },
        { id: 103, name: 'Fresh Cow Milk', price: 60, category: 'Livestock Products', subcategory: 'Milk & Dairy', isOrganic: true, unit: 'liter', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop' },

        // Vegetables
        { id: 201, name: 'Organic Spinach', price: 40, category: 'Vegetables', subcategory: 'Leafy Greens', isOrganic: true, unit: 'bundle', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=600&auto=format&fit=crop' },
        { id: 202, name: 'Fresh Kale', price: 80, category: 'Vegetables', subcategory: 'Leafy Greens', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1524179091875-9057f583f53a?q=80&w=600&auto=format&fit=crop' },
        { id: 203, name: 'Broccoli', price: 120, category: 'Vegetables', subcategory: 'Exotic Vegetables', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?q=80&w=600&auto=format&fit=crop' },
        { id: 204, name: 'Roma Tomatoes', price: 45, category: 'Vegetables', subcategory: 'Regular Vegetables', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop' },
        { id: 205, name: 'Pumpkin', price: 35, category: 'Vegetables', subcategory: 'Regular Vegetables', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1570586437263-162f27db1bef?q=80&w=600&auto=format&fit=crop' },

        // Fruits
        { id: 301, name: 'Alphonso Mango', price: 600, category: 'Fruits', subcategory: 'Seasonal Fruits', isOrganic: true, unit: 'dozen', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop' },
        { id: 302, name: 'Fresh Grapes', price: 120, category: 'Fruits', subcategory: 'Seasonal Fruits', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1537640538966-79f369b41e8c?q=80&w=600&auto=format&fit=crop' },
        { id: 303, name: 'Blueberries', price: 450, category: 'Fruits', subcategory: 'Exotic Fruits', isOrganic: true, unit: 'pack', image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600&auto=format&fit=crop' },
        { id: 304, name: 'Avocado', price: 250, category: 'Fruits', subcategory: 'Exotic Fruits', isOrganic: true, unit: 'piece', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=600&auto=format&fit=crop' },
        { id: 305, name: 'Nendran Banana', price: 80, category: 'Fruits', subcategory: 'Seasonal Fruits', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=600&auto=format&fit=crop' },

        // Grains & Seeds
        { id: 401, name: 'Chia Seeds', price: 350, category: 'Grains & Seeds', subcategory: 'Seeds', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=600&auto=format&fit=crop' },
        { id: 402, name: 'Quinoa', price: 480, category: 'Grains & Seeds', subcategory: 'Pulses', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop' },
        { id: 403, name: 'Chickpeas', price: 140, category: 'Grains & Seeds', subcategory: 'Pulses', isOrganic: true, unit: 'kg', image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=600&auto=format&fit=crop' },

        // Microgreens
        { id: 501, name: 'Sunflower Microgreens', price: 150, category: 'Microgreens', subcategory: 'Fresh Microgreens', isOrganic: true, unit: 'pack', image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=600&auto=format&fit=crop' },
        { id: 502, name: 'Growing Kit - Basil', price: 850, category: 'Microgreens', subcategory: 'Indoor Growing Kits', isOrganic: true, unit: 'kit', image: 'https://images.unsplash.com/photo-1620127807580-990a42e3962d?q=80&w=600&auto=format&fit=crop' },

        // Organic Packs
        { id: 601, name: 'Weekly Farm Box', price: 1200, category: 'Organic Packs', subcategory: 'Combo Offers', isOrganic: true, unit: 'box', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop' },
    ];

    useEffect(() => {
        if (categoryFromQuery) {
            setActiveCategory(categoryFromQuery);
            setActiveSubcategory('All');
        }
    }, [categoryFromQuery]);

    const filteredProducts = products.filter(p => {
        const catMatch = activeCategory === 'All' || p.category === activeCategory;
        const subMatch = activeSubcategory === 'All' || p.subcategory === activeSubcategory;
        return catMatch && subMatch;
    });

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setActiveSubcategory('All');
    };

    return (
        <div className="products-page" style={{ paddingTop: '100px', minHeight: '100vh', background: '#fcfcfc' }}>
            <div className="container">
                <div style={{ padding: '40px 0', borderBottom: '1px solid #eee', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Products</h1>
                    <p style={{ color: '#666' }}>Fresh, organic, and locally sourced items just for you.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px' }}>
                    {/* Sidebar Filters */}
                    <aside className="filters-sidebar">
                        <div style={{ marginBottom: '30px' }}>
                            <h4 style={{ marginBottom: '15px', color: '#1a1a1a' }}>Categories</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {Object.keys(categories).map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryChange(cat)}
                                        style={{
                                            textAlign: 'left',
                                            padding: '8px 15px',
                                            borderRadius: '8px',
                                            background: activeCategory === cat ? 'var(--primary-color)' : 'transparent',
                                            color: activeCategory === cat ? 'white' : '#4a5568',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontWeight: activeCategory === cat ? '700' : '500',
                                            fontSize: '15px',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {activeCategory !== 'All' && categories[activeCategory].length > 0 && (
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '15px', color: '#1a1a1a' }}>Subcategories</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <button
                                        onClick={() => setActiveSubcategory('All')}
                                        style={{
                                            textAlign: 'left',
                                            padding: '8px 15px',
                                            borderRadius: '8px',
                                            background: activeSubcategory === 'All' ? 'rgba(44, 95, 45, 0.1)' : 'transparent',
                                            color: activeSubcategory === 'All' ? 'var(--primary-color)' : '#4a5568',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontWeight: '500',
                                            fontSize: '14px'
                                        }}
                                    >
                                        All {activeCategory}
                                    </button>
                                    {categories[activeCategory].map(sub => (
                                        <button
                                            key={sub}
                                            onClick={() => setActiveSubcategory(sub)}
                                            style={{
                                                textAlign: 'left',
                                                padding: '8px 15px',
                                                borderRadius: '8px',
                                                background: activeSubcategory === sub ? 'rgba(44, 95, 45, 0.1)' : 'transparent',
                                                color: activeSubcategory === sub ? 'var(--primary-color)' : '#4a5568',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontWeight: '500',
                                                fontSize: '14px'
                                            }}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>

                    {/* Product List */}
                    <main>
                        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ color: '#718096' }}>Showing <strong>{filteredProducts.length}</strong> products in {activeCategory}</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <select style={{ padding: '8px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white' }}>
                                    <option>Newest First</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                            gap: '25px',
                            marginBottom: '60px'
                        }}>
                            <AnimatePresence mode='popLayout'>
                                {filteredProducts.map(product => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredProducts.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '100px 0' }}>
                                <div style={{ fontSize: '50px', marginBottom: '20px' }}>🔍</div>
                                <h3>No products found</h3>
                                <p>Try adjusting your filters or category selection.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Products;
