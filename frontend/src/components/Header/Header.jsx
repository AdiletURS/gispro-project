// src/components/Header/Header.jsx

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Menu,
    MenuItem,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import logoLight from '../../assets/images/logo.png';
import logoDark from '../../assets/images/logo-dark.png';

import { useTranslation } from 'react-i18next';

export default function Header({ mode, onToggleMode }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const { pathname } = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const logoSrc = mode === 'dark' ? logoDark : logoLight;
    const { t, i18n } = useTranslation();

    const [langAnchorEl, setLangAnchorEl] = useState(null);
    const isLangMenuOpen = Boolean(langAnchorEl);

    const handleDrawerToggle = () => setMobileOpen(prev => !prev);
    const handleLangButtonClick = (e) => setLangAnchorEl(e.currentTarget);
    const handleLangMenuClose = () => setLangAnchorEl(null);
    const changeLanguage = (lng) => { i18n.changeLanguage(lng); handleLangMenuClose(); };

    // Навигационные пункты: услуги, о компании, проекты, достижения, реквизиты (скролл к футеру)
    const navItems = [
        { to: '/services',     label: t('header.services')     },
        { to: '/about',        label: t('header.about')        },
        { to: '/projects',     label: t('header.projects')     },
        { to: '/achievements', label: t('header.achievements') },
        { to: '/contacts',     label: t('header.contacts')     },
    ];

    const handleNavClick = (to, e) => {
        setMobileOpen(false);
        // Страница «О компании» остаётся штатной навигацией
        if (to === '/about') return;

        e.preventDefault();
        const sectionId = to.slice(1); // 'contacts' -> 'contacts'

        if (pathname === '/') {
            // Если на главной, плавный скролл к разделу
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // Иначе переходим на главную с флагом scrollTo
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
            <Box sx={{ textAlign: 'center', py: 2 }}>
                <Box component="img" src={logoSrc} alt="Logo" sx={{ height: 40, mr: 1 }} />
            </Box>
            <Divider />
            <List>
                {navItems.map(item => (
                    <ListItem
                        button
                        key={item.to}
                        component={Link}
                        to={item.to}
                        onClick={e => handleNavClick(item.to, e)}
                        sx={{ justifyContent: 'center' }}
                    >
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                fontFamily: 'Oswald, sans-serif',
                                textAlign: 'center',
                                color: pathname === item.to
                                    ? theme.palette.primary.main
                                    : theme.palette.text.primary,
                            }}
                        />
                    </ListItem>
                ))}
                {/* Кнопка «Связаться с нами» ведёт на отдельную страницу /contact */}
                <ListItem button component={Link} to="/contact" sx={{ justifyContent: 'center', mt: 1 }}>
                    <Button
                        variant="contained"
                        sx={{
                            fontFamily: 'Oswald, sans-serif',
                            textTransform: 'none',
                            letterSpacing: '0.05em',
                            px: 2.5,
                            py: 1,
                            backgroundColor: theme.palette.button.primary,
                            color: theme.palette.common.white,
                            '&:hover': { backgroundColor: theme.palette.button.primaryDark },
                        }}
                    >
                        {t('header.contactUs')}
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: theme.palette.background.default,
                    boxShadow: 'none',
                    zIndex: theme.zIndex.drawer + 1,
                    backgroundImage: 'none',
                    transition: 'background-color 300ms ease',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Логотип */}
                        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: theme.palette.text.primary }}>
                            <Box component="img" src={logoSrc} alt="Logo" sx={{ height: { xs: 32, sm: 40 }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: 'Oswald, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: 1,
                                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                    color: theme.palette.text.primary,
                                }}
                            >
                                GISPRO
                            </Typography>
                        </Box>

                        {isDesktop ? (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {navItems.map(item => (
                                    <Button
                                        key={item.to}
                                        component={Link}
                                        to={item.to}
                                        onClick={e => handleNavClick(item.to, e)}
                                        sx={{
                                            mx: 1,
                                            fontFamily: 'Oswald, sans-serif',
                                            textTransform: 'none',
                                            letterSpacing: '0.05em',
                                            fontWeight: 400,
                                            color: pathname === item.to
                                                ? theme.palette.primary.main
                                                : theme.palette.text.primary,
                                            '&:hover': { color: theme.palette.primary.dark },
                                            fontSize: { sm: '0.9rem', md: '1rem' },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                                {/* Переключатель темы */}
                                <IconButton onClick={onToggleMode} sx={{ ml: 2, color: theme.palette.text.primary }} aria-label="Toggle theme">
                                    {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                                </IconButton>
                                {/* Селектор языка */}
                                <Button
                                    onClick={handleLangButtonClick}
                                    endIcon={<ExpandMoreIcon />}
                                    sx={{
                                        ml: 2,
                                        fontFamily: 'Oswald, sans-serif',
                                        textTransform: 'none',
                                        letterSpacing: '0.05em',
                                        color: theme.palette.text.primary,
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: 1,
                                        '&:hover': {
                                            backgroundColor: theme.palette.action.hover,
                                            borderColor: theme.palette.primary.main,
                                        },
                                    }}
                                >
                                    {i18n.language.toUpperCase()}
                                </Button>
                                <Menu
                                    anchorEl={langAnchorEl}
                                    open={isLangMenuOpen}
                                    onClose={handleLangMenuClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                >
                                    {['ru', 'en', 'kg'].map(lng => (
                                        <MenuItem key={lng} selected={i18n.language === lng} onClick={() => changeLanguage(lng)} sx={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                            {lng.toUpperCase()}
                                        </MenuItem>
                                    ))}
                                </Menu>
                                {/* Кнопка «Связаться с нами» */}
                                <Button
                                    variant="contained"
                                    component={Link}
                                    to="/contact"
                                    sx={{
                                        ml: 2,
                                        fontFamily: 'Oswald, sans-serif',
                                        textTransform: 'none',
                                        letterSpacing: '0.05em',
                                        px: 2,
                                        py: 1,
                                        fontSize: '0.875rem',
                                        backgroundColor: theme.palette.button.primary,
                                        color: theme.palette.common.white,
                                        '&:hover': { backgroundColor: theme.palette.button.primaryDark },
                                    }}
                                >
                                    {t('header.contactUs')}
                                </Button>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton onClick={onToggleMode} sx={{ color: theme.palette.text.primary, mr: 1 }} aria-label="Toggle theme">
                                    {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                                </IconButton>
                                <IconButton onClick={handleLangButtonClick} sx={{ color: theme.palette.text.primary, mr: 1 }} aria-label="Select language">
                                    <Typography variant="body2" sx={{ fontFamily: 'Oswald, sans-serif' }}>{i18n.language.toUpperCase()}</Typography>
                                    <ExpandMoreIcon fontSize="small" />
                                    '</IconButton>
                                <IconButton edge="end" onClick={handleDrawerToggle} sx={{ color: theme.palette.text.primary }} aria-label="Open menu">
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
                <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
                    {drawer}
                </Drawer>
            </AppBar>
            <Toolbar />
            <Menu anchorEl={langAnchorEl} open={isLangMenuOpen} onClose={handleLangMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                {['ru', 'en', 'kg'].map(lng => (
                    <MenuItem key={lng} selected={i18n.language === lng} onClick={() => changeLanguage(lng)} sx={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        {lng.toUpperCase()}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
