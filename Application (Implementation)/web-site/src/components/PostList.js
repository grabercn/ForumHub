import React from 'react';
import { postsData } from './Objects/postsData.object';
import { addPost } from './Helpers/postApiCalls';
import { useEffect } from 'react';
import { getCustomerById } from './Helpers/userApiCalls';
import { Input, Button, TextField } from '@mui/material';
import { commentsData } from './Objects/commentsData.object';
import { addComment } from './Helpers/commentApiCalls';
import { getPostsByForumId  } from './Helpers/postApiCalls';

function PostList(props) {

    var forumId = props.forum.forumId;
    var customerId = props.customerId;

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [posts, setPosts] = React.useState();
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [comments, setComments] = React.useState(commentsData);
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
        comments.push(newComment);

        setComments([...comments, newComment]);
        setComment('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            postSubject: title,
            postText: content,
            forumId: forumId,
            customerId: customerId, // pass this in eventually, blank for now
        };

        addPost(newPost);
        postsData.push(newPost);

        setPosts([...posts, newPost]);
        setTitle('');
        setContent('');
    };

    // Get posts and customer name
    useEffect(() => {
        getCustomerById(customerId).then((data) => {
            setCustomerName(data.name);
        });
        getPostsByForumId(forumId).then((data) => {
            setPosts(data);
        });
    }, [forumId]);

    console.log(posts);

    return (
        <div>
            <h3>Posts:</h3>
            <ul>
            {posts && (
                posts.map((post) => (
                <li key={post.postId}>
                    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                    {/* Remove unnecessary useEffect (security issue) */}
                    <p style={{ fontSize: '12px', fontStyle: 'italic' }}>{CustomerName || 'Unknown'}</p>
                    <h4 style={{ fontWeight: 'bold' }}>{post.postSubject}</h4>
                    <hr />
                    <p style={{ fontSize: '14px' }}>{post.postText}</p>

                    <h5>Comments:</h5>
                    <ul>
                        {comments.map((comment) => (
                        <li key={comment.commentId}>
                            <p>{comment.commentText}</p>
                        </li>
                        ))}
                    </ul>

                    <Button onClick={() => handleOpenCommentForm(post.postId)}>Add Comment</Button>
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
            <Button onClick={handleOpenForm}>Add Post</Button>

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