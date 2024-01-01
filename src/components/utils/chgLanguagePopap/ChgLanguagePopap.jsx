import React, {useEffect} from 'react'
import styles from './ChgLanguagePopap.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {toggleLanguageMenu} from "../../../actions/toggleLanguageMenu.js";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {LOCALS} from "../../../i18n/constants.js";


const ChgLanguagePopap = () => {
    const {t} = useTranslation()
    const isLanguageChgActive = useSelector((state) => state.language.isLanguageChgActive)
    const dispatch = useDispatch()
    useEffect(() => {
        document.body.style.overflow = isLanguageChgActive ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isLanguageChgActive])
    const handleLanguage = (lng) => {
        i18next.changeLanguage(lng)
        dispatch(toggleLanguageMenu())
    }
    return (
        <div className={styles.popap}>
            <div className={styles.popap__container}>
                <div className={styles.popap__body}>
                    <div
                        className={`${styles.popap__closer} ${styles.img}`}
                        onClick={() => dispatch(toggleLanguageMenu())}
                    >
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-1" x2="20" y2="-1" transform="matrix(0 -1 0.99995 -0.00999686 11 20)"
                                  stroke="#000" strokeWidth="2"/>
                            <line y1="-1" x2="20" y2="-1" transform="matrix(1 0 -0.00999685 0.99995 0.0107422 10.5116)"
                                  stroke="#000" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={styles.popap__languages}>
                        <div
                            className={`${styles.popap__language} ${i18next.language === LOCALS.UK ? styles.disabled : ''}`}
                            onClick={
                                () => handleLanguage(LOCALS.UK)
                            }
                        >
                            Українська
                        </div>
                        <div
                            className={`${styles.popap__language} ${i18next.language === LOCALS.EN ? styles.disabled : ''}`}
                            onClick={
                                () => handleLanguage(LOCALS.EN)
                            }
                        >
                            English
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChgLanguagePopap
