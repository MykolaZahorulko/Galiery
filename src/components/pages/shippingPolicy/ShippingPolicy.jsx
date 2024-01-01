import React from 'react'
import styles from './ShippingPolicy.module.scss'
import {useTranslation} from "react-i18next";
import '../../../i18n'
const ShippingPolicy = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.shipping}>
            <div className={`${styles.shipping__container} ${styles.container}`}>
                <h2 className={`${styles.shipping__title} ${styles.title}`}>{t('shippingPolicy.title')}</h2>
                <div className={styles.shipping__text}>
                    <p className={styles.shipping__paragraph}>{t('shippingPolicy.shipAllOver')}</p>
                    <p className={styles.shipping__mainParagraph}>{t('shippingPolicy.rates')}</p>
                    <p className={styles.shipping__paragraph}>- {t('shippingPolicy.ukraine')}: <span>{t('shippingPolicy.novaPoshta')}</span></p>
                    <p className={styles.shipping__paragraph}>- {t('shippingPolicy.europe')}: <span>{t('shippingPolicy.dhlExpress')}</span></p>
                    <p className={styles.shipping__paragraph}>{t('shippingPolicy.deliveryTime')}</p>
                    <p className={styles.shipping__paragraph}>{t('shippingPolicy.contactSupport')}</p>
                </div>
            </div>
        </div>
    )
}
export default ShippingPolicy
