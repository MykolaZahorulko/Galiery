import React from 'react'
import styles from './Login.module.scss'
import Input from "../../ui/input/Input.jsx";
import {Link} from "react-router-dom";
import Button from "../../ui/button/Button.jsx";
import {useTranslation} from "react-i18next";
import '../../../i18n'

const Login = () => {
    const { t } = useTranslation()

    return (
        <section className={styles.signin}>
            <div className={`${styles.signin__container} ${styles.container}`}>
                <h2 className={`${styles.signin__title} ${styles.title}`}>{t('login.signIn')}</h2>
                <form action="" className={styles.signin__form}>
                    <label htmlFor="email" className={`${styles.signin__label} ${styles.label_text}`}>
                        {t('login.haveAccount')}
                    </label>
                    <div className={styles.signin__inputContainer}>
                        <Input
                            tabIndex={1}
                            type="text"
                            name="username"
                            autocomplete="username"
                            placeholder={t('login.mail')}
                        />
                        <Input
                            tabIndex={2}
                            type="password"
                            name="password"
                            autocomplete="new-password"
                            placeholder={t('login.password')}
                        />
                    </div>
                    <div className={`${styles.signin__password_reset} ${styles.label_text}`}>
                        <Link to={'/Galiery/'}>
                            {t('login.forgotPassword')}
                        </Link>
                    </div>
                    <Button isFill={false}>{t('login.login')}</Button>
                </form>
                <div className={`${styles.signin__isProfile_text} ${styles.label_text}`}>
                    {t('login.noAccount')}
                </div>
                <Link to={"/Galiery/register"} ><Button isFill={true}>
                    {t('login.signUp')}
                </Button></Link>
            </div>
        </section>
    )
}
export default Login
