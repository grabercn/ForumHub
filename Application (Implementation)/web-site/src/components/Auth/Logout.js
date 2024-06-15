// Login.js
// Login Page for both users and staff members
import React from 'react';
import { checkAuthLocal, removeAuthCookieValues, removeUserDataCookieValues } from '../Objects/userData.object';
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Logout () {
    
    // Clear the auth cookies
    removeAuthCookieValues();
    removeUserDataCookieValues();
        return (
            <div>
                <Grid container spacing={2} direction="column">
                    <h1>Logging out...</h1>
                </Grid>
                <CircularProgress /> {/* Add the CircularProgress component here */}
                {/* Reload the page after 5 seconds */}
                {setTimeout(() => {
                    window.location.reload();
                }, 5000)}
            </div>
        );
    }

export default Logout;
