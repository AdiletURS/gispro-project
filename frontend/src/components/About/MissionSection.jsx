import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MissionSection = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Box
            component="section"
            sx={{
                py: 10,
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container
                maxWidth="md"
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    p: { xs: 3, sm: 4, md: 6 },
                    borderRadius: 2,
                    boxShadow: theme.shadows[1],
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        position: 'relative',
                        display: 'inline-block',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -6,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 60,
                            height: 4,
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 2,
                        },
                    }}
                >
                    {t('about.mission.title')}
                </Typography>

                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        maxWidth: 600,
                        mx: 'auto',
                        fontWeight: 500,
                        lineHeight: 1.6,
                        mt: 3,
                        color: theme.palette.text.primary,
                    }}
                >
                    {t('about.mission.description')}
                </Typography>
            </Container>
        </Box>
    );
};

export default MissionSection;
