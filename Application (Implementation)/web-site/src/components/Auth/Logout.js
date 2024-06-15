// Login.js
// Login Page for both users and staff members
import React from 'react';
import { removeAuthCookieValues, removeUserDataCookieValues } from '../Objects/userData.object';
import { Container, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Logout () {    
        return (
            <div>
                <Container maxWidth="md">
                <Grid container spacing={2} direction="column">
                    <h1>Logging out...</h1>
                    {/* Remove the auth cookie values */}
                </Grid>
                <center>
                <CircularProgress /> {/* Add the CircularProgress component here */}
                </center>
                
                {/* Remove the auth cookie values and user data cookie values, then reload */}
                {removeAuthCookieValues() && removeUserDataCookieValues() ? (
                    window.location.reload()
                ) : (
                    console.error("Error logging out")
                )}
                
                </Container>
            </div>
        );
    }

export default Logout;
