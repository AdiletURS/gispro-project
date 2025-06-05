// src/components/AchievementsSection/AchievementsSection.jsx
import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

export default function AchievementsSection() {
    const { t } = useTranslation();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

    // Берём массив меток (labels) из JSON (возвращаем объекты как массив строк)
    const statLabels = t('achievementsSection.stats', { returnObjects: true });

    // Жёстко проставленные числовые значения для каждого пункта
    const statValues = [11, 100, 1200, 20, 6, 50];

    return (
        <Box component="section" sx={{ py: 8 }}>
            <Container maxWidth="lg" ref={ref}>
                {/* Заголовок */}
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                        fontFamily: 'Oswald, sans-serif',
                        mb: { xs: 2, md: 4 },
                        letterSpacing: '0.05em',
                        color: theme.palette.text.primary,
                    }}
                >
                    {t('achievementsSection.heading')}
                </Typography>

                {/* Сетка с показателями */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: { xs: 2, md: 4 },
                        mt: { xs: 2, md: 4 },
                    }}
                >
                    {statLabels.map((label, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                p: { xs: 2, md: 4 },
                                borderRadius: 2,
                                textAlign: 'center',
                                backgroundColor: theme.palette.background.default,
                                transition: 'background-color 0.3s, transform 0.3s',
                                '&:hover': {
                                    backgroundColor:
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[100]
                                            : theme.palette.grey[800],
                                },
                            }}
                        >
                            <Typography variant="h3" sx={{ fontFamily: 'Oswald, sans-serif', mb: 1, color: theme.palette.text.primary }}>
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={statValues[idx]}
                                        duration={1.5}
                                        separator=" "
                                        key={inView ? 'start' : 'end'}
                                    />
                                ) : (
                                    0
                                )}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
