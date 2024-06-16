// Fetch all posts from the API

const postObject = {
    postSubject: 'Post 1',
    postText: 'Text of post 1',
    customerId: 1,
    forumId: 1
};

const addPost = async (postObject) => {
    const url = `http://localhost:8080/api/posts`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(postObject),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Added post:", data);
    }
    catch(error) {
        console.error("Error adding post:", error);
    }
}

// get all posts for a forum
const getPostsByForumId = async (forumId) => {
    const url = `http://localhost:8080/api/posts/forum/${forumId}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Posts:", data);
        return data;
    }
    catch(error) {
        console.error("Error retrieving posts:", error);
    }
}

const removePost = async (postId, forumId) => {
    const url = `http://localhost:8080/api/posts/${postId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        ("Post deleted successfully");
    }
    catch(error) {
        console.error("Error deleting post:", error);
    }
}

// delete posts by forum id
const removeAllPostsByForumId = async (forumId) => {
    const url = `http://localhost:8080/api/posts/forum/${forumId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        ("Posts deleted successfully");
    }
    catch(error) {
        console.error("Error deleting posts:", error);
    }
}

// get post by id
const getPostById = async (postId) => {
    const url = `http://localhost:8080/api/posts/${postId}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Post:", data);
        return data;
    }
    catch(error) {
        console.error("Error retrieving post:", error);
    }
}

//addPost(postObject);
//getAllPosts();
//getPostsByForumId(1);
//removePost(1);

export {removeAllPostsByForumId, addPost, removePost, getPostById, getPostsByForumId };
