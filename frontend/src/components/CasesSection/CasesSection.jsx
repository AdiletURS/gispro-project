// src/components/CasesSection/CasesSection.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useTheme,
  styled,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

// Импорт изображений
import itSolutionImg from '../../assets/images/it-solution.jpg';
import canalGisImg from '../../assets/images/canal-gis.jpg';
import dppMonitoringImg from '../../assets/images/dpp-monitoring.jpg';



// Анимации
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2, duration: 0.6 },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Стилизованная кнопка
const StyledLink = styled(motion.button)(({ theme }) => ({
  fontFamily: '"Oswald", sans-serif',
  fontWeight: 500,
  fontSize: '1.1rem',
  letterSpacing: '0.05em',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.primary.main,
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': { backgroundColor: `${theme.palette.primary.main}17` },
  '& svg': {
    fontSize: '1.2rem',
    stroke: theme.palette.primary.main,
    strokeWidth: 2,
    transition: 'transform 0.3s ease',
  },
}));

export default function CasesSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [openIdx, setOpenIdx] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const openDialog = idx => setOpenIdx(idx);
  const closeDialog = () => setOpenIdx(null);

  const bg = theme.palette.background.container;
  const cardBg = theme.palette.background.paper;

  const cases = [
    {
      title: t('casesSection.case1.title'),
      description: t('casesSection.case1.description'),
      details: t('casesSection.case1.details'),
      image: itSolutionImg,
    },
    {
      title: t('casesSection.case2.title'),
      description: t('casesSection.case2.description'),
      details: t('casesSection.case2.details'),
      image: canalGisImg,
    },
    {
      title: t('casesSection.case3.title'),
      description: t('casesSection.case3.description'),
      details: t('casesSection.case3.details'),
      image: dppMonitoringImg,
    },
  ];

  return (
      <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
      >
        <Box component="section" sx={{ py: 8, backgroundColor: bg, borderRadius: 2 }}>
          <Container maxWidth="lg">
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '0.05em',
                  color: theme.palette.text.primary,
                }}
            >
              {t('casesSection.heading')}
            </Typography>

            <Box sx={{ display: 'flex', gap: 3, mt: 3, flexWrap: 'wrap' }}>
              {cases.map((c, idx) => (
                  <motion.div key={idx} variants={cardVariants} style={{ flex: '1 1 30%' }}>
                    <Card
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: 450,
                          borderRadius: 2,
                          backgroundColor: cardBg,
                          overflow: 'hidden',
                          transition: 'box-shadow 0.3s ease',
                          '&:hover': { boxShadow: theme.shadows[4] },
                          '&:hover img': { transform: 'scale(1.05)' },
                        }}
                    >
                      <CardMedia
                          component="img"
                          image={c.image}
                          alt={c.title}
                          sx={{ height: '60%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            sx={{ fontFamily: 'Oswald, sans-serif', mb: 1, color: theme.palette.text.primary }}
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
                      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <StyledLink onClick={() => openDialog(idx)} whileHover={{ x: 6 }} whileTap={{ scale: 0.95 }}>
                          {t('casesSection.learnMore')}
                          <motion.span whileHover={{ x: 3 }}>
                            <ArrowForwardIosIcon />
                          </motion.span>
                        </StyledLink>
                      </Box>
                    </Card>
                  </motion.div>
              ))}
            </Box>

            {openIdx !== null && (
                <Dialog
                    open
                    onClose={closeDialog}
                    maxWidth="sm"
                    fullWidth
                    scroll="paper"
                    PaperProps={{ sx: { borderRadius: 2 } }}
                >
                  <DialogTitle
                      sx={{
                        m: 0,
                        p: 2,
                        fontFamily: 'Oswald, sans-serif',
                        position: 'relative',
                        color: theme.palette.text.primary,
                      }}
                  >
                    {cases[openIdx].title}
                    <IconButton
                        aria-label="close"
                        onClick={closeDialog}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: 8,
                          color: theme.palette.primary.main,
                          '&:hover': { backgroundColor: `${theme.palette.primary.main}20` },
                        }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent dividers sx={{ p: 3 }}>
                    <Box
                        component="img"
                        src={cases[openIdx].image}
                        alt={cases[openIdx].title}
                        sx={{ width: '100%', borderRadius: 1, mb: 2, filter: 'brightness(0.95)' }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: 'pre-line',
                          lineHeight: 1.6,
                          color: theme.palette.text.secondary,
                        }}
                    >
                      {cases[openIdx].details}
                    </Typography>
                  </DialogContent>
                </Dialog>
            )}
          </Container>
        </Box>
      </motion.div>
  );
}
