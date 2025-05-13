// src/components/ProcessAnimationSection/ProcessAnimationSection.jsx
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import Lottie from 'lottie-react';
// Импорт вашей Lottie-анимации (скачайте JSON-файл с нужной анимацией)
import processAnimation from '../../assets/animations/process.json';

export default function ProcessAnimationSection() {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                py: 8,
                backgroundColor:
                    theme.palette.mode === 'light' ? '#fafafa' : '#1f2024',
            }}
        >
            <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontFamily: 'Oswald, sans-serif' }}
                >
                    Как мы работаем
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    От топографической съёмки до готового веб-интерфейса — каждый шаг прозрачный и понятный.
                </Typography>

                {/* Lottie-анимация */}
                <Box
                    sx={{
                        maxWidth: 400,
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

                {/*
        // Альтернативно, если у вас есть видеоролик:
        <Box
          component="video"
          src="/assets/videos/process.mp4"
          controls
          loop
          muted
          autoPlay
          sx={{
            width: '100%',
            maxWidth: 600,
            borderRadius: 2,
          }}
        />
        */}
            </Container>
        </Box>
    );
}
