import React, { useState } from 'react';
import {
    Box,
    Container,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import gisImg from '../../assets/images/gis.jpg';

const cases = [
    {
        title: 'Городской ГИС',
        description:
            'Интерактивная веб-карта города с наложением инфраструктуры и аналитическими слоями.',
        image: gisImg,
    },
    {
        title: 'Навигатор для туристов',
        description:
            'Мобильное приложение с офлайн-картами, маршрутами и голосовой навигацией.',
        image: gisImg,
    },
    {
        title: 'Платформа мониторинга',
        description:
            'Система онлайн-мониторинга промышленных объектов в реальном времени.',
        image: gisImg,
    },
];

export default function CasesSection() {
    const theme = useTheme();
    const [openIdx, setOpenIdx] = useState(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    const openDialog = idx => setOpenIdx(idx);
    const closeDialog = () => setOpenIdx(null);

    // фон секции чуть темнее/светлее
    const bg = theme.palette.mode === 'light' ? '#fafafa' : '#1f2024';
    // фоновый цвет карточек — светлый
    const cardBg = theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <Box component="section" sx={{ py: 8, backgroundColor: bg, borderRadius: 2, mt: 4 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                        Наши кейсы
                    </Typography>

                    {/* Три карточки в одну строку, одинаковые по размеру */}
                    <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
                        {cases.map((c, idx) => (
                            <Card
                                key={idx}
                                sx={{
                                    flex: '1 1 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 2,
                                    backgroundColor: cardBg,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: 3,
                                    },
                                    height: '450px',
                                    overflow: 'hidden',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={c.image}
                                    alt={c.title}
                                    sx={{ height: '60%', objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontFamily: 'Oswald, sans-serif', mb: 1 }}
                                    >
                                        {c.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {c.description}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ p: 2, textAlign: 'right' }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() => openDialog(idx)}
                                    >
                                        Узнать подробнее
                                    </Button>
                                </Box>
                            </Card>
                        ))}
                    </Box>

                    {/* Модальное окно */}
                    {openIdx !== null && (
                        <Dialog open onClose={closeDialog} maxWidth="sm" fullWidth>
                            <DialogTitle sx={{ m: 0, p: 2, fontFamily: 'Oswald, sans-serif' }}>
                                {cases[openIdx].title}
                                <IconButton
                                    aria-label="close"
                                    onClick={closeDialog}
                                    sx={{ position: 'absolute', right: 8, top: 8 }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent dividers sx={{ p: 3 }}>
                                <Box
                                    component="img"
                                    src={cases[openIdx].image}
                                    alt={cases[openIdx].title}
                                    sx={{ width: '100%', borderRadius: 1, mb: 2 }}
                                />
                                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                    {cases[openIdx].description}
                                </Typography>
                            </DialogContent>
                        </Dialog>
                    )}
                </Container>
            </Box>
        </motion.div>
    );
}
