//
// import React, { useState, useRef } from 'react';
// import {
//     Box,
//     Typography,
//     Collapse,
//     IconButton,
//     useTheme,
//     Button
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { motion } from 'framer-motion';
//
// import itDevImg from '../../assets/images/it-development.jpg';
// import gisImg from '../../assets/images/gis.jpg';
// import designImg from '../../assets/images/design.jpg';
// import devopsImg from '../../assets/images/devops.jpg';
//
// const services = [
//     {
//         image: itDevImg,
//         title: 'IT и разработка',
//         description: 'Разработка веб-сервисов, мобильных и корпоративных приложений под ключ.',
//     },
//     {
//         image: gisImg,
//         title: 'Геодезия и ГИС',
//         description: 'Топографическая съёмка, 3D-модели и создание ГИС-порталов.',
//     },
//     {
//         image: designImg,
//         title: 'Проектирование',
//         description: 'Генеральные планы, проектирование зданий и инфраструктуры.',
//     },
//     {
//         image: devopsImg,
//         title: 'DevOps и CI/CD',
//         description: 'Настройка серверов, автоматизация процессов и CI/CD.',
//     },
//     {
//         image: devopsImg,
//         title: 'DevOps и CI/CD',
//         description: 'Настройка серверов, автоматизация процессов и CI/CD.',
//     }
// ];
//
// export default function ServicesSection() {
//     const theme = useTheme();
//     const [expandedIdx, setExpandedIdx] = useState(null);
//     const scrollRef = useRef(null);
//
//     const handleToggle = (idx) => {
//         setExpandedIdx(prev => (prev === idx ? null : idx));
//     };
//
//     const scroll = (dir) => {
//         if (!scrollRef.current) return;
//         const amount = scrollRef.current.clientWidth * 0.8;
//         scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
//     };
//
//     return (
//         <Box
//             component="section"
//             sx={{ py: 8, position: 'relative', backgroundColor: theme.palette.background.default }}
//         >
//             <Typography
//                 variant="h4"
//                 align="center"
//                 gutterBottom
//                 sx={{ fontFamily: 'Oswald, sans-serif' }}
//             >
//                 Что мы делаем
//             </Typography>
//
//             <Box sx={{ position: 'relative', mt: 4, px: 4 }}>
//                 <IconButton
//                     onClick={() => scroll(-1)}
//                     sx={{
//                         position: 'absolute',
//                         left: 0,
//                         top: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         backgroundColor: theme.palette.background.paper,
//                         '&:hover': { backgroundColor: theme.palette.action.hover },
//                         zIndex: 2,
//                     }}
//                 >
//                     <ArrowBackIosIcon />
//                 </IconButton>
//
//                 <IconButton
//                     onClick={() => scroll(1)}
//                     sx={{
//                         position: 'absolute',
//                         right: 0,
//                         top: '50%',
//                         transform: 'translate(50%, -50%)',
//                         backgroundColor: theme.palette.background.paper,
//                         '&:hover': { backgroundColor: theme.palette.action.hover },
//                         zIndex: 2,
//                     }}
//                 >
//                     <ArrowForwardIosIcon />
//                 </IconButton>
//
//                 <Box
//                     ref={scrollRef}
//                     sx={{
//                         display: 'flex',
//                         gap: 2,
//                         overflowX: 'hidden',
//                         scrollBehavior: 'smooth',
//                         '&::-webkit-scrollbar': { display: 'none' },
//                         '-ms-overflow-style': 'none',
//                         'scrollbar-width': 'none',
//                     }}
//                 >
//                     {services.map((svc, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, amount: 0.4 }}
//                             transition={{ delay: idx * 0.2, duration: 0.6 }}
//                             style={{ flex: '0 0 25%' }}
//                         >
//                             <Box
//                                 sx={{
//                                     borderRadius: 2,
//                                     overflow: 'hidden',
//                                     backgroundColor: theme.palette.background.default,
//                                     minHeight: 360,
//                                     transition: 'transform 0.1s, box-shadow 0.3s',
//                                     '&:hover': {
//                                         transform: 'translateY(-1px)',
//                                         boxShadow: 3,
//                                     },
//                                 }}
//                             >
//                                 <Box
//                                     component="img"
//                                     src={svc.image}
//                                     alt={svc.title}
//                                     sx={{ width: '100%', height: 180, objectFit: 'cover' }}
//                                 />
//
//                                 <Box sx={{ p: 2 }}>
//                                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                         <Typography variant="h6" sx={{ fontFamily: 'Oswald, sans-serif' }}>
//                                             {svc.title}
//                                         </Typography>
//                                         <IconButton
//                                             onClick={() => handleToggle(idx)}
//                                             size="small"
//                                             sx={{
//                                                 transform: expandedIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
//                                                 transition: 'transform 0.3s',
//                                             }}
//                                         >
//                                             <ExpandMoreIcon />
//                                         </IconButton>
//                                     </Box>
//
//                                     <Collapse in={expandedIdx === idx} timeout="auto" unmountOnExit>
//                                         <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                                             {svc.description}
//                                         </Typography>
//                                         <Button
//                                             variant="outlined"
//                                             size="small"
//                                             sx={{
//                                                 mt: 2,
//                                                 borderColor: theme.palette.primary.main,
//                                                 color: theme.palette.primary.main,
//                                                 '&:hover': { backgroundColor: theme.palette.action.hover },
//                                             }}
//                                             onClick={() => console.log(`Подробнее: ${svc.title}`)}
//                                         >
//                                             Подробнее
//                                         </Button>
//                                     </Collapse>
//                                 </Box>
//                             </Box>
//                         </motion.div>
//                     ))}
//                 </Box>
//             </Box>
//         </Box>
//     );
// }


