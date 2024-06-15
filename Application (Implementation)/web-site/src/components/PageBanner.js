import React from 'react';
import { styled } from '@mui/system';

const Banner = styled('div')(({ imgUrl }) => ({
    position: 'relative',
    width: '100%',
    height: '400px',
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'filter 0.5s ease-in-out', // Add this line to create a smooth transition for the filter property
    '&:hover': {
        filter: 'grayscale(0%)', // Add this line to remove the grayscale effect on hover
    },
}));

const Text = styled('h1')(() => ({
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 10)',
}));

const SubText = styled('p')(() => ({
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '18px',
    textAlign: 'center',
}));

const PageBanner = ({ text, subtext, imgUrl }) => {
    return (
        <Banner style={{display: 'table', alignContent: 'center'}} imgUrl={imgUrl}>
            <Text>{text}</Text>
            <SubText>{subtext}</SubText>
        </Banner>
    );
};

export default PageBanner;
