// Fetch all comments from the API

const commentObject = {
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
        ("Added comment:", data);
    }
    catch(error) {
        console.error("Error adding post:", error);
    }
}

const getAllCommentsByPostId = async (postId) => {
    const url = `http://localhost:8080/api/comments/post/${postId}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        ("Comments:", data);
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

        ("Comment deleted successfully");
    }
    catch(error) {
        console.error("Error deleting post:", error);
    }
}

// remove all commenets by post id
const removeAllCommentsByPostId = async (postId) => {
    const url = `http://localhost:8080/api/comments/post/${postId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        ("Comments deleted successfully");
    }
    catch(error) {
        console.error("Error deleting comments:", error);
    }
}

//addComment(commentObject);
//getAllComments();
//removeComment(1);

export { getAllCommentsByPostId, removeAllCommentsByPostId,addComment, removeComment };
