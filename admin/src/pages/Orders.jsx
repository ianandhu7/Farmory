import React from 'react';

const Orders = () => {
    return (
        <div className="admin-orders">
            <h1>Manage Orders</h1>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Order rows will be mapped here */}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
