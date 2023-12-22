import React from 'react'
import styles from './Subscription.module.scss'
import Input from "../../ui/Input/Input.jsx";
import Select from "../../ui/select/Select.jsx";

const Subscription = () => {
    const options = ["Базовий тариф", "Стандартний тариф", "Преміум"]

    return (
        <section className={styles.subscription}>
            <div className={`${styles.subscription__container} ${styles.container}`}>
                <div className={styles.subscription__body}>
                    <h2 className={`${styles.subscription__title} ${styles.title}`}>Оформлення підписки</h2>
                    <p className={styles.subscription__text}>Участь у наших дропах дає Вам шанс купувати лімітований
                        брендовий одяг за ритейл цінами, не переплачуючи жодної копійки ресейлерам.<br/>Щоб оформити
                        підписку, у Вас повинен бути створений акаунт.</p>
                    <p className={styles.subscription__text_bold}>Підписка автоматично поновлюється, її можна скасувати
                        в будь-який час і не підлягає відшкодуванню.</p>
                    <form action="#" method="get" className={styles.subscription__form}>
                        <label htmlFor="first name" className={`${styles.subscription__label} ${styles.label_text}`}>*Ваше
                            імʼя</label>
                        <Input type="text" name="first name"
                               className={`${styles.subscription__input} ${styles.input_margin}`}></Input>
                        <label htmlFor="last name" className={`${styles.subscription__label} ${styles.label_text}`}>*Ваше
                            прізвище</label>
                        <Input type="text" name="last name"
                               className={`${styles.subscription__input} ${styles.input_margin}`}></Input>
                        <label htmlFor="tel" className={`${styles.subscription__label} ${styles.label_text}`}>*Ваше
                            номер телефону</label>
                        <Input type="tel" name="tel"
                               className={`${styles.subscription__input} ${styles.input_margin}`}></Input>
                        <label htmlFor="email" className={`${styles.subscription__label} ${styles.label_text}`}>*Ваша
                            пошта</label>
                        <Input type="email" name="email"
                               className={`${styles.subscription__input} ${styles.input_margin}`}></Input>
                        <label htmlFor="select" className={`${styles.subscription__label} ${styles.label_text}`}>*Тариф
                            підписки</label>
                        <Select name="subscription select" options={options} defaultValue="Обреріть тариф"/>
                        <button type="submit" className={styles.subscription__button}>Оформити</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Subscription
