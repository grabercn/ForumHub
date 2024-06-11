import React from 'react';
import { postsData } from './Objects/postsData.object';
import { addPost } from './Helpers/postApiCalls';

function PostList() {

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [posts, setPosts] = React.useState(postsData);
    const [isFormOpen, setIsFormOpen] = React.useState(false);

    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            postSubject: title,
            postText: content,
            forumId: 1,
            customerId: 1,
        };

        addPost(newPost);
        postsData.push(newPost);

        setPosts([...posts, newPost]);
        setTitle('');
        setContent('');
    };

    return (
        <div>
            {/* Display the list of posts */}
            <h3>Posts:</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.postId}>
                        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                            <h4 style={{ fontWeight: 'bold' }}>{post.postSubject}</h4>
                            <p style={{ fontSize: '14px' }}>{post.postText}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Add new post */}
            <h3>Add Post:</h3>
            <button onClick={handleOpenForm}>Add Post</button>

            {/* Popup form */}
            {isFormOpen && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
                        <textarea value={content} onChange={handleContentChange} placeholder="Content" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default PostList;