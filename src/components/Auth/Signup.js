import { Grid, Input, Switch } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createCustomer, createStaff } from '../Helpers/userApiCalls';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleToggleChange = () => {
        setIsAdmin(!isAdmin);
    }

    const verifyFormData = (formData) => {
        // verify password and email format
        
        var emailRegex = new RegExp('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/');
        var passwordRegex = new RegExp('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/');
        var phoneNumberRegex = new RegExp('/^\d{10}$/');
        var nameRegex = new RegExp('/^[a-zA-Z]+$/');
        
        if (formData.password !== formData.password2) {
            alert('Passwords do not match.');
            return false;
        }

        //if (!emailRegex.test(formData.email)) {

        //    alert('Invalid email format.');
        //    return false;
        //}

        //if (!passwordRegex.test(formData.password)) {
        //    alert('Password must be between 6 and 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter.');
            //return false;
        //}

        //if (!phoneNumberRegex.test(formData.phoneNumber)) {
            //alert('Invalid phone number format.');
            //return false;
        //}

        //if (!nameRegex.test(formData.name)) {

            //alert('Invalid name format.');
           // return false;
        //}

        // If all checks pass, return true
        return true;
    }

    const handleCreateUser = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const userType = isAdmin ? 'admin' : 'customer';

        const name = event.target[1].value;
        const email = event.target[2].value;
        const password = event.target[3].value;
        const password2 = event.target[4].value;
        const phoneNumber = event.target[5].value;

        if (!verifyFormData({ name, email, password, password2, phoneNumber })) {
            return;
        }

        if (userType === 'admin') {
            // Create staff user here
            
            const staffObject = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
            };

            try {
                createStaff(staffObject);
                alert(`Created staff user with username: ${userName}.`);
                window.location.reload();
            } catch (error) {
                alert(`Error creating staff user.`);
            }
        } else {
            const customerObject = {
                name: userName,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
            };
            
            try {
                createCustomer(customerObject);
                alert(`Created customer with username: ${userName}.`);
                window.location.reload();
            } catch (error) {
                alert(`Error creating customer.`);
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
                            <label>
                                Admin?
                                <Switch 
                                    checked={isAdmin}
                                    onChange={handleToggleChange}
                                />
                            </label>
                        </Grid>
                        <Grid item>
                            <Input 
                                value={userName} 
                                onChange={(e) => setUserName(e.target.value)} 
                                placeholder="Enter name"
                            />
                        </Grid>
                        <Grid item>
                            <Input type="email" placeholder="Enter email" />
                        </Grid>
                        <Grid item>
                            <Input type="password" placeholder="Enter password" />
                        </Grid>
                        <Grid item>
                            <Input type="password" placeholder="Confirm password" />
                        </Grid>
                        <Grid item>
                            <Input type="phoneNumber" placeholder="Enter phone number" />
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