import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    Collapse,
    IconButton,
    useTheme,
    Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';

import itDevImg from '../../assets/images/it-development.jpg';
import gisImg from '../../assets/images/gis.jpg';
import designImg from '../../assets/images/design.jpg';
import devopsImg from '../../assets/images/devops.jpg';

const services = [
    { image: itDevImg, title: 'IT и разработка', description: 'Разработка веб-сервисов, мобильных и корпоративных приложений под ключ.' },
    { image: gisImg, title: 'Геодезия и ГИС', description: 'Топографическая съёмка, 3D-модели и создание ГИС-порталов.' },
    { image: designImg, title: 'Проектирование', description: 'Генеральные планы, проектирование зданий и инфраструктуры.' },
    { image: devopsImg, title: 'DevOps и CI/CD', description: 'Настройка серверов, автоматизация процессов и CI/CD.' },
];

export default function ServicesSection() {
    const theme = useTheme();
    const [expandedIdx, setExpandedIdx] = useState(null);
    const scrollRef = useRef(null);
    const [maxDrag, setMaxDrag] = useState(0);

    // calculate drag constraints once content is rendered
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            setMaxDrag(el.scrollWidth - el.clientWidth);
        }
    }, []);

    const handleToggle = idx => setExpandedIdx(prev => (prev === idx ? null : idx));
    const scroll = dir => {
        if (!scrollRef.current) return;
        const amount = scrollRef.current.clientWidth * 0.8;
        scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    return (
        <Box component="section" sx={{ py: 8, position: 'relative', backgroundColor: theme.palette.background.default }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Oswald, sans-serif' }}>
                Что мы делаем
            </Typography>

            <Box sx={{ position: 'relative', mt: 4, px: 4 }}>
                <IconButton
                    onClick={() => scroll(-1)}
                    sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translate(-50%, -50%)', bgcolor: theme.palette.background.paper, '&:hover': { bgcolor: theme.palette.action.hover }, zIndex: 2 }}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                <IconButton
                    onClick={() => scroll(1)}
                    sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translate(50%, -50%)', bgcolor: theme.palette.background.paper, '&:hover': { bgcolor: theme.palette.action.hover }, zIndex: 2 }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>

                {/* Обёртка для drag/swipe */}
                <motion.div
                    ref={scrollRef}
                    drag="x"
                    dragConstraints={{ left: -maxDrag, right: 0 }}
                    dragElastic={0.1}
                    style={{ display: 'flex', gap: '16px', cursor: 'grab', overflowX: 'hidden' }}
                    whileTap={{ cursor: 'grabbing' }}
                >
                    {services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ delay: idx * 0.15, duration: 0.4 }}
                            style={{ flex: '0 0 25%' }}
                        >
                            <Box sx={{ borderRadius: 2, overflow: 'hidden', backgroundColor: theme.palette.background.default, minHeight: 360, transition: 'transform 0.1s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-1px)', boxShadow: 3 } }}>
                                <Box component="img" src={svc.image} alt={svc.title} sx={{ width: '100%', height: 180, objectFit: 'cover' }} />
                                <Box sx={{ p: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="h6" sx={{ fontFamily: 'Oswald, sans-serif' }}>{svc.title}</Typography>
                                        <IconButton onClick={() => handleToggle(idx)} size="small" sx={{ transform: expandedIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </Box>
                                    <Collapse in={expandedIdx === idx} timeout="auto" unmountOnExit>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{svc.description}</Typography>
                                        <Button variant="outlined" size="small" sx={{ mt: 2, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { backgroundColor: theme.palette.action.hover } }} onClick={() => console.log(`Подробнее: ${svc.title}`)}>
                                            Подробнее
                                        </Button>
                                    </Collapse>
                                </Box>
                            </Box>
                        </motion.div>
                    ))}
                </motion.div>
            </Box>
        </Box>
    );
}
