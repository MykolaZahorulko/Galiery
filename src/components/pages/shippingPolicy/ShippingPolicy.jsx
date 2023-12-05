import React from 'react'
import styles from './ShippingPolicy.module.scss'
const ShippingPolicy = () => {
    return (
        <div className={styles.shipping}>
            <div className={`${styles.shipping__container} ${styles.container}`}>
                <h2 className={`${styles.shipping__title} ${styles.title}`}>Політика доставки</h2>
                <div className={styles.shipping__text}>
                    <p className={styles.shipping__paragraph}>Ми відправляємо наші товари по всій Україна та Європі.</p>
                    <p className={styles.shipping__mainParagraph}>Тарифи:</p>
                    <p className={styles.shipping__paragraph}>- Україна: <span>10€ (Нова Пошта)</span></p>
                    <p className={styles.shipping__paragraph}>- Країни Європи: <span>15€ (DHL Express)</span></p>
                    <p className={styles.shipping__paragraph}>Всі товари по Україні та Європі відправляються протягом 5-7 днів. Після відправки клієнт отримає повідомння на електронну пошту з трек номером відстеження посилки.</p>
                    <p className={styles.shipping__paragraph}>Якщо у Вас є питання стосовно доставки, Ви завжди можете звернутися до нашої підтримки.</p>
                </div>
            </div>
        </div>
    )
}
export default ShippingPolicy
