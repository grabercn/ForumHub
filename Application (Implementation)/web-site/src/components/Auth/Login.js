import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Dialog from "@mui/material/Dialog";
import Signup from "./Signup";
import { checkAuthLocal, checkCustomerAuthCookie, checkStaffAuthCookie, removeAuthCookieValues, setAuthCookieValues } from "../Objects/userData.object";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleToggleChange = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
  };

  const handleSignup = () => {
    setShowSignup(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

  const password = event.target.elements.password.value;
  const email = event.target.elements.email.value;
  const userType = isAdmin ? "staff" : "customer";

  setAuthCookieValues(email, password);
  checkAuthLocal(userType).then((response) => {
    if (response === true) {
      alert("Logged in!");
      window.location.reload();
    } else {
      alert("Invalid credentials!");
    }
  });
};

  return (
    <Box
      height={500}
      width={500}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <h1>Login:</h1>
          </Grid>
          <Grid item>
            <label htmlFor="userType">Admin?</label>
            <Switch
              id="userType"
              checked={isAdmin}
              onChange={handleToggleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              name="email"
            />
          </Grid>
          { (
            <Grid item>
              <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                name="password"
              />
            </Grid>
          )}
          <Grid item>
            <Button variant="contained" type="submit">
              Sign-in
            </Button>
          </Grid>
          <Grid item>
            <br />
            <h3>
              <u>Need an account?</u>
            </h3>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleSignup}>
              Sign-up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={showSignup} onClose={() => setShowSignup(false)}>
        <Signup />
      </Dialog>
    </Box>
  );
};

export default Login;
