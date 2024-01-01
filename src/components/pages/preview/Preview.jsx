import React from 'react'
import styles from './Preview.module.scss'
import shoes from "../../../services/shoesServices.js"
import PreviewItem from "./previewItem/PreviewItem.jsx";
import {useTranslation} from "react-i18next";
import '../../../i18n'

const Preview = () => {
    const {t} = useTranslation()

    return (
        <section className={styles.preview}>
            <div className={`${styles.preview__container} ${styles.container}`}>
                <div className={styles.preview__body}>
                    <h2 className={`${styles.preview__title} ${styles.title}`}>{t('preview.week')} №1</h2>
                    <div className={styles.preview__text}>
                        <p>{t('preview.thisWeek')}</p>
                        <p>{t('preview.remember')}</p>
                    </div>
                    <div className={styles.preview__items}>
                        {shoes.map((shoe) => (
                            <PreviewItem key={shoe.article} shoe={shoe}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Preview
