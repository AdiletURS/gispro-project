// src/theme/theme.js
// import { createTheme } from '@mui/material/styles';
//
//
// const theme = createTheme({
//     palette: {
//         primary: { main: '#1976d2' },
//         secondary: { main: '#dc004e' },
//     },
// });
//
//
// export default theme;

// src/theme/theme.js
// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        background: {
            default: mode === 'light' ? '#FFFFFF' : '#232529',
        },
        text: {
            primary: mode === 'light' ? '#000' : '#fff',
        },
    },
    typography: {
        fontFamily: 'Oswald, sans-serif',
    },
});

export default function buildTheme(mode) {
    return createTheme(getDesignTokens(mode));
}
