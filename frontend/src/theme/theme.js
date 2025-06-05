// // src/theme.js
// import { createTheme, responsiveFontSizes } from '@mui/material/styles';
//
// const getDesignTokens = (mode) => ({
//     palette: {
//         mode,
//         background: {
//             default: mode === 'light' ? '#FFF' : '#151515',
//             paper: mode === 'light' ? '#fdfcfc' : '#171717',
//             container: mode === 'light' ? '#fafafa' : '#171717',
//         },
//         text: {
//             primary: mode === 'light' ? '#000' : '#FFF',
//             secondary: mode === 'light' ? '#555' : '#BBB',
//         },
//         // Добавляем собственные цвета для кнопок в теме
//         button: {
//             primary: '#00796B',       // основной цвет кнопки
//             primaryDark: '#005F60',   // цвет при наведении
//         },
//         // сохраняем обычную первичную палитру (если используется где-то ещё)
//         primary: {
//             main: mode === 'light' ? '#00796B' : '#00796B',
//             dark: mode === 'light' ? '#005F60' : '#005F60',
//         },
//     },
//     components: {
//         MuiCssBaseline: {
//             styleOverrides: {
//                 // Глобальный переход для всех элементов (цвет, фон)
//                 '*, *::before, *::after': {
//                     transition: 'background-color 300ms ease, color 300ms ease',
//                 },
//             },
//         },
//     },
// });
//
// export default function buildTheme(mode) {
//     let theme = createTheme(getDesignTokens(mode));
//     return responsiveFontSizes(theme);
// }



// src/theme/theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        background: {
            default: mode === 'light' ? '#FFF' : '#151515',
            paper:   mode === 'light' ? '#fdfcfc' : '#171717',
            container: mode === 'light' ? '#fafafa' : '#171717',
        },
        text: {
            primary:   mode === 'light' ? '#000' : '#FFF',
            secondary: mode === 'light' ? '#555' : '#BBB',
        },
        // Свойства для цветов кнопок
        button: {
            primary:    '#078eea',
            primaryDark:'#0679c7',
        },
        primary: {
            main: mode === 'light' ? '#078eea' : '#078eea',
            dark: mode === 'light' ? '#0679c7' : '0679c7',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                // Плавный переход фона и цвета для всего приложения
                '*, *::before, *::after': {
                    transition: 'background-color 300ms ease, color 300ms ease',
                },
            },
        },
    },
});

export default function buildTheme(mode) {
    let theme = createTheme(getDesignTokens(mode));
    return responsiveFontSizes(theme);
}
