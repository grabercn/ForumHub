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
    zIndex: -1, // Change this line to bring the blur effect behind the text
}));

const Text = styled('h1')(({ imgUrl }) => ({
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 10)',
    zIndex: 999, // Add this line to bring the text in front of the blur effect
}));

const SubText = styled('p')(({ imgUrl }) => ({
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '100px', // Add this line to create some space between the main text and subtext
    zIndex: 999, // Add this line to bring the subtext in front of the blur effect
}));

const PageBanner = ({ text, subtext, imgUrl }) => {
    return (
        <Banner imgUrl={imgUrl}>
            <Text>{text}</Text>
            <SubText>{subtext}</SubText>
        </Banner>
    );
};

export default PageBanner;
