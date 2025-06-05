// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * Здесь нужно подгрузить ваши JSON-файлы с переводами.
 * Предполагается, что у вас в проекте есть структура:
 *   src/locales/ru/translation.json
 *   src/locales/en/translation.json
 *   src/locales/kg/translation.json
 *
 * Если у вас иначе, скорректируйте пути.
 */
import ru from './locales/ru/translation.json';
import en from './locales/en/translation.json';
import kg from './locales/kg/translation.json';

i18n
    // подключаем плагин для автоматического определения и запоминания языка
    .use(LanguageDetector)
    // подключаем React-обёртку
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: ru },
            en: { translation: en },
            kg: { translation: kg },
        },
        fallbackLng: 'ru',
        detection: {
            // порядок детектирования: сначала localStorage, потом учётка браузера
            order: ['localStorage', 'navigator'],
            // сохранять в localStorage
            caches: ['localStorage'],
            // ключ в localStorage, под которым будет храниться выбранная пользователем локаль
            lookupLocalStorage: 'i18nextLng',
        },
        interpolation: {
            escapeValue: false, // React уже экранирует
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
