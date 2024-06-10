import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductDetail from "./ForumDetail"; // Assuming this is the correct import for ProductDetail
import ForumList from "./ForumList";
import ResponsiveAppBar from "./Navbar";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { productsData as forumsData } from "./Objects/productsData.objects";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const Home = () => {
  const [selectedForum, setSelectedForum] = useState(null);
  const [forums, setForums] = useState(forumsData); // Initialize products with productsData

  function handleForumClick(forum) {
    setSelectedForum(forum);
  }

  // useEffect to update productList whenever products change
  useEffect(() => {
    setForums(forumsData); // Update products with the latest data from productsData
  }, [forumsData]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveAppBar /> {/* Include the Navbar component */}
        
        <h1>Welcome to ForumHub</h1>
        <p>Click on a forum to view it.</p>
        <br />

        <Container maxWidth="page"> {/* Wrap the content in a Container component */}
          <Grid container spacing={2}>
            {Object.values(forums).length === 0 ? (
              <p>No Forums Avaliable</p>
            ) : (
              Object.values(forums).map((forum) => (
                <Grid item xs={12} md={2} key={forum.id}>
                  <div className="product-list-wrapper" style={{ overflowWrap: 'break-word' }}>
                    {/* Include the ProductList component */}
                    <ForumList forums={[forum]} onProductClick={handleForumClick} />
                  </div>
                </Grid>
              ))
            )}
            <Grid item xs={12} md={6}>
              {selectedForum && <ProductDetail product={selectedForum} />}
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
