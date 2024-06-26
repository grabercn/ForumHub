// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

// This is the user data object that will be sent to the API endpoint
const userObject = {
    name: 'Owen',
    email: 'owen@gmail.com',
    phoneNumber: '123-456-7890',
    password: 'password',
};

async function createUser(userObject) {
    const url = 'https://forumhubjavaservices.azurewebsites.net/api/users';
    try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userObject) // Body expects JSON string
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
        console.log("User created successfully:", data);
  }
  catch(error) {
      console.error("Error creating user:", error);
  }
}

// find a user by id
async function getUserById(userId) {
    // Construct the URL with the userId variable
    const url = `https://forumhubjavaservices.azurewebsites.net/api/users/${userId}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error("Error retrieving user:", error);
    }
}


// Export the functions to be used in other files
export { createUser, getUserById };

//createUser(userObject);
//getUserById(1);
//getStaffById(2);
//getUserById(1);

//createStaff(staffObject);
