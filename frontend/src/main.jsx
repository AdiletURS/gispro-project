import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./assets/styles/common.css"
import "./assets/styles/resets.css"
import App from './App.jsx'

import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme.js';

// src/main.jsx (или index.jsx / App.jsx — найдите точку входа)

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import buildTheme from './theme/theme.js';

// **Важно:** импортируем i18n, чтобы он инициировался до всего
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<BrowserRouter>*/}
            {/* если у вас в App.jsx уже есть ThemeProvider,
          просто убедитесь, что i18n импортируется выше */}
            <App />
        {/*</BrowserRouter>*/}
    </React.StrictMode>
);




// import {Box} from "@mui/material";
// import './i18n';
//
// const container = document.getElementById('root');
//
// const root = createRoot(container);
// root.render(
//     <>
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <App />
//         </ThemeProvider>
//     </>
//
// );
//
//
