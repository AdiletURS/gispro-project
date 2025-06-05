// src/components/ContactPage/ContactPage.jsx

import React, { useState } from 'react';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
    const theme = useTheme();
    const { t } = useTranslation();

    const FORM_ENDPOINT = 'https://formspree.io/f/mbloegje'; // ваш ID

    // 1) Значения полей формы
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    // 2) Ошибки валидации
    const [formErrors, setFormErrors] = useState({});
    // 3) Флаги состояния отправки
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null); // null | true | false

    // Обновление полей
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: '' }));
    };

    // Простейшая проверка email
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    // Валидация перед отправкой
    const validate = () => {
        const errors = {};
        if (!formValues.name.trim()) {
            errors.name = t('contact.errors.name');
        }
        if (!formValues.email.trim()) {
            errors.email = t('contact.errors.emailRequired');
        } else if (!validateEmail(formValues.email)) {
            errors.email = t('contact.errors.emailInvalid');
        }
        if (!formValues.phone.trim()) {
            errors.phone = t('contact.errors.phone');
        }
        return errors;
    };

    // Обработчик submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        // Пакуем данные в payload
        const payload = {
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            message: formValues.message,
            _replyto: formValues.email,             // добавляем reply-to
            _subject: t('contact.emailSubject'),    // тема письма
            _format: 'plain',
        };

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || t('contact.errors.send'));
            setSubmitSuccess(true);
            setFormValues({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            console.error(err);
            setSubmitSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ py: { xs: 4, md: 8 } }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 500,
                    mb: { xs: 3, md: 5 },
                    color: theme.palette.text.primary,
                    letterSpacing: '0.05em',
                }}
            >
                {t('contact.title')}
            </Typography>

            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    p: { xs: 3, md: 5 },
                    borderRadius: 2,
                    boxShadow: theme.shadows[1],
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete="off"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    {/* Поле «Имя/Компания» */}
                    <TextField
                        label={t('contact.fields.name')}
                        name="name"
                        required
                        fullWidth
                        autoFocus
                        variant="outlined"
                        value={formValues.name}
                        onChange={handleChange}
                        error={Boolean(formErrors.name)}
                        helperText={formErrors.name}
                        InputLabelProps={{ sx: { fontFamily: 'Oswald, sans-serif' } }}
                    />

                    {/* Поле «Email» */}
                    <TextField
                        label={t('contact.fields.email')}
                        name="email"
                        type="email"
                        required
                        fullWidth
                        variant="outlined"
                        value={formValues.email}
                        onChange={handleChange}
                        error={Boolean(formErrors.email)}
                        helperText={formErrors.email}
                        InputLabelProps={{ sx: { fontFamily: 'Oswald, sans-serif' } }}
                    />

                    {/* Поле «Телефон» */}
                    <TextField
                        label={t('contact.fields.phone')}
                        name="phone"
                        type="tel"
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="+996 (___) ___ ___"
                        value={formValues.phone}
                        onChange={handleChange}
                        error={Boolean(formErrors.phone)}
                        helperText={formErrors.phone}
                        InputLabelProps={{ sx: { fontFamily: 'Oswald, sans-serif' } }}
                    />

                    {/* Поле «Сообщение» */}
                    <TextField
                        label={t('contact.fields.message')}
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        value={formValues.message}
                        onChange={handleChange}
                        InputLabelProps={{ sx: { fontFamily: 'Oswald, sans-serif' } }}
                        inputProps={{ maxLength: 500 }}
                        helperText={`${formValues.message.length}/500`}
                    />

                    {/* Кнопка «Отправить» */}
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        sx={{
                            fontFamily: 'Oswald, sans-serif',
                            textTransform: 'none',
                            letterSpacing: '0.05em',
                            mt: 2,
                            py: 1.5,
                            backgroundColor: theme.palette.button.primary,
                            '&:hover': { backgroundColor: theme.palette.button.primaryDark },
                        }}
                    >
                        {isSubmitting ? t('contact.buttons.sending') : t('contact.buttons.send')}
                    </Button>
                </Box>

                {/* Сообщения об успехе/неудаче */}
                {submitSuccess === true && (
                    <Typography
                        variant="body1"
                        sx={{ mt: 2, color: theme.palette.success.main, textAlign: 'center' }}
                    >
                        {t('contact.messages.success')}
                    </Typography>
                )}
                {submitSuccess === false && (
                    <Typography
                        variant="body1"
                        sx={{ mt: 2, color: theme.palette.error.main, textAlign: 'center' }}
                    >
                        {t('contact.messages.error')}
                    </Typography>
                )}
            </Box>
        </Container>
    );
}
