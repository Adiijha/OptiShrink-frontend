import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import Cookies from 'js-cookie';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        Cookies.remove('accessToken');
        dispatch(logout());
        window.location.href = '/';
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Dashboard;