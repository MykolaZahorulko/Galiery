import React from 'react'
import styles from './Register.module.scss'
import Input from "../../ui/Input/Input.jsx";
import Button from "../../ui/button/Button.jsx";
import Checkbox from "../../ui/checkbox/Сheckbox.jsx";
import {useTranslation} from "react-i18next";
import '../../../i18n'

const Register = () => {
    const {t} = useTranslation()

    return (
        <section className={styles.register}>
            <div className={`${styles.register__container} ${styles.container}`}>
                <h2 className={`${styles.register__title} ${styles.title}`}>{t('register.signUp')}</h2>
                <form action="" className={styles.register__form}>
                    <div className={`${styles.register__inputContainer} ${styles.input_margin}`}>
                        <Input
                            tabIndex={1}
                            type={"text"}
                            name="username"
                            autocomplete="username"
                            placeholder={t('register.name')}
                        />
                        <Input
                            tabIndex={2}
                            type={"text"}
                            name="userLastname"
                            autocomplete="off"
                            placeholder={t('register.secondName')}
                        />
                    </div>
                    <Input
                        className={styles.input_margin}
                        tabIndex={3}
                        type={"text"}
                        autocomplete="off"
                        placeholder={t('register.mail')}
                    />
                    <Input
                        className={styles.input_margin}
                        tabIndex={4}
                        type={"text"}
                        autocomplete="off"
                        placeholder={t('register.confirmMail')}
                    />
                    <Input
                        tabIndex={5}
                        type={"password"}
                        name="password"
                        autocomplete="new-password"
                        placeholder={t('register.password')}
                    />
                    <label htmlFor="email"
                           className={`${styles.register__label} ${styles.label_text} ${styles.input_margin}`}>{t('register.passwordInfo')}</label>
                    <Input
                        className={styles.input_margin}
                        tabIndex={6}
                        type={"password"}
                        name="confirmPassword"
                        autocomplete="off"
                        placeholder={t('register.confirmPassword')}
                    />
                    <Input
                        className={styles.input_margin}
                        tabIndex={7}
                        type={"tel"}
                        placeholder={t('register.phone')}
                    />
                    <Checkbox
                        className={`${styles.register__checkbox_first} ${styles.input_margin}`}>{t('register.letter')}</Checkbox>
                    <Checkbox className={styles.register__checkbox_second}>{t('register.confirm')}</Checkbox>
                    <Button isFill={true}>{t('register.signUp')}</Button>
                </form>
            </div>
        </section>
    )
}
export default Register
