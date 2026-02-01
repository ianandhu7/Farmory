import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/products?category=${category.id}`} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
        </Link>
    );
};

export default CategoryCard;
