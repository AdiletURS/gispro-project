// src/components/Header/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container,
} from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function Header({ mode, onToggleMode }) {
    const { pathname } = useLocation();
    const navItems = [
        { to: '/products', label: 'Продукты' },
        { to: '/industries', label: 'Отрасли' },
        { to: '/about', label: 'О компании' },
        { to: '/projects', label: 'Проекты' },
        { to: '/services', label: 'Услуги' },
    ];

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Oswald, sans-serif',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        GISPRO
                    </Typography>

                    {navItems.map((item) => (
                        <Button
                            key={item.to}
                            component={Link}
                            to={item.to}
                            sx={{
                                mx: 1,
                                fontFamily: 'Oswald, sans-serif',
                                color: pathname === item.to ? 'primary.main' : 'text.primary',
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}

                    <IconButton onClick={onToggleMode} sx={{ ml: 2 }}>
                        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                    </IconButton>

                    <Button
                        variant="contained"
                        component={Link}
                        to="/contact"
                        sx={{ ml: 2, fontFamily: 'Oswald, sans-serif' }}
                    >
                        Связаться с нами
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
