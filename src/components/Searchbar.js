import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { getAllForums } from './Helpers/forumApiCalls';

// Searchbar.js



function Searchbar() {
  const [searchResult, setSearchResult] = React.useState(null);

  // Function to handle search query
  const searchQuery = (query) => {
    getAllForums().then((response) => {
      response.forEach((forum) => {
        if (query !== (undefined || null || '') && forum.forumName.toLowerCase().includes(query.toLowerCase())) {
          (forum)
          (setSearchResult(forum));
        }
      });
    });
  }

  // Search bar styling
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  // Search icon wrapper
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  // Styled input base
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  // Return the search bar component
  return (
    <div style={{zIndex: '1000'}}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(event) => searchQuery(event.target.value)}
          onFocus={(event) => setSearchResult(event.target.value)}
          onFocusOut={() => setSearchResult(null)}
        />
      </Search>
      {searchResult && (
              <div className="forum-list-wrapper" style={{ overflowWrap: 'break-word', position: 'absolute' }}>
                {searchResult.forumName}
              <br />
              </div>
      )}
    </div>
  );
}

export default Searchbar;
