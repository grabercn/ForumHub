// Fetch all comments from the API

const postObject = {
    commentText: 'Comment 1',
    postId: 1,
    customerId: 1
};

const addComment = async (postObject) => {
    const url = `http://localhost:8080/api/comments`;
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

const getAllComments = async () => {
    const url = 'http://localhost:8080/api/comments';
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Comments:", data);
        return data;
    }
    catch(error) {
        console.error("Error retrieving comments:", error);
    }
}

const removeComment = async (postId) => {
    const url = `http://localhost:8080/api/comments/${postId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        console.log("Comment deleted successfully");
    }
    catch(error) {
        console.error("Error deleting post:", error);
    }
}

//addComment(postObject);
//getAllComments();
//removeComment(1);

export { addComment, getAllComments, removeComment };
