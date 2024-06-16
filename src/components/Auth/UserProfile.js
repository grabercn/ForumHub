import React from 'react';
import { Container } from '@mui/material';
import { getAuthCookieValues, getUserDataCookieValues } from '../Objects/userData.object';

const UserProfile = () => {
    return (
        <div>
            <Container>
            <h1>Hello, {getUserDataCookieValues().userName}</h1>
            <h2>Email: {getAuthCookieValues().userEmail}</h2>
            <h2>Role: {getUserDataCookieValues().userType}</h2>
            <h2>Customer ID: {getUserDataCookieValues().userId}</h2>
            
            </Container>
        </div>
    );
};

export default UserProfile;