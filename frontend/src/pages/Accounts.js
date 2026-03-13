'use strict';

import React from 'react';
import { useState, useEffect } from 'react';
import './Accounts.css';

const Accounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Simulate fetching accounts from an API
        const fetchAccounts = async () => {
            // Replace with real API call
            const response = await fetch('/api/accounts');
            const data = await response.json();
            setAccounts(data);
        };
        fetchAccounts();
    }, []);

    return (
        <div className='accounts'>
            <h1>Account Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => (
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.name}</td>
                            <td>{account.email}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Accounts;
