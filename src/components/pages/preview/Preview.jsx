import React from 'react'
import styles from './Preview.module.scss'
import shoes from "../../../services/shoesServices.js"
import PreviewItem from "./previewItem/PreviewItem.jsx";

const Preview = () => {
    return (
        <section className={styles.preview}>
            <div className={`${styles.preview__container} ${styles.container}`}>
                <div className={styles.preview__body}>
                    <h2 className={`${styles.preview__title} ${styles.title}`}>Тиждень №1</h2>
                    <div className={styles.preview__text}>
                        <p>Цього тижня ви побачите...</p>
                        <p>Пам’ятайте, що участь у дропі можлива тільки користувачам, які оформили підписку.</p>
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
