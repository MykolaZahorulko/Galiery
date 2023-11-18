import React from 'react'
import styles from './Login.module.scss'
import Input from "../../ui/input/Input.jsx";
import {Link} from "react-router-dom";
import Button from "../../ui/button/Button.jsx";

const Login = () => {

    return (
        <section className={styles.signin}>
            <div className={`${styles.signin__container} ${styles.container}`}>
                <h2 className={`${styles.signin__title} ${styles.title}`}>Увійти</h2>
                <form action="" className={styles.signin__form}>
                    <label htmlFor="email" className={`${styles.signin__label} ${styles.form_text}`}>Вже є обліковий
                        запис?</label>
                    <div className={styles.signin__inputContainer}>
                        <Input
                            tabIndex={1}
                            type={"text"}
                            placeholder={"*Адреса електронної пошти"}
                        />
                        <Input
                            tabIndex={2}
                            type={"password"}
                            placeholder={"*Пароль"}
                        />
                    </div>
                    <div className={`${styles.signin__password_reset} ${styles.form_text}`}>
                        <Link to={'/'}>Забули
                            пароль?</Link>
                    </div>
                    <Button isFill={false}>Увійти</Button>
                </form>
                <div className={`${styles.signin__isProfile_text} ${styles.form_text}`}>Ще немає облікового запису?
                </div>
                <Link to={"/register"} ><Button isFill={true}>Зареєструватися</Button></Link>
            </div>
        </section>
    )
}
export default Login
