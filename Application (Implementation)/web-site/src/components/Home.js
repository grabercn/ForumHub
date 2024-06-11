import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ForumDetail from "./ForumDetail"; // Assuming this is the correct import for ForumDetail
import ForumList from "./ForumList";
import ResponsiveAppBar from "./Navbar";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { forumsData as forumsData } from "./Objects/forumsData.objects";
import PageBanner from "./PageBanner";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const Home = () => {
  const [selectedForum, setSelectedForum] = useState(null);
  const [forums, setForums] = useState(forumsData); // Initialize forums with forumsData

  function handleForumClick(forum) {
    setSelectedForum(forum);
  }

  // useEffect to update forumList whenever forums change
  useEffect(() => {
    setForums(forumsData); // Update forums with the latest data from forumsData
  }, [forumsData]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveAppBar /> {/* Include the Navbar component */}
        
        <PageBanner text="Welcome to ForumHub" subtext="Click on a forum to view it." imgUrl="https://images.pexels.com/photos/6176069/pexels-photo-6176069.jpeg" />
        <br />

        <Container maxWidth="xl"> {/* Wrap the content in a Container component with maxWidth set to "xl" */}
          <Grid container spacing={2}>
            {Object.values(forums).length === 0 ? (
              <p>No Forums Avaliable</p>
            ) : (
              Object.values(forums).map((forum) => (
                <Grid item xs={12} md={2} key={forum.id}>
                  <div className="forum-list-wrapper" style={{ overflowWrap: 'break-word' }}>
                    {/* Include the Forum List component */}
                    <ForumList forums={[forum]} onForumClick={handleForumClick} />
                  </div>
                </Grid>
              ))
            )}
            <Grid item xs={12} md={6}>
              {selectedForum && <ForumDetail forum={selectedForum} />}
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
