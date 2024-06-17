
// File: auth.js
// This file contains helper functions for authentication

const checkStaffAuth = async (email, password) => {
  const url = `https://forumhubjavaservices.azurewebsites.net/api/staff-members/auth/${email},${password}`;
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

async function checkCustomerAuth(email, password) {
  const url = `https://forumhubjavaservices.azurewebsites.net/api/customers/auth/${email},${password}`;
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
}


// get customer id by email and password
async function getCustomerByUsernameAndPassword(email, password) {
  const url = `https://forumhubjavaservices.azurewebsites.net/api/customers/${email}/${password}`;
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
  }
}

// get staff id by email and password
async function getStaffByUsernameAndPassword(email, password) {
  const url = `https://forumhubjavaservices.azurewebsites.net/api/staff-members/${email}/${password}`;
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
  }
}

//checkStaffAuth('owen@gmail.com', 'password');

//checkCustomerAuth(1, 'owen@gmail.com', 'password').then((result) => {
//  (result);
//})

export { checkStaffAuth, checkCustomerAuth, getCustomerByUsernameAndPassword, getStaffByUsernameAndPassword};
