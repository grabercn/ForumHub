import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ForumDetail from "./ForumDetail"; // Assuming this is the correct import for ForumDetail
import ForumList from "./ForumList";
import ResponsiveAppBar from "./Navbar";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { forumsData as forumsData } from "./Objects/forumsData.objects";
import PageBanner from "./PageBanner";
import { checkAuthLocal } from "./Objects/userData.object";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const Home = () => {
  const [selectedForum, setSelectedForum] = useState(null);
  const [forums, setForums] = useState(forumsData); // Initialize forums with forumsData
  const [isAuthChecked, setIsAuthChecked] = useState(false); // render certain components based on if auth was checked yet or not
  const [settings, setSettings] = useState([]); // for rendering of settings in navbar
  const [pages, setPages] = useState([]); // for rendering of pages in navbar

  function handleForumClick(forum) {
    setSelectedForum(forum);
  }

  // useEffect to update forumList whenever forums change
  useEffect(() => {
    setForums(forumsData); // Update forums with the latest data from forumsData
  }, [forumsData]);

  /* Include the Navbar component, renders based on user authentication */
  let appBarComponent = null;
  // check if user is authenticated and update navbar accordingly
  useEffect(() => {
    checkAuthLocal().then((response) => {
      if (response === true){
        // user is authenticated
        setSettings(['User Profile', 'Logout'])
        checkAuthLocal("admin").then((response) => {
          if (response){
            setPages(['Admin Tools'])
          }else{
            setPages(['About'])
          }
        });

        setIsAuthChecked(true);
      }else{
        // user is not authenticated
        setSettings(['Login'])
        setPages(['About'])
        setIsAuthChecked(true);
      }
    });
  }, []);



  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Include the Navbar component */}
        {isAuthChecked && <ResponsiveAppBar settings={settings} pages={pages}  />}
        <br />

        <PageBanner text="Welcome to ForumHub" subtext="Click on a forum to view it." imgUrl="https://images.pexels.com/photos/6176069/pexels-photo-6176069.jpeg" />
        <br />

        <Container maxWidth="xl"> {/* Wrap the content in a Container component with maxWidth set to "xl" */}
          <Grid container spacing={2}>
            {Object.values(forums).length === 0 ? (
              // Display message if no forums are available
                <p style={{ fontFamily: 'Roboto, sans-serif' }}>No Forums Available</p>
              ) : (
                Object.values(forums).map((forum) => (
                <Grid item xs={12} md={2} key={forum.id}>
                  <div className="forum-list-wrapper" style={{ overflowWrap: 'break-word', fontFamily: 'Roboto, sans-serif' }}>
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
