import React, { useState } from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    useTheme,
    useMediaQuery,
    Card,
    CardMedia,
    Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import itDevImg from '../../assets/images/it-development.jpg';
import gisImg from '../../assets/images/gis.jpg';
import designImg from '../../assets/images/design.jpg';
import constructionImg from '../../assets/images/analitic.jpg'; // Consider replacing this with an analytics image if available

function TabPanel({ children, value, index }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`service-tabpanel-${index}`}
            aria-labelledby={`service-tab-${index}`}
        >
            {value === index && <Box sx={{ pt: { xs: 2, md: 4 } }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `service-tab-${index}`,
        'aria-controls': `service-tabpanel-${index}`,
    };
}

export default function ServicesTabs() {
    const { t } = useTranslation();
    const theme = useTheme();
    const mode = theme.palette.mode;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => setValue(newValue);

    const services = [
        {
            key: 'itDev',
            label: t('servicesTabs.itLabel'),
            image: itDevImg,
            title: t('servicesTabs.itTitle'),
            description: t('servicesTabs.itDescription'),
            points: [
                t('servicesTabs.itPoint1'),
                t('servicesTabs.itPoint2'),
                t('servicesTabs.itPoint3'),
                t('servicesTabs.itPoint4'),
                t('servicesTabs.itPoint5'),
            ],
        },
        {
            key: 'gis',
            label: t('servicesTabs.gisLabel'),
            image: gisImg,
            title: t('servicesTabs.gisTitle'),
            description: t('servicesTabs.gisDescription'),
            points: [
                t('servicesTabs.gisPoint1'),
                t('servicesTabs.gisPoint2'),
                t('servicesTabs.gisPoint3'),
                t('servicesTabs.gisPoint4'),
                t('servicesTabs.gisPoint5'),
            ],
        },
        {
            key: 'design',
            label: t('servicesTabs.designLabel'),
            image: designImg,
            title: t('servicesTabs.designTitle'),
            description: t('servicesTabs.designDescription'),
            points: [
                t('servicesTabs.designPoint1'),
                t('servicesTabs.designPoint2'),
                t('servicesTabs.designPoint3'),
                t('servicesTabs.designPoint4'),
                t('servicesTabs.designPoint5'),
            ],
        },
        {
            key: 'analytics',
            label: t('servicesTabs.analyticsLabel'),
            image: constructionImg,
            title: t('servicesTabs.analyticsTitle'),
            description: t('servicesTabs.analyticsDescription'),
            points: [
                t('servicesTabs.analyticsPoint1'),
                t('servicesTabs.analyticsPoint2'),
                t('servicesTabs.analyticsPoint3'),
                t('servicesTabs.analyticsPoint4'),
                t('servicesTabs.analyticsPoint5'),
            ],
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                backgroundColor: theme.palette.background.default,
                py: { xs: 4, md: 8 },
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 0 } }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        fontFamily: 'Oswald, sans-serif',
                        fontWeight: 400,
                        mb: { xs: 3, md: 5 },
                        letterSpacing: '0.05em',
                        color: theme.palette.text.primary,
                    }}
                >
                    {t('servicesTabs.heading')}
                </Typography>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant={isMobile || isTablet ? 'scrollable' : 'fullWidth'}
                    scrollButtons={isMobile || isTablet ? 'auto' : false}
                    aria-label="Service Tabs"
                    sx={{
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        mb: { xs: 2, md: 4 },
                        '& .MuiTab-root': {
                            fontFamily: 'Oswald, sans-serif',
                            textTransform: 'none',
                            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                            py: { xs: 0.5, md: 1 },
                            color: theme.palette.text.secondary,
                        },
                        '& .Mui-selected': {
                            color: theme.palette.primary.main,
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: theme.palette.primary.main,
                            height: '3px',
                        },
                    }}
                >
                    {services.map((srv, idx) => (
                        <Tab key={srv.key} label={srv.label} {...a11yProps(idx)} />
                    ))}
                </Tabs>

                {services.map((srv, idx) => (
                    <TabPanel key={srv.key} value={value} index={idx}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    gap: { xs: 2, md: 4 },
                                }}
                            >
                                <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 40%' } }}>
                                    <motion.div
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                                            <CardMedia
                                                component="img"
                                                image={srv.image}
                                                alt={srv.label}
                                                sx={{
                                                    height: { xs: 180, sm: 220, md: 260 },
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s ease, filter 0.5s ease',
                                                    filter: mode === 'light' ? 'none' : 'brightness(0.8)',
                                                    '&:hover': {
                                                        transform: 'scale(1.05)',
                                                    },
                                                }}
                                            />
                                        </Card>
                                    </motion.div>
                                </Box>

                                <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 60%' } }}>
                                    <motion.div
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontFamily: 'Oswald, sans-serif',
                                                fontWeight: 600,
                                                mb: 1,
                                                color: theme.palette.text.primary,
                                            }}
                                        >
                                            {srv.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                                            {srv.description}
                                        </Typography>
                                        <Divider sx={{ mb: 2 }} />
                                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                            {srv.points.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                                >
                                                    <Typography
                                                        component="li"
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{ mb: 1, fontSize: { xs: '0.875rem', md: '1rem' }, lineHeight: 1.6 }}
                                                    >
                                                        {item}
                                                    </Typography>
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </motion.div>
                                </Box>
                            </Box>
                        </motion.div>
                    </TabPanel>
                ))}
            </Box>
        </Box>
    );
}
