// src/App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header.jsx';
import MainLayout from './layouts/MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import About from './pages/About/About.jsx';          // пример добавления ещё одной страницы
import Contact from './components/ContactPage/ContactPage.jsx'; // пример страницы контактов
import buildTheme from './theme/theme.js';

export default function App() {
    // 1) Считываем из localStorage:
    //    - сохранённую тему ("light" / "dark")
    //    - флаг ручного выбора ("true" / "false")
    const [manual, setManual] = useState(() => {
        const storedManual = window.localStorage.getItem('themeManual');
        return storedManual === 'true'; // если нет ключа — вернётся false
    });
    const [mode, setMode] = useState(() => {
        const storedMode = window.localStorage.getItem('themeMode');
        if (storedMode === 'light' || storedMode === 'dark') {
            return storedMode;
        }
        // если пользователь ещё не выбирал вручную, оставляем временно любой (будет переопределён ниже)
        return 'light';
    });

    // 2) Хук для системного (браузерного) prefers-color-scheme
    const muiTheme = useTheme();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // 3) При первом рендере (и когда меняются prefersDarkMode или manual)
    //    если manual === false, задаём mode по системной теме
    useEffect(() => {
        if (!manual) {
            setMode(prefersDarkMode ? 'dark' : 'light');
        }
    }, [prefersDarkMode, manual]);

    // 4) Сохраняем mode и manual в localStorage, когда они изменяются вручную
    useEffect(() => {
        window.localStorage.setItem('themeMode', mode);
        window.localStorage.setItem('themeManual', manual ? 'true' : 'false');
    }, [mode, manual]);

    // 5) Функция переключения темы при клике на кнопку в Header
    const toggleMode = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
        setManual(true); // пользователь явно выбрал
    };

    // 6) Генерируем MUI-тему
    const theme = useMemo(() => buildTheme(mode), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Header mode={mode} onToggleMode={toggleMode} />
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />          {/* страница «О компании» */}
                        <Route path="contact" element={<Contact />} />      {/* страница «Контакты» */}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
