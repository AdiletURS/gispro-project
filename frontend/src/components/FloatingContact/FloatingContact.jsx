// src/components/FloatingContact/FloatingContact.jsx
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Fab, Tooltip, Stack, useMediaQuery } from '@mui/material';
import {
    Chat as ChatIcon,
    Close as CloseIcon,
    Telegram as TelegramIcon,
    WhatsApp as WhatsAppIcon,
    ContactPhone as ContactPhoneIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function FloatingContact() {
    const { t } = useTranslation();
    const theme = useTheme();
    const accent = theme.palette.primary.main;
    const accentDark = theme.palette.primary.dark;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(prev => !prev);

    // Дочерние действия
    const actions = [
        {
            icon: <ContactPhoneIcon sx={{ color: accent }} />,
            label: t('floatingContact.contactUs'),
            href: '/contact',
            target: '_self',
        },
        {
            icon: <TelegramIcon sx={{ color: '#0088cc' }} />,
            label: t('floatingContact.telegram'),
            href: 'https://t.me/maksatmm',
            target: '_blank',
        },
        {
            icon: <WhatsAppIcon sx={{ color: '#25D366' }} />,
            label: t('floatingContact.whatsapp'),
            href: 'https://wa.me/996558598887',
            target: '_blank',
        },
    ];


    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: isMobile ? 24 : 32,
                right: isMobile ? 24 : 32,
                zIndex: 1300,
            }}
        >
            {/* Выпадающие дочерние кнопки */}
            <AnimatePresence>
                {open && (
                    <Stack
                        component={motion.div}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.08,
                                    delayChildren: 0.1,
                                },
                            },
                            hidden: {
                                transition: {
                                    staggerChildren: 0.04,
                                    staggerDirection: -1,
                                },
                            },
                        }}
                        spacing={1.5}
                        sx={{ mb: isMobile ? 1.5 : 2, alignItems: 'flex-end' }}
                    >
                        {actions.map(action => (
                            <motion.div
                                key={action.label}
                                variants={{
                                    visible: { opacity: 1, y: 0 },
                                    hidden: { opacity: 0, y: 20 },
                                }}
                                style={{ width: '100%' }}
                            >
                                <Tooltip title={action.label} placement="left">
                                    <Fab
                                        size={isMobile ? 'medium' : 'large'}
                                        component="a"
                                        href={action.href}
                                        target={action.label === 'Связаться с нами' ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        onClick={() => setOpen(false)}
                                        sx={{
                                            bgcolor: 'theme.palette.button.primaryDark',
                                            color: accent,
                                            width: isMobile ? 48 : 56,
                                            height: isMobile ? 48 : 56,
                                            boxShadow: theme.shadows[2],
                                            border: `1px solid ${theme.palette.divider}`,
                                            '&:hover': {
                                                bgcolor: theme.palette.button.primaryDark,
                                            },
                                        }}
                                    >
                                        {action.icon}
                                    </Fab>
                                </Tooltip>
                            </motion.div>
                        ))}
                    </Stack>
                )}
            </AnimatePresence>

            {/* Основная кнопка с «волной» при уменьшении */}
            <Box
                sx={{
                    position: 'relative',
                    width: isMobile ? 56 : 64,
                    height: isMobile ? 56 : 64,
                }}
            >
                {/* Анимированная «волна», появляется когда open=false */}
                {!open && (
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                        transition={{
                            duration: 2,
                            ease: 'easeOut',
                            repeat: Infinity,
                            repeatDelay: 0.5,
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: `2px solid ${accent}`,
                        }}
                    />
                )}

                <motion.div
                    animate={
                        open
                            ? { scale: 1 }
                            : { scale: [1, 1.08, 1] }
                    }
                    transition={
                        open
                            ? {}
                            : {
                                duration: 2,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatDelay: 0.5,
                            }
                    }
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'inline-block' }}
                    >
                        <Fab
                            size={isMobile ? 'medium' : 'large'}
                            onClick={toggleOpen}
                            aria-label="Контакты"
                            sx={{
                                position: 'relative',
                                bgcolor: accent,
                                color: '#fff',
                                width: isMobile ? 56 : 64,
                                height: isMobile ? 56 : 64,
                                boxShadow: theme.shadows[4],
                                '&:hover': {
                                    bgcolor: theme.palette.button.primaryDark,
                                },
                            }}
                        >
                            {open ? (
                                <CloseIcon sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }} />
                            ) : (
                                <ChatIcon sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }} />
                            )}
                        </Fab>
                    </motion.div>
                </motion.div>
            </Box>
        </Box>
    );
}
