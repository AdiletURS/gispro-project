// src/components/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useTranslation();

    // Анимации
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, sm: 8, md: 10 },
                backgroundColor: theme.palette.background.default,
            }}
            ref={ref}
        >
            <Container
                maxWidth="md"
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    p: { xs: 3, sm: 4, md: 6 },
                    borderRadius: 2,
                    boxShadow: theme.shadows[1],
                    textAlign: 'center',
                }}
            >
                <motion.div variants={itemVariants}>
                    <Typography
                        variant={isXs ? 'h4' : isSm ? 'h4' : 'h3'}
                        gutterBottom
                        sx={{
                            fontFamily: 'Oswald, sans-serif',
                            fontWeight: 400,
                            mb: { xs: 2, sm: 3, md: 4 },
                            letterSpacing: '0.05em',
                        }}
                    >
                        {t('whyChooseUs.title')}
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="body1"
                        color="text.primary"
                        sx={{
                            mb: { xs: 3, sm: 4, md: 5 },
                            lineHeight: 1.6,
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                            maxWidth: { xs: '100%', sm: 560, md: 640 },
                            mx: 'auto',
                        }}
                    >
                        {t('whyChooseUs.description')}
                    </Typography>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Button
                        variant="contained"
                        size={isXs ? 'medium' : 'large'}
                        fullWidth={isXs}
                        sx={{
                            fontFamily: 'Oswald, sans-serif',
                            textTransform: 'none',
                            letterSpacing: '0.05em',
                            px: { xs: 2, sm: 4 },
                            py: { xs: 1, sm: 1.5 },
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            backgroundColor: theme.palette.button.primary,
                            '&:hover': {
                                backgroundColor: theme.palette.button.primaryDark,
                            },
                            maxWidth: { xs: '100%', sm: 240 },
                            mx: isXs ? 0 : 'auto',
                        }}
                        href="/contact"
                    >
                        {t('whyChooseUs.contactButton')}
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
}
