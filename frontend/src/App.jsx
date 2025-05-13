import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
// import About from './pages/About';
// import Contact from './pages/Contact';
import NotFound from './pages/NotFound/NotFound.jsx';
import {useState, useMemo} from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header.jsx";
import theme from "./theme/theme.js";
import buildTheme from "./theme/theme.js";


export default function App() {
    const [mode, setMode] = useState('light');
    const theme = useMemo(() => buildTheme(mode), [mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Header mode={mode} onToggleMode={toggleMode} />
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />


                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}





// export default function App() {
//     return (
//         <BrowserRouter>
//
//
//
//             <Routes>
//                 {/* Все главные страницы — внутри MainLayout */}
//                 <Route path="/" element={<MainLayout />}>
//                     <Route index element={<Home />} />
//
//                     {/* Ловушка для несуществующих URL */}
//                     <Route path="*" element={<NotFound />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }
