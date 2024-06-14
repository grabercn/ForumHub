// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

// This is the customer data object that will be sent to the API endpoint
const customerObject = {
    name: 'Owen',
    email: 'owen@gmail.com',
    phoneNumber: '123-456-7890',
    password: 'password',
};

const staffObject = {
    name: 'Owen',
    email: 'owen@gmail.com',
    phoneNumber: '123-456-7890',
    password: 'password',
};

async function createCustomer(customerObject) {
    const url = 'http://localhost:8080/api/customers';
    try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(customerObject) // Body expects JSON string
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Customer created successfully:", data);
  }
  catch(error) {
      console.error("Error creating customer:", error);
  }
}

// find a customer by id
async function getCustomerById(customerId) {
    // Construct the URL with the customerId variable
    const url = `http://localhost:8080/api/customers/${customerId}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Customer:", data);
        return data;
    }
    catch(error) {
        console.error("Error retrieving customer:", error);
    }
}

// create a staff member

async function createStaff(staffObject) {
    const url = 'http://localhost:8080/api/staff-members';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(staffObject) // Body expects JSON string
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Staff member created successfully:", data);
    }
    catch(error) {
        console.error("Error creating staff member:", error);
    }
}

// find a staff member by id
async function getStaffById(staffId) {
    // Construct the URL with the staffId variable
    const url = `http://localhost:8080/api/staff-members/${Number(staffId)}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Staff member:", data);
        return data;
    }
    catch(error) {
        console.error("Error retrieving staff member:", error);
    }
}


// Export the functions to be used in other files
export { createCustomer, createStaff, getCustomerById, getStaffById };

//createCustomer(customerObject);
//getCustomerById(1);
//getStaffById(2);
//getCustomerById(1);

//createStaff(staffObject);
