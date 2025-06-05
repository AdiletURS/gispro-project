// import React, { useState, useRef, useEffect } from 'react';
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
// // Добавим новое изображение для строительства
// import itDevImg from '../../assets/images/it-development.jpg';
// import gisImg from '../../assets/images/gis.jpg';
// import designImg from '../../assets/images/design.jpg';
// import devopsImg from '../../assets/images/devops.jpg';
// import constructionImg from '../../assets/images/devops.jpg';
//
// const services = [
//     { image: itDevImg, title: 'IT и разработка', description: 'Разработка веб-сервисов, мобильных и корпоративных приложений под ключ.' },
//     { image: gisImg, title: 'Геодезия и ГИС', description: 'Топографическая съёмка, 3D-модели и создание ГИС-порталов.' },
//     { image: designImg, title: 'Проектирование', description: 'Генеральные планы, проектирование зданий и инфраструктуры.' },
//     { image: devopsImg, title: 'DevOps и CI/CD', description: 'Настройка серверов, автоматизация процессов и CI/CD.' },
//     // Новая карточка
//     { image: constructionImg, title: 'Строительство', description: 'Полный цикл строительных работ и технический надзор.' },
// ];
//
// export default function ServicesSection() {
//     const theme = useTheme();
//     const [expandedIdx, setExpandedIdx] = useState(null);
//     const scrollRef = useRef(null);
//     const [maxDrag, setMaxDrag] = useState(0);
//     const [isDragging, setIsDragging] = useState(false);
//
//     useEffect(() => {
//         const el = scrollRef.current;
//         if (el) {
//             setMaxDrag(el.scrollWidth - el.clientWidth);
//         }
//     }, []);
//
//     const handleToggle = idx => setExpandedIdx(prev => (prev === idx ? null : idx));
//
//     const scroll = dir => {
//         if (!scrollRef.current || isDragging) return;
//         const amount = scrollRef.current.clientWidth * 0.8;
//         scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
//     };
//
//     return (
//         <Box component="section" sx={{
//             py: 4,
//             position: 'relative',
//             backgroundColor: theme.palette.background.default,
//             overflow: 'hidden' // Фикс для горизонтального скролла
//         }}>
//             <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Oswald, sans-serif' }}>
//                 Что мы делаем
//             </Typography>
//
//             <Box sx={{ position: 'relative', mt: 4, px: { xs: 2, sm: 4 } }}>
//                 {/* Стрелки */}
//                 <IconButton
//                     onClick={() => scroll(-1)}
//                     aria-label="Предыдущий слайд"
//                     sx={{
//                         position: 'absolute',
//                         left: { xs: 8, sm: 16 },
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         bgcolor: theme.palette.background.paper,
//                         '&:hover': { bgcolor: theme.palette.action.hover },
//                         zIndex: 2,
//                         boxShadow: 3,
//                         [theme.breakpoints.down('sm')]: {
//                             display: 'none'
//                         },
//                     }}
//                 >
//                     <ArrowBackIosIcon />
//                 </IconButton>
//
//                 <IconButton
//                     onClick={() => scroll(1)}
//                     aria-label="Следующий слайд"
//                     sx={{
//                         position: 'absolute',
//                         right: { xs: 8, sm: 16 },
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         bgcolor: theme.palette.background.paper,
//                         '&:hover': { bgcolor: theme.palette.action.hover },
//                         zIndex: 2,
//                         boxShadow: 3,
//                         [theme.breakpoints.down('sm')]: { display: 'none' },
//                     }}
//                 >
//                     <ArrowForwardIosIcon />
//                 </IconButton>
//
//                 {/* Слайдер */}
//                 <motion.div
//                     ref={scrollRef}
//                     drag="x"
//                     dragConstraints={{ right: 0, left: -maxDrag }}
//                     dragElastic={0.05}
//                     onDragStart={() => setIsDragging(true)}
//                     onDragEnd={() => setIsDragging(false)}
//                     style={{
//                         display: 'flex',
//                         gap: '16px',
//                         overflowX: 'scroll',
//                         scrollBehavior: 'smooth',
//                         cursor: isDragging ? 'grabbing' : 'grab',
//                         scrollbarWidth: 'none', // Firefox
//                         msOverflowStyle: 'none', // IE
//                         '&::-webkit-scrollbar': { // Chrome/Safari
//                             display: 'none'
//                         }
//                     }}
//                 >
//                     {services.map((svc, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, amount: 0.4 }}
//                             transition={{ delay: idx * 0.1, duration: 0.3 }}
//                             style={{
//                                 flex: '0 0 calc(25% - 12px)',
//                                 minWidth: 300,
//                                 scrollSnapAlign: 'start'
//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     borderRadius: 2,
//                                     overflow: 'hidden',
//                                     backgroundColor: theme.palette.background.default,
//                                     minHeight: 360,
//                                     transition: 'transform 0.1s, box-shadow 0.3s',
//                                     '&:hover .expand-icon': {
//                                         color: theme.palette.primary.main,
//                                         transform: 'scale(1.1)',
//                                     },
//                                 }}
//                             >
//                                 <Box
//                                     component="img"
//                                     src={svc.image}
//                                     alt={svc.title}
//                                     sx={{
//                                         width: '100%',
//                                         height: 180,
//                                         objectFit: 'cover',
//                                         filter: 'brightness(0.9)'
//                                     }}
//                                     loading="lazy"
//                                 />
//                                 <Box sx={{ p: 2, maxWidth: '100%' }}>
//                                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                         <Typography variant="h6" sx={{ fontFamily: 'Oswald, sans-serif' }}>{svc.title}</Typography>
//                                         <IconButton
//                                             onClick={() => handleToggle(idx)}
//                                             size="medium"
//                                             className="expand-icon"
//                                             sx={{
//                                                 transform: expandedIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
//                                                 transition: 'transform 0.3s, color 0.3s, scale 0.3s',
//                                                 padding: '8px',
//                                             }}
//                                             aria-label={expandedIdx === idx ? 'Свернуть' : 'Развернуть'}
//                                         >
//                                             <ExpandMoreIcon />
//                                         </IconButton>
//                                     </Box>
//                                     <Collapse in={expandedIdx === idx} timeout="auto" unmountOnExit sx={{ mt: 1 }}>
//                                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 {svc.description}
//                                             </Typography>
//                                             <Button
//                                                 variant="outlined"
//                                                 size="small"
//                                                 sx={{
//                                                     alignSelf: 'flex-start',
//                                                     borderColor: theme.palette.primary.main,
//                                                     color: theme.palette.primary.main,
//                                                     '&:hover': { backgroundColor: theme.palette.action.hover },
//                                                 }}
//                                                 onClick={() => console.log(`Подробнее: ${svc.title}`)}
//                                             >
//                                                 Подробнее
//                                             </Button>
//                                         </Box>
//                                     </Collapse>
//                                 </Box>
//                             </Box>
//                         </motion.div>
//                     ))}
//                 </motion.div>
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

