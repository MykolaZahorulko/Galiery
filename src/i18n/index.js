import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
    en: {
        translation: {
            'Hello': 'Hello, and Welcome to my app!'
        }
    },
    uk: {
        translation: {
            'Hello': 'Привіт, і Вітаю у моєму застосунку'
        }
    }
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'uk',

        interpolation: {
            escapeValue: false
        }
    })