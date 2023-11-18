import React from 'react'
import styles from './Register.module.scss'
import Input from "../../ui/Input/Input.jsx";
import Button from "../../ui/button/Button.jsx";
import Checkbox from "../../ui/checkbox/Сheckbox.jsx";

const Register = () => {
    return (
        <section className={styles.register}>
            <div className={`${styles.register__container} ${styles.container}`}>
                <h2 className={`${styles.register__title} ${styles.title}`}>Зареєструватися</h2>
                <form action="" className={styles.register__form}>
                    <div className={`${styles.register__inputContainer} ${styles.input_margin}`}>
                        <Input
                            tabIndex={1}
                            type={"text"}
                            placeholder={"*Імʼя"}
                        />
                        <Input
                            tabIndex={2}
                            type={"text"}
                            placeholder={"*Прізвище"}
                        />
                    </div>
                    <Input
                        className={styles.input_margin}
                        tabIndex={3}
                        type={"text"}
                        placeholder={"*Адреса електронної пошти"}
                    />
                    <Input
                        className={styles.input_margin}
                        tabIndex={4}
                        type={"text"}
                        placeholder={"*Підтвердіть адресу електронної пошти"}
                    />
                    <Input
                        tabIndex={5}
                        type={"password"}
                        placeholder={"*Пароль"}
                    />
                    <label htmlFor="email" className={`${styles.register__label} ${styles.label_text} ${styles.input_margin}`}>Пароль має містити великі та нижні регістри, спеціальні символи та цифри</label>
                    <Input
                        className={styles.input_margin}
                        tabIndex={6}
                        type={"password"}
                        placeholder={"*Підтвердіть пароль"}
                    />
                    <Input
                        className={styles.input_margin}
                        tabIndex={7}
                        type={"tel"}
                        placeholder={"*Номер телефону"}
                    />
                    <Checkbox className={`${styles.register__checkbox_first} ${styles.input_margin}`}>Так, я хочу отримувати інформаційні листи від Galiery. Реєструючись на розсилку, я приймаю Galiery | Інформація про захист даних і даю свою згоду на збір, зберігання та обробку зазначених даних. Ви можете скасувати підписку на розсилку в будь-який час за посиланням в електронному листі або через наш зворотний зв'язок у розділі контакти.</Checkbox>
                    <Checkbox className={styles.register__checkbox_second}>Я підтверджую, що прочитав і приймаю декларацію про захист даних.</Checkbox>
                    <Button isFill={true}>Зареєструватися</Button>
                </form>
            </div>
        </section>
    )
}
export default Register
