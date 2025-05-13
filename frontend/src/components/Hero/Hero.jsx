import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

import lightBg from '../../assets/images/home-light.jpg';
import darkBg from '../../assets/images/home-light.jpg';

export default function Hero() {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: custom => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.3, duration: 0.6 }
        }),
    };

    return (
        <Container maxWidth="lg" sx={{ mt: -2, position: 'relative', p: 0 }}>
            {/* Обёртка для позиционирования */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, md: 500 }, // 600px на десктопе, 300px на мобильных
                    overflow: 'hidden',
                    borderRadius: theme.shape.borderRadius,
                }}
            >
                {/* Фоновая картинка */}
                <Box
                    component="img"
                    src={isLight ? lightBg : darkBg}
                    alt="Background"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                {/* Текстовый слой поверх картинки */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '50%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: 'common.white',
                        p: { xs: 2, md: 4 },
                        marginLeft: 5
                    }}
                >
                    <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn}>
                        <Typography variant="h2" gutterBottom sx={{ fontFamily: 'Oswald, sans-serif' }}>
                            Добро пожаловать в GISPRO
                        </Typography>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" custom={1} variants={fadeIn}>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            GISPRO — ваш надёжный партнёр в сфере геоинформационных систем. Мы предлагаем полный спектр услуг по разработке, поддержке и интеграции ГИС-решений.
                        </Typography>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" custom={2} variants={fadeIn}>
                        <Typography variant="body2" color="grey.200" sx={{ mb: 3 }}>
                            Наши специалисты помогут вам автоматизировать процессы и построить аналитические отчёты, интегрируя ГИС в ваши бизнес-процессы.
                        </Typography>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" custom={3} variants={fadeIn}>
                        <Button variant="contained" size="large">
                            Узнать об GISPRO
                        </Button>
                    </motion.div>
                </Box>
            </Box>
        </Container>
    );
}
