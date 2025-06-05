import React from 'react';
import { Box, Typography, Grid, Paper, Link, useTheme } from '@mui/material';
import { LocationOn as LocationIcon, Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';

const ContactSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 8, background: theme.palette.background.default }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 700 }}>
                Контакты
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <LocationIcon color="primary" sx={{ mr: 2 }} />
                            <Typography variant="h6">Адрес</Typography>
                        </Box>
                        <Typography variant="body1" sx={{ ml: 4 }}>
                            123 Улица, Город, Страна
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 2 }}>
                            <PhoneIcon color="primary" sx={{ mr: 2 }} />
                            <Typography variant="h6">Телефон</Typography>
                        </Box>
                        <Link href="tel:+1234567890" sx={{ ml: 4 }}>
                            +1 (234) 567-890
                        </Link>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 2 }}>
                            <EmailIcon color="primary" sx={{ mr: 2 }} />
                            <Typography variant="h6">Email</Typography>
                        </Box>
                        <Link href="mailto:info@example.com" sx={{ ml: 4 }}>
                            info@example.com
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h6">Свяжитесь с нами для получения дополнительной информации</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactSection;