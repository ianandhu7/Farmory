import React from 'react';

const Users = () => {
    return (
        <div className="admin-users">
            <h1>Manage Users</h1>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* User rows will be mapped here */}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
