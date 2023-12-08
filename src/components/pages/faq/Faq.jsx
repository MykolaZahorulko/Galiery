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
                                <div className={`${styles.faq__item_icon} ${styles.img}`}>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-1" x2="20" y2="-1" transform="matrix(0 -1 0.99995 -0.00999686 11 20)" stroke="#4A4A4A" stroke-width="2"/><line y1="-1" x2="20" y2="-1" transform="matrix(1 0 -0.00999685 0.99995 0.0107422 10.5116)" stroke="#4A4A4A" stroke-width="2"/></svg>
                                </div>
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
