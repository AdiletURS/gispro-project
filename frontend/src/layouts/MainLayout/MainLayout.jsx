import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export default function MainLayout() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
        </Container>
    );
}
