import axios from 'axios';

// File: auth.js
// This file contains helper functions for authentication

const checkStaffAuth = async (id, email, password) => {
  const url = `http://localhost:8080/api/staff-members/auth/${Number(id)},${email},${password}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error authenticating:", error);
    return null;
  }
};

const checkCustomerAuth = async (id, email, password) => {
  const url = `http://localhost:8080/api/customers/auth/${Number(id)},${email},${password}`;
  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error authenticating:", error);
    return null;
  }
};

// IMPLEMENT THIS IN JAVA STILL
// get customer id by email and password
async function getCustomerId(email, password) {
  const url = `http://localhost:8080/api/customers/auth/${email},${password}`;
  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Customer ID:", data);
  } catch (error) {
      console.error("Error authenticating:", error);
  }
}

//checkStaffAuth(1, 'owen@gmail.com', 'password');

//checkCustomerAuth(1, 'owen@gmail.com', 'password').then((result) => {
//  console.log(result);
//})

export { checkStaffAuth, checkCustomerAuth};
