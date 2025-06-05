import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            minHeight: isMobile ? '70vh' : '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
            py: isMobile ? 8 : 12,
            px: 2,
        }}>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: 1200,
                    width: '100%',
                    textAlign: isMobile ? 'center' : 'left',
                    px: isMobile ? 2 : 6,
                }}
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeIn}>
                        <Typography
                            variant="overline"
                            sx={{
                                display: 'block',
                                mb: 1,
                                color: theme.palette.primary.main,
                                letterSpacing: 2,
                                fontWeight: 600,
                            }}
                        >
                            {t('about.hero.subtitle')}
                        </Typography>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <Typography
                            variant={isMobile ? "h3" : "h1"}
                            sx={{
                                fontWeight: 800,
                                lineHeight: 1.2,
                                mb: 3,
                                color: theme.palette.text.primary,
                                maxWidth: 800,
                            }}
                        >
                            {t('about.hero.title')}
                        </Typography>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                mb: 4,
                                color: theme.palette.text.secondary,
                                maxWidth: 700,
                                fontWeight: 400,
                                lineHeight: 1.7,
                            }}
                        >
                            {t('about.hero.description')}
                        </Typography>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: 2,
                            mt: 4,
                            justifyContent: isMobile ? 'center' : 'flex-start',
                        }}>

                        </Box>
                    </motion.div>
                </motion.div>
            </Box>
        </Box>
    );
};

export default HeroSection;