// Добавим новое изображение для строительства
import itDevImg from '../../assets/images/it-development.jpg';
import gisImg from '../../assets/images/gis.jpg';
import designImg from '../../assets/images/design.jpg';
import devopsImg from '../../assets/images/devops.jpg';
import constructionImg from '../../assets/images/devops.jpg';

const services = [
    { image: itDevImg, title: 'IT и разработка', description: 'Разработка веб-сервисов, мобильных и корпоративных приложений под ключ.' },
    { image: gisImg, title: 'Геодезия и ГИС', description: 'Топографическая съёмка, 3D-модели и создание ГИС-порталов.' },
    { image: designImg, title: 'Проектирование', description: 'Генеральные планы, проектирование зданий и инфраструктуры.' },
    { image: devopsImg, title: 'DevOps и CI/CD', description: 'Настройка серверов, автоматизация процессов и CI/CD.' },
    // Новая карточка
    { image: constructionImg, title: 'Строительство', description: 'Полный цикл строительных работ и технический надзор.' },
];

export default function ServicesSection() {
    const theme = useTheme();
    const [expandedIdx, setExpandedIdx] = useState(null);
    const scrollRef = useRef(null);
    const [maxDrag, setMaxDrag] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            setMaxDrag(el.scrollWidth - el.clientWidth);
        }
    }, []);

    const handleToggle = idx => setExpandedIdx(prev => (prev === idx ? null : idx));

    const scroll = dir => {
        if (!scrollRef.current || isDragging) return;
        const amount = scrollRef.current.clientWidth * 0.8;
        scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Box component="section" sx={{
                py: 4,
                position: 'relative',
                backgroundColor: theme.palette.background.container,
                overflow: 'hidden'
            }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Oswald, sans-serif' }}>
                    Наши услуги
                </Typography>

                <Box sx={{
                    position: 'relative',
                    mt: 4,
                    px: { xs: 2, sm: 4 },
                    '& .slider-container': {
                        overflowX: 'scroll',
                        overflowY: 'hidden',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }
                }}>
                    {/* Исправленные стрелки */}
                    <IconButton
                        onClick={() => scroll(-1)}
                        aria-label="Предыдущий слайд"
                        sx={{
                            position: 'absolute',
                            left: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: theme.palette.background.paper,
                            zIndex: 2,
                            boxShadow: 3,
                            width: 40,
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            [theme.breakpoints.down('sm')]: { display: 'none' },
                        }}
                    >
                        <ArrowBackIosIcon sx={{
                            fontSize: '1.2rem',
                            position: 'relative',
                            left: '-2px'
                        }} />
                    </IconButton>

                    <IconButton
                        onClick={() => scroll(1)}
                        aria-label="Следующий слайд"
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: theme.palette.background.paper,
                            zIndex: 2,
                            boxShadow: 3,
                            width: 40,
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            [theme.breakpoints.down('sm')]: { display: 'none' },
                        }}
                    >
                        <ArrowForwardIosIcon sx={{
                            fontSize: '1.2rem',
                            position: 'relative',
                            left: '2px'
                        }} />
                    </IconButton>

                    {/* Слайдер */}
                    <motion.div
                        ref={scrollRef}
                        className="slider-container"
                        drag="x"
                        dragConstraints={{ right: 0, left: -maxDrag }}
                        dragElastic={0.05}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                        style={{
                            display: 'flex',
                            gap: '16px',
                            scrollBehavior: 'smooth',
                            cursor: isDragging ? 'grabbing' : 'grab',
                        }}
                    >
                        {services.map((svc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ delay: idx * 0.1, duration: 0.3 }}
                                style={{
                                    flex: '0 0 calc(25% - 12px)',
                                    minWidth: 300,
                                    scrollSnapAlign: 'start'
                                }}
                            >
                                {/* Остальная часть кода без изменений */}
                                <Box
                                    sx={{
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        backgroundColor: theme.palette.background.default,
                                        minHeight: 360,
                                        transition: 'transform 0.1s, box-shadow 0.3s',
                                        '&:hover .expand-icon': {
                                            color: theme.palette.primary.main,
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                >
                                    <Box
                                                                        component="img"
                                                                        src={svc.image}
                                                                        alt={svc.title}
                                                                        sx={{
                                                                            width: '100%',
                                                                            height: 180,
                                                                            objectFit: 'cover',
                                                                            filter: 'brightness(0.9)'
                                                                        }}
                                                                        loading="lazy"
                                                                    />
                                                                    <Box sx={{ p: 2, maxWidth: '100%' }}>
                                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                            <Typography variant="h6" sx={{ fontFamily: 'Oswald, sans-serif' }}>{svc.title}</Typography>
                                                                            <IconButton
                                                                                onClick={() => handleToggle(idx)}
                                                                                size="medium"
                                                                                className="expand-icon"
                                                                                sx={{
                                                                                    transform: expandedIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                                    transition: 'transform 0.3s, color 0.3s, scale 0.3s',
                                                                                    padding: '8px',
                                                                                }}
                                                                                aria-label={expandedIdx === idx ? 'Свернуть' : 'Развернуть'}
                                                                            >
                                                                                <ExpandMoreIcon />
                                                                            </IconButton>
                                                                        </Box>
                                                                        <Collapse in={expandedIdx === idx} timeout="auto" unmountOnExit sx={{ mt: 1 }}>
                                                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                                                <Typography variant="body2" color="text.secondary">
                                                                                    {svc.description}
                                                                                </Typography>
                                                                                <Button
                                                                                    variant="outlined"
                                                                                    size="small"
                                                                                    sx={{
                                                                                        alignSelf: 'flex-start',
                                                                                        borderColor: theme.palette.primary.main,
                                                                                        color: theme.palette.primary.main,
                                                                                        '&:hover': { backgroundColor: theme.palette.action.hover },
                                                                                    }}
                                                                                    onClick={() => console.log(`Подробнее: ${svc.title}`)}
                                                                                >
                                                                                    Подробнее
                                                                                </Button>
                                                                            </Box>
                                                                        </Collapse>
                                                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </motion.div>
                </Box>
            </Box>
        </motion.div>
    );
}
