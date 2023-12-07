import React, {useState} from 'react'
import styles from './Faq.module.scss'
import items from './FaqItems.js'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className={styles.faq}>
            <div className={`${styles.faq__container} ${styles.container}`}>
                <h2 className={`${styles.faq__title} ${styles.title}`}>F.A.Q</h2>
                <div className={styles.faq__body}>
                    {items.map((item, index) => (
                        <div key={index} className={`${styles.faq__item} ${openIndex === index ? styles.open : ''}`}>
                            <div className={styles.faq__item_title} onClick={() => handleClick(index)}>
                                {item.title}
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
