// src/components/Footer/Footer.jsx

import React, { useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Stack,
    IconButton,
    useTheme,
    Divider,
    useMediaQuery,
} from '@mui/material';
import { Phone, Email, Schedule } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const theme = useTheme();
    const accentColor = theme.palette.primary.main;
    const mapContainer = useRef(null);
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const initMap = () => {
            window.DG.then(() => {
                // Создаём карту с заданным центром и масштабом
                const map = window.DG.map(mapContainer.current, {
                    center: [42.851895, 74.593911], // координаты компании
                    zoom: 16,
                });

                // Ставим маркер на координаты компании
                window.DG.marker([42.851895, 74.593911])
                    .addTo(map)
                    .bindPopup(t('footer.companyName')) // подпись к маркеру
                    .openPopup();
            });
        };

        if (!window.DG) {
            const script = document.createElement('script');
            script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }, [t]);

    // Ссылка в приложение 2ГИС по тем же координатам
    const gisLink = t('footer.mapLink');

    const socialIcons = [
        { icon: <FacebookIcon />, link: 'https://www.facebook.com/profile.php?id=100076382612877' },
        { icon: <InstagramIcon />, link: 'https://www.instagram.com/gispro.kg' },
        { icon: <WhatsAppIcon />, link: 'https://wa.me/996558598887' },
        { icon: <TelegramIcon />, link: 'https://t.me/maksatmm' },
    ];

    // Массив навигации (локализованные метки и пути)
    const navItems = t('footer.navigation', { returnObjects: true });

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.background.paper,
                borderTop: `1px solid ${theme.palette.divider}`,
                pt: { xs: 4, md: 8 },
                pb: { xs: 2, md: 4 },
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={6} sx={{ px: { xs: 1, md: 2 } }}>
                    {/* Контакты */}
                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'Oswald, sans-serif',
                                fontWeight: 500,
                                mb: 3,
                                color: 'text.primary',
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                letterSpacing: '0.05em',
                            }}
                        >
                            {t('footer.contactsHeading')}
                        </Typography>
                        <Stack spacing={2}>
                            {/* Телефоны */}
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                    <Phone fontSize="small" sx={{ color: accentColor, mr: 1.5 }} />
                                    <Typography variant="body2" color="text.primary">
                                        {t('footer.phonesLabel')}
                                    </Typography>
                                </Box>
                                <Stack spacing={0.5} sx={{ pl: 3.5 }}>
                                    {t('footer.phoneNumbers', { returnObjects: true }).map((num, i) => (
                                        <Link
                                            key={i}
                                            href={`tel:${num}`}
                                            sx={{
                                                color: 'text.secondary',
                                                textDecoration: 'none',
                                                '&:hover': { color: accentColor },
                                            }}
                                        >
                                            {num}
                                        </Link>
                                    ))}
                                </Stack>
                            </Box>

                            {/* Email */}
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                    <Email fontSize="small" sx={{ color: accentColor, mr: 1.5 }} />
                                    <Typography variant="body2" color="text.primary">
                                        {t('footer.emailLabel')}
                                    </Typography>
                                </Box>
                                <Link
                                    href={`mailto:${t('footer.emailAddress')}`}
                                    sx={{
                                        color: 'text.secondary',
                                        textDecoration: 'none',
                                        pl: 3.5,
                                        '&:hover': { color: accentColor },
                                    }}
                                >
                                    {t('footer.emailAddress')}
                                </Link>
                            </Box>

                            {/* Режим работы */}
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                    <Schedule fontSize="small" sx={{ color: accentColor, mr: 1.5 }} />
                                    <Typography variant="body2" color="text.primary">
                                        {t('footer.hoursLabel')}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ pl: 3.5 }}
                                >
                                    {t('footer.hours')}
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            {/* Адрес */}
                            <Box>
                                <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                                    {t('footer.address')}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Навигация */}
                    <Grid item xs={12} md={2}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'Oswald, sans-serif',
                                fontWeight: 500,
                                mb: 3,
                                color: 'text.primary',
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                letterSpacing: '0.05em',
                            }}
                        >
                            {t('footer.navigationHeading')}
                        </Typography>
                        <Stack spacing={1.5}>
                            {navItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        '&:hover': { color: accentColor, transform: 'translateX(5px)' },
                                        fontSize: { xs: '0.875rem', md: '1rem' },
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Соцсети */}
                    <Grid item xs={12} md={2}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'Oswald, sans-serif',
                                fontWeight: 500,
                                mb: 3,
                                color: 'text.primary',
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                letterSpacing: '0.05em',
                            }}
                        >
                            {t('footer.socialHeading')}
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent={isXs ? 'flex-start' : 'center'}>
                            {socialIcons.map((social, idx) => (
                                <IconButton
                                    key={idx}
                                    component={Link}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener"
                                    sx={{
                                        bgcolor: theme.palette.mode === 'light' ? '#f0f0f0' : '#303030',
                                        color: accentColor,
                                        width: { xs: 44, md: 48 },
                                        height: { xs: 44, md: 48 },
                                        borderRadius: '50%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                            bgcolor: accentColor,
                                            color: theme.palette.common.white,
                                        },
                                    }}
                                >
                                    {React.cloneElement(social.icon, { fontSize: 'large' })}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Карта */}
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'Oswald, sans-serif',
                                fontWeight: 500,
                                mb: 3,
                                color: 'text.primary',
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                letterSpacing: '0.05em',
                            }}
                        >
                            {t('footer.locationHeading')}
                        </Typography>
                        <Link href={gisLink} target="_blank" rel="noopener" sx={{ display: 'block' }}>
                            <Box
                                sx={{
                                    height: { xs: 250, sm: 300, md: 300 },
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: theme.shadows[4],
                                    border: `1px solid ${theme.palette.divider}`,
                                    width: '170%',
                                    transition: 'box-shadow 0.3s ease',
                                }}
                            >
                                <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
                            </Box>
                        </Link>
                    </Grid>
                </Grid>

                {/* Копирайт */}
                <Box
                    sx={{
                        mt: { xs: 4, md: 8 },
                        textAlign: 'center',
                        borderTop: `1px solid ${theme.palette.divider}`,
                        pt: { xs: 2, md: 4 },
                    }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                        }}
                    >
                        © {new Date().getFullYear()} GISPro
                        <Box
                            component="span"
                            sx={{ width: 4, height: 4, bgcolor: 'text.secondary', borderRadius: '50%' }}
                        />
                        {t('footer.copyright')}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
