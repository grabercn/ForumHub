// Login.js
// Login Page for both users and staff members
import React from 'react';
import { checkAuthLocal, removeAuthCookieValues } from '../Objects/userData.object';

function Logout () {
    
    // Clear the auth cookies
    removeAuthCookieValues();
    return(
    <div>

        <h1>Logging out...</h1>
        
        {// Reload the page after 5 seconds
        setTimeout(() => {
            window.location.reload();
        }, 5000)}
    </div>
    );
    
}

export default Logout;
