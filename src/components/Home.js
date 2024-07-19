import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {

    return (
        <Container sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            mt:10,
            alignItems: 'center',
        }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Home Page
            </Typography>
            <Typography variant="body1">
                Welcome to the home page!
            </Typography>
        </Container>
    );
};

export default Home;



