import { Grid, Input, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { createUser, createStaff } from '../Helpers/userApiCalls';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    
    // Error states for form validation
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [password2Error, setPassword2Error] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const verifyFormData = (formData) => {
        // verify password and email format

        setEmailError('');
        setPasswordError('');
        setPassword2Error('');
        setNameError('');
        setPhoneNumberError('');
        
        const emailRegex = /^[A-Za-z]{3}@(.+)$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
        const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
        var error = false;
        
        if (formData.password !== formData.password2) {
            setPasswordError('Passwords do not match.');
            setPassword2Error('Passwords do not match.');
            error = true;
        }

        if(formData.name.length === 0 || formData.name === '') {
            setNameError('Name cannot be empty.');
            error = true;
        }
    
        if (!emailRegex.test(formData.email)) {
            setEmailError('Invalid email format. (Ex owen@gmail.com) \n ');
            error = true;
        }
    
        if (!passwordRegex.test(formData.password)) {
            setPasswordError('Invalid password format.');
            error = true;
        }

        if (!passwordRegex.test(formData.password2)) {
            setPassword2Error('Invalid password format.');
            error = true;
        }
    
        if (!phoneNumberRegex.test(formData.phoneNumber)) {
            setPhoneNumberError('Invalid phone number format. (Ex 1234567890)');
            error = true;
        }
        
        if (error) {
            return false;
        }else{
        // If all checks pass, return true
        return true;
        }
    }

    const handleCreateUser = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const password2 = event.target[3].value;
        const phoneNumber = event.target[4].value;

        if (!verifyFormData({ name, email, password, password2, phoneNumber })) {
            alert('Invalid form data.');
        } else {
            const userObject = {
                name: userName,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
            };
            
            try {
                createUser(userObject);
                alert(`Created user with username: ${userName}.`);
                window.location.reload();
            } catch (error) {
                alert(`Error creating user.`);
            }
        }
    }

    return (
        <Grid container spacing={2} width={'page'}>
            <Box
                width={500}
                height={'page'}
                my={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={2}
            >
                <h1>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField 
                                error={nameError}
                                value={userName} 
                                helperText={nameError}
                                onChange={(e) => setUserName(e.target.value)} 
                                placeholder="Enter name"
                            />
                        </Grid>
                        <Grid item>
                            <TextField 
                                error={emailError} 
                                helperText={emailError} 
                                type="email" 
                                placeholder="Enter email" 
                            />
                        </Grid>
                        <Grid item>
                            <TextField 
                                error={passwordError} 
                                helperText={passwordError} 
                                name='password'
                                type="password" 
                                placeholder="Enter password" 
                            />
                        </Grid>
                        <Grid item>
                            <Alert severity="info">Password Requirements:
                                <ul>
                                    <li>At least 8 characters</li>
                                    <li>At least one uppercase letter</li>
                                    <li>At least one lowercase letter</li>
                                    <li>At least one special character</li>
                                    <li>At least one number</li>
                                </ul>
                            </Alert>
                        </Grid>
                        <Grid item>
                            <TextField 
                                error={password2Error} 
                                helperText={password2Error} 
                                type="password" 
                                placeholder="Confirm password" 
                            />
                        </Grid>
                        <Grid item>
                            <TextField 
                                error={phoneNumberError} 
                                helperText={phoneNumberError} 
                                type="phoneNumber" 
                                placeholder="Enter phone number" 
                            />
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained">
                                Create User
                            </Button>    
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Grid>
    );
}

export default Signup;
