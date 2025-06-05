import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { Map as MapIcon, SatelliteAlt as SatelliteIcon, Layers as LayersIcon } from '@mui/icons-material';

const services = [
    { title: 'Топографическая съемка', icon: <MapIcon fontSize="large" />, description: 'Инженерно-геодезические изыскания' },
    { title: '3D моделирование', icon: <SatelliteIcon fontSize="large" />, description: 'Создание электронно-цифровых карт' },
    { title: 'Оцифровка карт', icon: <LayersIcon fontSize="large" />, description: 'Векторизация картографических материалов' },
];

const ServicesSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 8, background: theme.palette.background.default }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 700 }}>
                Наши услуги
            </Typography>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card elevation={3} sx={{ height: '100%' }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                {service.icon}
                                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServicesSection;