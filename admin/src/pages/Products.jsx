import React from 'react';

const Products = () => {
    return (
        <div className="admin-products">
            <h1>Manage Products</h1>
            <button className="btn-add">Add New Product</button>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Product rows will be mapped here */}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
