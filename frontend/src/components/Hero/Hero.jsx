// src/components/Hero/Hero.jsx
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import lightBg from '../../assets/images/home-light.jpg';
import darkBg from '../../assets/images/home-light.jpg'; // если тёмного варианта нет, используем тот же

export default function Hero() {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    // i18next
    const { t } = useTranslation();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * (isMobile ? 0.1 : 0.3),
                duration: isMobile ? 0.4 : 0.6,
            },
        }),
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                mt: -2,
                position: 'relative',
                px: 0,
                py: { xs: 2, md: 0 }, // вертикальные отступы только на мобильных
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, md: 500 },
                    overflow: 'hidden',
                    borderRadius: theme.shape.borderRadius,
                }}
            >
                {/* Фон */}
                <Box
                    component="img"
                    src={isLight ? lightBg : darkBg}
                    alt="Background"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: isLight ? 'none' : 'brightness(0.8)',
                    }}
                />

                {/* Текстовый блок поверх */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: { xs: '100%', md: '50%' },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: theme.palette.common.white,
                        p: { xs: 2, md: 4 },
                        ml: { xs: 0, md: 5 },
                        background: {
                            xs: `linear-gradient(
                                to bottom,
                                rgba(0, 0, 0, 0.6) 0%,
                                rgba(0, 0, 0, 0.4) 100%
                              )`,
                            md: 'none',
                        },
                    }}
                >
                    {/* Заголовок */}
                    <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn}>
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: { xs: '2rem', md: '3rem' },
                                lineHeight: 1.2,
                            }}
                        >
                            {t('hero.welcome')}
                        </Typography>
                    </motion.div>

                    {/* Основной текст */}
                    <motion.div initial="hidden" animate="visible" custom={1} variants={fadeIn}>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                fontSize: { xs: '0.875rem', md: '1rem' },
                                lineHeight: 1.5,
                            }}
                        >
                            {t('hero.subtitle')}
                        </Typography>
                    </motion.div>

                    {/* Дополнительный текст (скрыт на мобильных) */}
                    <motion.div initial="hidden" animate="visible" custom={2} variants={fadeIn}>
                        <Typography
                            variant="body2"
                            sx={{
                                mb: 3,
                                color: theme.palette.grey[300],
                                display: { xs: 'none', md: 'block' },
                                fontSize: '1rem',
                                lineHeight: 1.4,
                            }}
                        >
                            {t('hero.description')}
                        </Typography>
                    </motion.div>

                    {/* Кнопка перейти в «О компании» */}
                    <motion.div initial="hidden" animate="visible" custom={3} variants={fadeIn}>
                        <Button
                            variant="contained"
                            size={isMobile ? 'medium' : 'large'}
                            sx={{
                                fontFamily: 'Oswald, sans-serif',
                                textTransform: 'none',
                                letterSpacing: '0.05em',
                                px: { xs: 3, md: 4 },
                                py: 1.5,
                                width: { xs: '100%', md: 'auto' },
                                fontSize: { xs: '0.875rem', md: '1rem' },
                                backgroundColor: theme.palette.button.primary,
                                color: theme.palette.common.white,
                                '&:hover': {
                                    backgroundColor: theme.palette.button.primaryDark,
                                },
                            }}
                            href="/about"
                        >
                            {t('hero.button')}
                        </Button>
                    </motion.div>
                </Box>
            </Box>
        </Container>
    );
}
