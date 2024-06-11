// Fetch all posts from the API

const postObject = {
    postSubject: 'Post 1',
    postText: 'Text of post 1',
    costumerId: 1,
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
        console.log("Added post:", data);
    }
    catch(error) {
        console.error("Error adding post:", error);
    }
}

const getAllPosts = async () => {
    const url = 'http://localhost:8080/api/posts';
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Posts:", data);
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

        console.log("Post deleted successfully");
    }
    catch(error) {
        console.error("Error deleting post:", error);
    }
}

//addPost(postObject);
//getAllPosts();
//removePost(1);

export { addPost, getAllPosts, removePost };
