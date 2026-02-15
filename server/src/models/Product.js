const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a product name'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Please provide a product description'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide a product price'],
            min: 0,
        },
        category: {
            type: String,
            required: [true, 'Please provide a product category'],
            enum: ['Livestock Products', 'Vegetables', 'Fruits', 'Grains & Seeds', 'Microgreens', 'Organic Packs'],
        },
        subcategory: {
            type: String,
            required: [true, 'Please provide a product subcategory'],
        },
        images: [
            {
                url: String,
                alt: String,
            },
        ],
        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },
        unit: {
            type: String,
            required: true,
            enum: ['kg', 'lb', 'piece', 'bundle', 'dozen', 'liter', 'pack'],
            default: 'kg',
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        numReviews: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
