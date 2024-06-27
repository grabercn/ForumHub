// Login.js
// Login Page for both users and staff members
import React from 'react';
import { removeAuthCookieValues, removeUserDataCookieValues } from '../Objects/userData.object';
import { Alert, Container, Grid, LinearProgress } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Logout () {    
        return (
            <div>
                <Container maxWidth="md">
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Alert severity="info">Logging out...</Alert>
                    </Grid>
                    {/* Remove the auth cookie values */}
                </Grid>
                <center>
                <LinearProgress />
                </center>
                
                {/* Remove the auth cookie values and user data cookie values, then reload */}
                {removeAuthCookieValues() && removeUserDataCookieValues() ? (
                    setTimeout (() => window.location.reload(), 2000)
                ) : (
                    alert("Error logging out, please try again later.")
                )}
                
                </Container>
            </div>
        );
    }

export default Logout;
