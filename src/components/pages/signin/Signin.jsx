import React from 'react'
import styles from './Signin.module.scss'
const Signin = () => {
    return (
        <section className={styles.signin}>
            <div className={`${styles.signin__container} ${styles.container}`}>
                <h2 className={`${styles.signin__title} ${styles.title}`}>Увійти</h2>
            </div>
        </section>
    )
}
export default Signin
