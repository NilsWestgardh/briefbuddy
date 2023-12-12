import * as React from 'react';
import { Typography, Container, Button } from '@mui/material';

export default function Home() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h1" align="center" gutterBottom>
                Welcome to My App
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                This is a basic placeholder home page.
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
                Get Started
            </Button>
        </Container>
    );
};