import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid} from '@mui/material';
import ForumDetail from './ForumDetail';
import ForumList from './ForumList';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import { forumsData } from './Objects/forumsData.objects';
import { createForum, getAllForums, deleteForumById } from './Helpers/forumApiCalls';

const AdminTools = () => {

    var forums = forumsData;

    const [selectedForum, setSelectedForum] = useState(null);
    const [showAddForumForm, setShowAddForumForm] = useState(false);
    const [showRemoveForumForm, setShowRemoveForumForm] = useState(false);

    const handleForumClick = (forum) => {
        setSelectedForum(forum);
    };

    const handleRemoveForum = (event) => {
        
        var id = document.getElementById('id').value

        // Delete the forum from the API
        deleteForumById(id);
        
        alert('Forum removed! Total forums: ' + forums.length-1);
        
        setShowRemoveForumForm(false);

        event.preventDefault();
        location.reload()
    };

    const handleAddForum = (event) => {
        
        // This is the forum data object that will be sent to the API endpoint
        const forumObject = {
            forumCategory: document.getElementById('category').value,
            forumName: document.getElementById('name').value,
            forumDescription: document.getElementById('description').value,
        };
        
        // Create the forum in the API
        createForum(forumObject);

        alert('Forum added! Total forums: ' + forums.length+1);
        event.preventDefault();

        forums = getAllForums();
        console.log(forums);
        
        setShowAddForumForm(false);
        location.reload()
    };

    const handleAddShowForum = () => {
        setShowAddForumForm(true);
    };

    const handleCloseForm = () => {
        setShowAddForumForm(false);
        setShowRemoveForumForm(false);
    };

    const handleShowRemoveForum = () => {
        setShowRemoveForumForm(true);
    }

    return (
        <div>
            <Box
                height={500}
                width={500}
                my={0}
                display="ho"
                alignItems="top"
                gap={4}
                p={2}
            >
                <h1>Admin Tools</h1>
                <br />
                <h2>Forum Management</h2>
                <p>Click on a forum to view more details</p>
                <br />

                <Grid container spacing={2}>
                <Container maxWidth="lg"> {/* Wrap the content in a Container component */}
                    <Grid container spacing={2}>
                        {forums.map((forum) => (
                        <Grid item xs={12} md={4} key={forum.id}>
                            <div className="forum-list-wrapper" style={{ overflowWrap: 'break-word' }}>
                            {/* Include the ForumList component */}
                            <ForumList forums={[forum]} onForumClick={handleForumClick} />
                            </div>
                        </Grid>
                        ))}
                        <Grid item xs={12} md={6}>
                        {selectedForum && <ForumDetail forum={selectedForum} />}
                        </Grid>
                    </Grid>
                    
                    </Container>
                        
                    <Grid item xs={12}>
                        {!showAddForumForm && (
                            <button onClick={handleAddShowForum}>
                                <AddIcon />
                                Add Forum
                            </button>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {!showRemoveForumForm && (
                            <button onClick={handleShowRemoveForum}>
                                <RemoveIcon />
                                Remove Forum
                            </button>
                        )}
                    </Grid>
                    
                    {showAddForumForm && (
                        <Dialog open={true} onClose={handleCloseForm}>
                            <container maxWidth="page">
                            <h2>Add Forum</h2>
                            <form>
                                <input type="text" id="category" placeholder="Category" />
                                <input type="text" id="name" placeholder="Name" />
                                <input type="text" id="description" placeholder="Description" />
                                <br />
                                <br />
                                <button onClick={handleAddForum}>Add Forum</button>
                            </form>
                            </container>
                        </Dialog>
                    )}
                    {showRemoveForumForm && (
                        <Dialog open={true} onClose={handleCloseForm}>
                            <container maxWidth="page">
                            <h2>Remove Forum</h2>
                            <form>
                                <input type="number" id="id" placeholder="Forum ID" />
                                <br />
                                <br />
                                <button onClick={handleRemoveForum}>Remove Forum</button>
                            </form>
                            </container>
                        </Dialog>
                    )}

                    {/* blank space */}
                    <Grid item xs={12}/>
                </Grid>
            </Box>
        </div>
    );
};

export default AdminTools;

