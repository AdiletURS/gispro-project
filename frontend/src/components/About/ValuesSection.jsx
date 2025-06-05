import React from 'react';
import {
    Box, Typography, Grid, Paper, useTheme, useMediaQuery, Container
} from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle as CheckIcon } from '@mui/icons-material';

const ValuesSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

    const values = [
        {
            title: 'Качество и точность',
            description: 'Мы используем передовые технологии и стандарты ISO для гарантии достоверности данных и высочайшего качества результатов.',
            icon: <CheckIcon fontSize="large" />
        },
        {
            title: 'Профессионализм',
            description: 'Наша команда состоит из сертифицированных специалистов с опытом работы в ГИС-технологиях более 10 лет.',
            icon: <CheckIcon fontSize="large" />
        },
        {
            title: 'Инновации',
            description: 'Мы постоянно внедряем новые технологии и методики для решения сложных пространственных задач.',
            icon: <CheckIcon fontSize="large" />
        },
        {
            title: 'Клиентоориентированность',
            description: 'Разрабатываем решения, полностью отвечающие бизнес-целям и задачам каждого клиента.',
            icon: <CheckIcon fontSize="large" />
        },
        {
            title: 'Ответственность',
            description: 'Соблюдаем сроки и бюджет, обеспечивая прозрачность и отчётность на каждом этапе проекта.',
            icon: <CheckIcon fontSize="large" />
        },
        {
            title: 'Экспертиза',
            description: 'Более 50 успешно реализованных проектов по всей территории Кыргызстана.',
            icon: <CheckIcon fontSize="large" />
        }
    ];

    return (
        <Box sx={{
            py: 10,
            position: 'relative',
            overflow: 'hidden',
            background: theme.palette.background.default,
        }}>
            {/* Геометрические элементы */}
            <Box sx={{
                position: 'absolute',
                top: -100,
                left: -100,
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
                right: -50,
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
                right: '5%',
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
                        Наши ценности
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                variants={fadeIn}
                                custom={index * 0.3 + 1}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        borderRadius: 2,
                                        border: `1px solid ${theme.palette.divider}`,
                                        background: theme.palette.background.paper,
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
                                            borderColor: theme.palette.primary.light,
                                            transform: 'translateY(-5px)'
                                        },
                                        '&:before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: 5,
                                            height: '100%',
                                            background: theme.palette.primary.main
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2
                                    }}>
                                        <Box sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            background: theme.palette.primary.light,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mr: 3
                                        }}>
                                            {React.cloneElement(value.icon, {
                                                sx: {
                                                    fontSize: 28,
                                                    color: theme.palette.primary.main
                                                }
                                            })}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                color: theme.palette.primary.dark
                                            }}
                                        >
                                            {value.title}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.7,
                                            pl: 8
                                        }}
                                    >
                                        {value.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={3}
                    style={{ marginTop: 60 }}
                >
                    <Box sx={{
                        textAlign: 'center',
                        mt: 8,
                        p: 4,
                        borderRadius: 2,
                        border: `1px solid ${theme.palette.divider}`,
                        maxWidth: 800,
                        mx: 'auto',
                        background: theme.palette.background.paper,
                        position: 'relative',
                        overflow: 'hidden',
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, transparent 70%)`,
                            opacity: 0.05,
                            zIndex: 0
                        }
                    }}>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            Наша миссия
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                lineHeight: 1.7,
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            Предоставлять клиентам качественные и надёжные ГИС-решения, способствующие оптимизации управления территориями, развитию инфраструктуры и принятию обоснованных решений на основе актуальных данных.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ValuesSection;