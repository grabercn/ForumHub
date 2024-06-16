const { createForum } = require("./src/components/Helpers/forumApiCalls");
const { createComment } = require("./src/components/Helpers/commentApiCalls");
const { createCustomer, createStaff } = require("./src/components/Helpers/userApiCalls");
const { createPost } = require("./src/components/Helpers/postApiCalls");

/*
    This file is used to set up the database with initial data for testing purposes.
    It creates a staff member, a customer, a forum, a post, and a comment.
    The objects are created using the respective API calls.
*/

const staffObject = {
    name: 'Owen Edwards',
    email: 'owen@gmail.com',
    phoneNumber: '123-456-7890',
    password: 'password',
};

const customerObject = {
    name: 'Owen Edwards',
    email: 'owen@gmail.com',
    phoneNumber: '123-456-7890',
    password: 'password',
};

const forumObject = {
    forumCategory: 'Cocoa',
    forumName: 'Smackin Hot Cocoa',
    forumDescription: 'General cocoa for all discussions',
    imgUrl: 'https://3.bp.blogspot.com/-7qZnqLW_mEU/UNpEKTN284I/AAAAAAAACgc/QXUbIVQQs4w/s1600/Hot+Cocoa.jpg',
};

const forumObject2 = {
    forumCategory: 'General',
    forumName: 'General Discussion',
    forumDescription: 'General discussion forum',
    imgUrl: 'https://www.wearethemighty.com/uploads/2022/08/Lt-Gen-Michael-Langley-USS-Bataan-Fleet-Week-1536x1268.jpeg',
};

const postObject = {
    postSubject: 'Post 1',
    postText: 'Text of post 1',
    customerId: 1,
    forumId: 1
};

const postObject2 = {
    postSubject: 'Post 2',
    postText: 'Text of post 2',
    customerId: 1,
    forumId: 2
};

const commentObject = {
    commentText: 'Comment 1',
    customerId: 1,
    postId: 1
};

const commentObject2 = {
    commentText: 'Comment 2',
    customerId: 1,
    postId: 2
};
// create all objects in the database
createStaff(staffObject);
createCustomer(customerObject);
createForum(forumObject);
createForum(forumObject2);
createPost(postObject);
createPost(postObject2);
createComment(commentObject);
createComment(commentObject2);

