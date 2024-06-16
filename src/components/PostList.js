import React from 'react';
import { addPost } from './Helpers/postApiCalls';
import { useEffect } from 'react';
import { getCustomerById } from './Helpers/userApiCalls';
import { Input, Button, TextField, Grid } from '@mui/material';
import { addComment, getAllCommentsByPostId } from './Helpers/commentApiCalls';
import { getPostsByForumId  } from './Helpers/postApiCalls';
import { checkAuthLocal } from './Objects/userData.object';

function PostList(props) {

    var forumId = props.forum.forumId;
    var customerId = props.customerId;

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [posts, setPosts] = React.useState();
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [isLoggedin, setIsLoggedin] = React.useState(false);
    const [comments, setComments] = React.useState();
    const [comment, setComment] = React.useState('');
    const [isCommentFormOpen, setIsCommentFormOpen] = React.useState(null);
    const [CustomerName, setCustomerName] = React.useState('');

    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleOpenCommentForm = (postId) => {
        setIsCommentFormOpen(postId);
    };

    const handleCommentChange = (event, postId) => {
        setComment(event.target.value);
    };

    const handleSubmitComment = (event, postId) => {
        event.preventDefault();

        const newComment = {
            commentText: comment,
            postId: postId,
            customerId: customerId,
        };

        addComment(newComment);
        try{
            comments.push(newComment);
        }catch(e){
            setComments([newComment]);
        }
        
        setComment('');
        setComments(comments);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            postSubject: title,
            postText: content,
            forumId: forumId,
            customerId: customerId, // pass this in eventually, blank for now
        };

        // Call the addPost function from postApiCalls.js
        addPost(newPost);

        //set the posts state to include the new post
        setPosts([...posts, newPost]);
        setTitle('');
        setContent('');
    };

    //check auth status on load
    useEffect(() => {
        checkAuthLocal().then((response) => {
            if (response === true){
                setIsLoggedin(true);
            }else{
                setIsLoggedin(false);
            }
        });
    }, []);

    // Get posts, comments, and customer name on load
    useEffect(() => {
        getCustomerById(customerId).then((data) => {
            setCustomerName(data.name);
        });
        getPostsByForumId(forumId).then((data) => { // Get posts by forumId
            
            setPosts(data); // Set posts state
           
            data.forEach((post) => { // For each post
                
                // Get comments for each post
                getAllCommentsByPostId(post.postId).then((comments) => { // Get comments by postId
                    setComments((prevComments) => { // Set comments state
                        return { // Return the previous comments and add the new comments
                            ...prevComments,
                            [post.postId]: comments,
                        };
                    }); 
                });
            });
        });
    }, [comment, forumId, customerId]);
    
    return (
        <div>
            {isLoggedin && <h2>What will you post today, {CustomerName || 'Unknown'}?</h2>}
            <h3>Posts:</h3>
            <ul>
            {posts && (
                posts.map((post) => (
                <li key={post.postId}>
                    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                    {/* Remove unnecessary useEffect (security issue) */}
                    <p style={{ fontSize: '12px', fontStyle: 'italic' }}>{post.customerId.name || 'Unknown'}</p>
                    <h4 style={{ fontWeight: 'bold' }}>{post.postSubject}</h4>
                    <hr />
                    <p style={{ fontSize: '14px' }}>{post.postText}</p>

                    <h5>Comments:</h5>
                    <ul>
                        {comments && comments[post.postId] && comments[post.postId].map((comment) => (
                            <li key={comment.commentId}>
                                {/* comments render in here via mapping each comment to a post*/ }
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <p>{comment.customerId.name} : <i>{comment.commentText}</i></p>
                                    </Grid>
                                </Grid>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Add comment form */}
                    {isLoggedin && <Button onClick={() => handleOpenCommentForm(post.postId)}>Add Comment</Button>}
                    {isCommentFormOpen === post.postId && (
                        <div>
                        <form onSubmit={(event) => handleSubmitComment(event, post.postId)}>
                            <Input type="text" value={comment} onChange={(event) => handleCommentChange(event, post.postId)} placeholder="Comment" />
                            <Button type="submit">Submit</Button>
                        </form>
                        </div>
                    )}
                    </div>
                </li>
                ))
            )}
            </ul>

            {/* Add new post */}
            {isLoggedin && <Button onClick={handleOpenForm}>Add Post</Button>}

            {/* Popup form */}
            {isFormOpen && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
                        <TextField value={content} onChange={handleContentChange} placeholder="Content" />
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            )}
            
        </div>
    );
}

export default PostList;