// ProductDetail.js
// Handles the specific details of a forum and allows the user to add the forum to the cart
import * as React from 'react';
import PostList from './PostList';
import ForumBanner from './ForumBanner';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Product Detail Component
// forum: The forum object to display details for
// showCartButton: A blank (undefined) value to indicate whether or not to display the add to cart button
const ForumDetail = (props) => {


  // Extract the forum object from the props
  const forum = props.forum;


  // Return the forum details component
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Display the forum name */}
                  {console.log(forum)}
                  <Paper elevation={3} style={{ padding: '10px' }}>
                    <ForumBanner heading={forum.forumName} subheading={forum.forumDescription} imgUrl={forum.imgUrl}/>
                  </Paper>
                  </Grid>
                  <Grid item xs={12}>
                  {/* Add any details you want to display in the popup*/}
            <div>
              <p>id:<i>{forum.forumId}</i> Category: <i>{forum.forumCategory}</i></p>
            </div>
            
            {/* Display the posts in the forum */}
            <PostList posts={forum.posts} forum={forum} customerId={1}/>
          </Grid>
        </Grid>
      );
}

export default ForumDetail;
