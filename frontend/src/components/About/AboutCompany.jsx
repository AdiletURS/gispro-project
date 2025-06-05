import React from 'react';
import {
    Box, Typography, Grid, useTheme, useMediaQuery, Container
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle as CheckIcon } from '@mui/icons-material';

const AboutCompany = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { t } = useTranslation();

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    const features = [
        {
            title: t('about.company.feature1'),
            icon: <CheckIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
        },
        {
            title: t('about.company.feature2'),
            icon: <CheckIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
        },
        {
            title: t('about.company.feature3'),
            icon: <CheckIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
        },
        {
            title: t('about.company.feature4'),
            icon: <CheckIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
        },
        {
            title: t('about.company.feature5'),
            icon: <CheckIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
        },
        {
            title: t('about.company.feature6'),
            icon: <CheckIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
        }
    ];

    // Разделяем фичи на две колонки
    const column1 = features.slice(0, 3);
    const column2 = features.slice(3, 6);

    return (
        <Box sx={{
            py: 12,
            position: 'relative',
            overflow: 'hidden',
            background: theme.palette.background.default,
        }}>
            {/* Геометрические элементы */}
            <Box sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: 300,
                height: 300,
                borderRadius: '50%',
                border: `2px solid ${theme.palette.primary.main}`,
                opacity: 0.05,
                zIndex: 0
            }} />

            <Box sx={{
                position: 'absolute',
                bottom: 50,
                left: -50,
                width: 150,
                height: 150,
                border: `1px solid ${theme.palette.secondary.main}`,
                transform: 'rotate(45deg)',
                opacity: 0.05,
                zIndex: 0
            }} />

            <Box sx={{
                position: 'absolute',
                top: '30%',
                left: '5%',
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: `1px solid ${theme.palette.primary.main}`,
                opacity: 0.05,
                zIndex: 0
            }} />

            <Container maxWidth="lg">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={0.5}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        gutterBottom
                        sx={{
                            textAlign: 'center',
                            fontWeight: 800,
                            mb: 6,
                            position: 'relative',
                            display: 'inline-block',
                            width: '100%',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -10,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 80,
                                height: 4,
                                background: theme.palette.primary.main,
                                borderRadius: 2
                            }
                        }}
                    >
                        {t('about.company.title')}
                    </Typography>
                </motion.div>

                <Grid container spacing={6} alignItems="flex-start">
                    {/* Текст слева */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={fadeIn}
                            custom={1}
                        >
                            <Typography
                                variant="h6"
                                component="p"
                                gutterBottom
                                sx={{
                                    mb: 3,
                                    color: theme.palette.text.secondary,
                                    fontWeight: 500,
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem'
                                }}
                            >
                                {t('about.company.description1')}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                sx={{
                                    mb: 4,
                                    color: theme.palette.text.secondary,
                                    fontWeight: 500,
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem'
                                }}
                            >
                                {t('about.company.description2')}
                            </Typography>
                        </motion.div>
                    </Grid>

                    {/* Преимущества справа в виде таблицы 2x3 */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={fadeIn}
                            custom={1.5}
                        >
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                gap: 3
                            }}>
                                {/* Первая колонка */}
                                <Box>
                                    {column1.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 3,
                                                p: 2,
                                                borderRadius: 2,
                                                borderLeft: `3px solid ${theme.palette.primary.main}`,
                                                background: theme.palette.background.paper,
                                                boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                                    transform: 'translateY(-2px)'
                                                }
                                            }}>
                                                <Box sx={{ mr: 2, color: theme.palette.primary.main }}>
                                                    {feature.icon}
                                                </Box>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontWeight: 500,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    {feature.title}
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                    ))}
                                </Box>

                                {/* Вторая колонка */}
                                <Box>
                                    {column2.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 3,
                                                p: 2,
                                                borderRadius: 2,
                                                borderLeft: `3px solid ${theme.palette.primary.main}`,
                                                background: theme.palette.background.paper,
                                                boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                                                    transform: 'translateY(-2px)'
                                                }
                                            }}>
                                                <Box sx={{ mr: 2, color: theme.palette.primary.main }}>
                                                    {feature.icon}
                                                </Box>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontWeight: 500,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    {feature.title}
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                    ))}
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutCompany;