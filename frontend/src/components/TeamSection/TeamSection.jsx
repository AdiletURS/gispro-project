// src/components/TeamSection/TeamSection.jsx
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    useTheme
} from '@mui/material';

const teamMembers = [
    { name: 'Кыдыр',      role: 'Владелец',        photo: '/assets/team/kydyr.jpg',       quote: 'Сильная команда — залог устойчивого роста компании.' },
    { name: 'Максат',     role: 'Директор',        photo: '/assets/team/maksat.jpg',      quote: 'Хорошее руководство начинается с доверия и прозрачности.' },
    { name: 'Константин', role: 'Проект-менеджер', photo: '/assets/team/konstantin.jpg', quote: 'Организованность — это двигатель любых проектов.' },
    { name: 'Жумабубу',   role: 'Документовед',    photo: '/assets/team/zhumabubu.jpg',   quote: 'Правильная документация экономит сотни часов.' },
    { name: 'Элдияр',     role: 'Программист',     photo: '/assets/team/eldiyar.jpg',     quote: 'Люблю чистый код и сильную архитектуру.' },
    { name: 'Адилет',     role: 'Программист',     photo: '/assets/team/adilet.jpg',      quote: 'Разработка — это не просто код, это создание ценности.' },
];

export default function TeamSection() {
    const theme = useTheme();
    const bg = theme.palette.mode === 'light' ? theme.palette.background.container : theme.palette.background.container;
    const cardBg = theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default;


    return (
        <Box component="section" sx={{ py: 8, backgroundColor: bg }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontFamily: 'Oswald, sans-serif' }}
                >
                    Наша команда
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Профессионалы, объединённые общей целью — создавать надёжные и масштабируемые решения.
                </Typography>

                {/* Здесь используем display: grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 4,       // отступы между карточками
                        '& > *': {
                            height: '360px',             // фиксированная высота карточки
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: theme.shadows[6],
                            }
                        }
                    }}
                >
                    {teamMembers.map((member, idx) => (
                        <Card key={idx} sx={{ backgroundColor: cardBg, boxShadow: theme.shadows[2] }}>
                            <Box sx={{ pt: 4, textAlign: 'center' }}>
                                <Avatar
                                    src={member.photo}
                                    alt={member.name}
                                    sx={{
                                        width: 96,
                                        height: 96,
                                        mx: 'auto',
                                        mb: 2,
                                        border: `2px solid ${theme.palette.primary.main}`,
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography variant="h6" sx={{ fontFamily: 'Oswald, sans-serif', mb: 0.5 }}>
                                    {member.name}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                    {member.role}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    “{member.quote}”
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
