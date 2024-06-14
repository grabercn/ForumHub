// Login.js
// Login Page for both users and staff members
import React from 'react';
import { checkAuthLocal, removeAuthCookieValues } from '../Objects/userData.object';

function Logout () {
    
    // Clear the auth cookies
    removeAuthCookieValues();
    
    return (
        <div>
            {/* Logout content */}
            <div className="logout-box">
                <br/>
                <h2>You have been successfully logged out</h2>
                <br/>
            </div>
            {window.location.reload()}
        </div>
    );
}

export default Logout;
