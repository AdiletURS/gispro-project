// src/components/TeamSection/TeamSection.jsx
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    useTheme
} from '@mui/material';

const teamMembers = [
    {
        name: 'Александр Иванов',
        role: 'Генеральный директор',
        photo: '/assets/team/alexander.jpg',
        quote: 'Мне нравится строить команды и делать сложное простым.',
    },
    {
        name: 'Елена Смирнова',
        role: 'Технический директор',
        photo: '/assets/team/elena.jpg',
        quote: 'Каждый новый проект — это шанс применить лучшие инженерные практики.',
    },
    {
        name: 'Дмитрий Кузнецов',
        role: 'Ведущий геодезист',
        photo: '/assets/team/dmitry.jpg',
        quote: 'Геодезия — это наука о точности, а я люблю точность во всём.',
    },
    {
        name: 'Мария Петрова',
        role: 'UI/UX-дизайнер',
        photo: '/assets/team/maria.jpg',
        quote: 'Создавать интуитивно понятные интерфейсы — моя страсть.',
    },
];

export default function TeamSection() {
    const theme = useTheme();
    const bg = theme.palette.mode === 'light' ? '#fafafa' : '#1f2024';

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

                <Grid container spacing={4}>
                    {teamMembers.map((member, idx) => (
                        <Grid key={idx} item xs={12} sm={6} md={3}>
                            <Card
                                sx={{
                                    textAlign: 'center',
                                    py: 4,
                                    backgroundColor: theme.palette.background.paper,
                                    boxShadow: 2,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 6,
                                    }
                                }}
                            >
                                <Avatar
                                    src={member.photo}
                                    alt={member.name}
                                    sx={{
                                        width: 96,
                                        height: 96,
                                        mx: 'auto',
                                        mb: 2,
                                        border: `2px solid ${theme.palette.primary.main}`
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontFamily: 'Oswald, sans-serif', mb: 0.5 }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary"
                                        sx={{ mb: 1 }}
                                    >
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        “{member.quote}”
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
