// src/components/ProcessAnimationSection/ProcessAnimationSection.jsx
import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import Lottie from 'lottie-react';
import processAnimation from '../../assets/animations/process.json';
import { useTranslation } from 'react-i18next';

export default function ProcessAnimationSection() {
    const { t } = useTranslation();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const bg = theme.palette.background.container;

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 4, sm: 6, md: 8 },
                backgroundColor: bg,
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    textAlign: 'center',
                    px: { xs: 2, sm: 3, md: 0 },
                }}
            >
                {/* Заголовок */}
                <Typography
                    variant={isXs ? 'h3' : isSm ? 'h4' : 'h4'}
                    gutterBottom
                    sx={{
                        fontFamily: 'Oswald, sans-serif',
                        fontWeight: 400,
                        mb: { xs: 1.5, sm: 2.5, md: 4 },
                        lineHeight: 1.2,
                        letterSpacing: '0.05em',
                        color: theme.palette.text.primary,
                    }}
                >
                    {t('processAnimation.heading')}
                </Typography>

                {/* Текст под заголовком */}
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        mb: { xs: 3, sm: 4, md: 6 },
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                        maxWidth: { xs: '100%', md: '80%' },
                        mx: 'auto',
                        lineHeight: 1.6,
                    }}
                >
                    {t('processAnimation.subtext')}
                </Typography>

                {/* Анимация */}
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: isXs ? 300 : isSm ? 360 : 480,
                        mx: 'auto',
                    }}
                >
                    <Lottie
                        animationData={processAnimation}
                        loop
                        autoplay
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            </Container>
        </Box>
    );
}
