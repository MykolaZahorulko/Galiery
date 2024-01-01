import React from 'react'
import styles from './Subscription.module.scss'
import Input from "../../ui/Input/Input.jsx";
import Select from "../../ui/select/Select.jsx";
import {useTranslation} from "react-i18next";
import '../../../i18n'
const Subscription = () => {
    const {t} =useTranslation()
    const options = [
        t('subscription.subscriptionTypes.basic'),
        t('subscription.subscriptionTypes.standard'),
        t('subscription.subscriptionTypes.premium')
    ];

    return (
        <section className={styles.subscription}>
            <div className={`${styles.subscription__container} ${styles.container}`}>
                <div className={styles.subscription__body}>
                    <h2 className={`${styles.subscription__title} ${styles.title}`}>{t('subscription.title')}</h2>
                    <p className={styles.subscription__text}>
                        {t('subscription.participation')}
                    </p>
                    <p className={styles.subscription__text_bold}>
                        {t('subscription.autoRenewal')}
                    </p>
                    <form action="#" method="get" className={styles.subscription__form}>
                        <label htmlFor="first name" className={`${styles.subscription__label} ${styles.label_text}`}>
                            {t('subscription.firstName')}
                        </label>
                        <Input type="text" name="first name"
                               className={`${styles.subscription__input} ${styles.input_margin}`}></Input>
                        <label htmlFor="last name" className={`${styles.subscription__label} ${styles.label_text}`}>
                            {t('subscription.lastName')}
                        </label>
                        <Input type="text" name="last name"
                               className={`${styles.subscription__input} ${styles.input_margin}`}></Input>
                        <label htmlFor="tel" className={`${styles.subscription__label} ${styles.label_text}`}>
                            {t('subscription.phoneNumber')}
                        </label>
                        <Input type="tel" name="tel"
                               className={`${styles.subscription__input} ${styles.input_margin}`}></Input>
                        <label htmlFor="email" className={`${styles.subscription__label} ${styles.label_text}`}>
                            {t('subscription.email')}
                        </label>
                        <Input type="email" name="email"
                               className={`${styles.subscription__input} ${styles.input_margin}`}></Input>
                        <label htmlFor="select" className={`${styles.subscription__label} ${styles.label_text}`}>
                            {t('subscription.subscriptionType')}
                        </label>
                        <Select name="subscription select" options={options} defaultValue={t('subscription.selectType')}/>
                        <button type="submit" className={styles.subscription__button}>{t('subscription.submit')}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Subscription
