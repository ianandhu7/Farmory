import React from 'react';

const Dashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Sales</h3>
                    <p>$15,230</p>
                </div>
                <div className="stat-card">
                    <h3>Total Orders</h3>
                    <p>452</p>
                </div>
                <div className="stat-card">
                    <h3>Total Products</h3>
                    <p>89</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
