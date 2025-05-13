// // src/components/AchievementsSection/AchievementsSection.jsx
// import React, { useState, useEffect } from 'react';
// import { Box, Grid, Typography, useTheme } from '@mui/material';
// import { useInView } from 'react-intersection-observer';
// import CountUp from 'react-countup';
//
// const stats = [
//     { label: 'Лет на рынке', value: 11 },
//     { label: 'Успешных проектов', value: 100 },
//     { label: 'Довольных клиентов', value: 1200 },
//     { label: 'Сотрудников в штате', value: 50 },
//     { label: 'Менторов', value: 75 },
//     { label: 'Партнёров-компаний', value: 50 },
// ];
//
// export default function AchievementsSection() {
//     const theme = useTheme();
//     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
//     const [startCount, setStartCount] = useState(false);
//
//     useEffect(() => {
//         if (inView) setStartCount(true);
//     }, [inView]);
//
//     return (
//         <Box
//             component="section"
//             ref={ref}
//             sx={{
//                 py: 8,
//             }}
//         >
//             <Typography
//                 variant="h4"
//                 align="center"
//                 gutterBottom
//                 sx={{ fontFamily: 'Oswald, sans-serif' }}
//             >
//                 Наши достижения
//             </Typography>
//
//             <Grid container spacing={4} sx={{ mt: 4 }}>
//                 {stats.map((stat, idx) => (
//                     <Grid key={idx} item xs={12} sm={6} md={4}>
//                         <Box
//                             sx={{
//                                 p: 4,
//                                 borderRadius: 2,
//                                 textAlign: 'center',
//                                 backgroundColor: theme.palette.background.default,
//                                 transition: 'background-color 0.3s, transform 0.3s',
//                                 '&:hover': {
//                                     backgroundColor:
//                                         theme.palette.mode === 'light'
//                                             ? theme.palette.grey[100]
//                                             : theme.palette.grey[800],
//                                     transform: 'translateY(-4px)',
//                                 },
//                             }}
//                         >
//                             <Typography
//                                 variant="h3"
//                                 component="div"
//                                 sx={{ fontFamily: 'Oswald, sans-serif', mb: 1 }}
//                             >
//                                 {startCount ? (
//                                     <CountUp end={stat.value} duration={1.8} separator=" " />
//                                 ) : (
//                                     0
//                                 )}
//                             </Typography>
//                             <Typography variant="subtitle1" color="text.secondary">
//                                 {stat.label}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                                 {(() => {
//                                     switch (stat.label) {
//                                         case 'Лет на рынке':
//                                             return 'Гарантия опыта и качества';
//                                         case 'Успешных проектов':
//                                             return 'Каждый — история успеха';
//                                         case 'Довольных клиентов':
//                                             return 'Наши лучшие партнёры';
//                                         case 'Сотрудников в штате':
//                                             return 'Профессиональная команда';
//                                         case 'Менторов':
//                                             return 'Поддержка 24/7';
//                                         case 'Партнёров-компаний':
//                                             return 'Надёжные союзы';
//                                         default:
//                                             return '';
//                                     }
//                                 })()}
//                             </Typography>
//                         </Box>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     );
// }

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
    { label: 'Лет на рынке', value: 11 },
    { label: 'Успешных проектов', value: 100 },
    { label: 'Довольных клиентов', value: 1200 },
    { label: 'Сотрудников в штате', value: 50 },
    { label: 'Менторов', value: 75 },
    { label: 'Партнёров-компаний', value: 50 },
];

export default function AchievementsSection() {
    const theme = useTheme();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (inView) setStarted(true);
    }, [inView]);

    return (
        <Box component="section" sx={{ py: -3,  }}>
            <Container maxWidth="lg" ref={ref}>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontFamily: 'Oswald, sans-serif' }}
                >
                    Наши достижения
                </Typography>

                {/* CSS Grid: 3 колонки, 2 ряда */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 4,
                        mt: 4,
                    }}
                >
                    {stats.map((stat, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                p: 4,
                                borderRadius: 2,
                                textAlign: 'center',
                                backgroundColor: theme.palette.background.default,
                                transition: 'background-color 0.3s, transform 0.3s',
                                '&:hover': {
                                    backgroundColor:
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[100]
                                            : theme.palette.grey[800],
                                    // transform: 'translateY(-4px)',
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{ fontFamily: 'Oswald, sans-serif', mb: 1 }}
                            >
                                {started
                                    ? <CountUp end={stat.value} duration={1.8} separator=" " />
                                    : 0}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
