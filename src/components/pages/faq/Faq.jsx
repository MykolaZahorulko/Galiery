import React, {useState} from 'react'
import styles from './Faq.module.scss'
import {useTranslation} from "react-i18next";
import '../../../i18n'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const {t} = useTranslation()
    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const items = [
        {
            title: t('faq.titleBuyRitalePrice'),
            content: t('faq.contentRitalePrice')
        },
        {
            title: t('faq.titleCancel'),
            content: t('faq.contentCancel')
        },
        {
            title: t('faq.titleHowMuchBuy'),
            content: t('faq.contentHowMuchBuy')
        },
        {
            title: t('faq.titleHowMuchSubscription'),
            content: t('faq.contentHowMuchSubscription')
        },
        {
            title: t('faq.titleShippingTime'),
            content: t('faq.consoleShippingTime')
        },
        {
            title: t('faq.titleGuarantee'),
            content: t('faq.contentGuarantee')
        },
        {
            title: t('faq.titleCancelSubscription'),
            content: t('faq.contentCancelSubscription'),
        },
        {
            title: t('faq.titleShippngAbroad'),
            content: t('faq.consoleShippngAbroad')
        },
        {
            title: t('faq.titleWeeklyDrops'),
            content: t('faq.consoleWeeklyDrops')
        },
        {
            title: t('faq.titleContacts'),
            content: t('faq.contentContacts')
        },
        {
            title: t('faq.titleLegalThings'),
            content: t('faq.contentLegalThings')
        },
    ];
    return (
        <div className={styles.faq}>
            <div className={`${styles.faq__container} ${styles.container}`}>
                <h2 className={`${styles.faq__title} ${styles.title}`}>F.A.Q</h2>
                <div className={styles.faq__body}>
                    {items.map((item, index) => (
                        <div key={index} className={`${styles.faq__item} ${openIndex === index ? styles.open : ''}`}>
                            <div className={styles.faq__item_title} onClick={() => handleClick(index)}>
                                {item.title}
                                <div className={`${styles.faq__item_icon} ${styles.img}`}>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <line y1="-1" x2="20" y2="-1" transform="matrix(0 -1 0.99995 -0.00999686 11 20)"
                                              stroke="#4A4A4A" strokeWidth="2"/>
                                        <line y1="-1" x2="20" y2="-1"
                                              transform="matrix(1 0 -0.00999685 0.99995 0.0107422 10.5116)"
                                              stroke="#4A4A4A" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </div>
                            {openIndex === index ? (
                                <div
                                    className={styles.faq__item_content}>
                                    {item.content}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Faq
