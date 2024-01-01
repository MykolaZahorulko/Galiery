import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {LOCALS} from "./constants.js";
import {UK} from './copies/UK.js'
import {EN} from "./copies/EN.js";

const resources = {
    [LOCALS.EN]: {
        translation: EN
    },
    [LOCALS.UK]: {
        translation: UK
    }
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: LOCALS.UK,

        interpolation: {
            escapeValue: false
        }
    })