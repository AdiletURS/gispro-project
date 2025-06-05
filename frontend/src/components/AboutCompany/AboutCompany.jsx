// src/components/AboutCompany/AboutCompany.jsx

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    useTheme,
    styled,
    useMediaQuery,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useTranslation } from 'react-i18next';

// Стилизованное поле для иконок преимуществ
const StyledIconBox = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    fontSize: '3rem',
    transition: 'transform 0.3s ease',
    '& svg': {
        fontSize: 'inherit',
        transition: 'transform 0.3s ease',
    },
    '&:hover svg': {
        transform: 'scale(1.1) rotate(-5deg)',
    },
}));

// Стилизованная ссылка «Подробнее о компании»
const StyledLink = styled(Link)(({ theme }) => ({
    fontFamily: '"Oswald", sans-serif',
    fontWeight: 400,
    fontSize: '1.1rem',
    letterSpacing: '0.05em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        transform: 'translateX(6px)',
        backgroundColor: `${theme.palette.primary.main}17`,
        color: theme.palette.primary.dark,
        '& svg': {
            transform: 'translateX(3px)',
            stroke: theme.palette.primary.dark,
        },
    },
    '& svg': {
        fontSize: '1.2rem',
        verticalAlign: 'middle',
        transition: 'transform 0.3s ease',
        stroke: theme.palette.primary.main,
        strokeWidth: 2,
    },
}));

export default function AboutCompany() {
    const { t } = useTranslation();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    // Достаём массив фактов и преимуществ из JSON-файла локализации
    const facts = t('aboutCompany.facts', { returnObjects: true });
    const advantages = t('aboutCompany.advantages', { returnObjects: true });

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, sm: 8, md: 10 },
                backgroundColor: theme.palette.background.default,
            }}
        >
            {/* Увеличиваем контейнер до lg, чтобы учесть более длинные строки на кыргызском */}
            <Container maxWidth="lg" sx={{ textAlign: 'center', px: { xs: 2, md: 0 } }}>
                {/* Заголовок */}
                <Typography
                    variant={isXs ? 'h4' : isSm ? 'h3' : 'h4'}
                    gutterBottom
                    sx={{
                        fontFamily: 'Oswald, sans-serif',
                        fontWeight: 400,
                        mb: { xs: 2, sm: 3, md: 4 },
                        color: theme.palette.text.primary,
                        letterSpacing: '0.05em',
                    }}
                >
                    {t('aboutCompany.heading')}
                </Typography>

                {/* Ключевые факты */}
                <Grid
                    container
                    justifyContent="center"
                    spacing={isXs ? 1 : 3}
                    sx={{ mb: { xs: 3, md: 6 } }}
                >
                    {facts.map((text, index) => (
                        <React.Fragment key={text}>
                            <Grid item>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'Oswald, sans-serif',
                                        fontWeight: 400,
                                        color: theme.palette.text.primary,
                                        px: 1,
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                    }}
                                >
                                    {text}
                                </Typography>
                            </Grid>
                            {index < facts.length - 1 && !isXs && (
                                <Grid item>
                                    <Typography
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontFamily: 'Oswald, sans-serif',
                                            fontSize: '1.4rem',
                                            lineHeight: 0.5,
                                        }}
                                    >
                                        •
                                    </Typography>
                                </Grid>
                            )}
                        </React.Fragment>
                    ))}
                </Grid>

                {/* Преимущества */}
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                    sx={{ mb: { xs: 4, md: 6 } }}
                >
                    {advantages.map((adv) => (
                        <Grid key={adv.text} item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                            <Box
                                sx={{
                                    height: '100%',
                                    flex: 1,
                                    textAlign: 'center',
                                    p: { xs: 2, sm: 3, md: 4 },
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: `1px solid ${theme.palette.divider}`,
                                    transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        borderColor: theme.palette.primary.main,
                                        boxShadow: `0 8px 24px -4px ${theme.palette.primary.main}20`,
                                    },
                                }}
                            >
                                <StyledIconBox>
                                    {adv.icon === 'BuildOutlinedIcon' && <BuildOutlinedIcon />}
                                    {adv.icon === 'SupportAgentOutlinedIcon' && <SupportAgentOutlinedIcon />}
                                    {adv.icon === 'VerifiedOutlinedIcon' && <VerifiedOutlinedIcon />}
                                </StyledIconBox>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: 'Oswald, sans-serif',
                                        fontWeight: 400,
                                        flexGrow: 1,
                                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                                        color: theme.palette.text.primary,
                                        letterSpacing: '0.02em',
                                    }}
                                >
                                    {adv.text}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Ссылка «Подробнее о компании» */}
                <Box>
                    <StyledLink href="/about" underline="none">
                        {t('aboutCompany.link')}
                        <ArrowForwardIosIcon />
                    </StyledLink>
                </Box>
            </Container>
        </Box>
    );
}
