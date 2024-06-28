import React, { useContext } from 'react';
import PageRoutes from './PageRoutes';
import Home from './components/Home';
import { LoadingProvider } from './components/LoadingContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet';

const LoadingSpinner = () => {
  const { loading } = useContext(LoadingContext);
  return loading ? (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        zIndex: 9999
      }}
    >
      <CircularProgress />
    </Box>
  ) : null;
};

const App = () => {
  return (
    <div>
      <Helmet>
        {/* Add the Google AdSense script to the head */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6853203533491695"
                crossorigin="anonymous"></script>
      </Helmet>
      
      <LoadingProvider>
        <LoadingSpinner />
        <PageRoutes />
        <Home />
      </LoadingProvider>
    </div>
  );
};

export default App;
