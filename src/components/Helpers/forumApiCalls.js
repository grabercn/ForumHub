// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

// This is the forum data object that will be sent to the API endpoint
const forumObject = {
    forumCategory: 'Shoes',
    forumName: 'Shoe Land',
    forumDescription: 'Land of shoes and more shoes',
    imgUrl: 'https://images.pexels.com/photos/25394823/pexels-photo-25394823/free-photo-of-a-woman-in-a-red-jumpsuit-posing-on-a-porch.jpeg',
};

async function createForum(forumObject) {
    const url = 'http://forumhubjavaservices.azurewebsites.net/api/forums';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(forumObject) // Body expects JSON string
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Forum created successfully:", data);
    }
    catch(error) {
        console.error("Error creating forum:", error);
    }
}

async function getAllForums() {
    const url = 'http://forumhubjavaservices.azurewebsites.net/api/forums';
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Forums:", data);
        return data;
    }
    catch(error) {
        console.error("Error retrieving forums:", error);
    }
}

async function getForumById(forumId) {
    // Construct the URL with the forumId variable
    const url = `http://forumhubjavaservices.azurewebsites.net/api/forums/${forumId}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Forum:", data);
    }
    catch(error) {
        console.error("Error retrieving forum:", error);
    }
}

async function getForumByName(forumName) {
    // Construct the URL with the forumName variable
    const url = `http://forumhubjavaservices.azurewebsites.net/api/forums/search?name=${forumName}`;
    try {
        const response = await fetch(url, {
        method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Forum:", data);
    }
    catch(error) {
        console.error("Error retrieving forum:", error);
    }
}

// Parameters on updateForum() explained:
// forumId: the forumId we're updating with new data (via PUT request)
// forumObject: the JavaScript object representing new data we're putting in place of the old data
async function updateForumById(forumId, forumObject) {
    // Changing the forumObject being PUT/updated
    forumObject = {
        category: 'shirt',
        forumName: 'Forum 2',
        brand: 'Brand Y',
        size: 'Medium',
        description: 'This is forum 2',
        price: 40.00
    }
    // Construct the URL with the forumId variable
    const url = `http://forumhubjavaservices.azurewebsites.net/api/forums/${forumId}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // Set content type to JSON
            },
            body: JSON.stringify(forumObject) // Body expects JSON string
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Forum updated successfully:", data);
    }
    catch(error) {
        console.error("Error updating forum:", error);
    }
}

async function deleteForumById(forumId) {
    // Construct the URL with the forumId variable
    const url = `http://forumhubjavaservices.azurewebsites.net/api/forums/${forumId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        ("Forum deleted successfully"); // Assuming successful deletion doesn't require a response body
    }
    catch(error) {
        console.error("Error deleting forum:", error);
    }
}

// Export the functions to be used in other files
export { createForum, getAllForums, getForumById, getForumByName, updateForumById, deleteForumById};


// Usage examples

//createForum(forumObject);
//getAllForums();
//getForumById(1);
//getForumByName("Forum 1");
//updateForumById(1, forumObject);
//deleteForumById(1);
//getForumAvailability(1, 0);
//updateInventory(1, 1, 5);