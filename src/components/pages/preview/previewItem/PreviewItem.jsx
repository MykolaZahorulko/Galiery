import React from 'react'
import styles from './PreviewItem.module.scss'
import {Link} from "react-router-dom";

const PreviewItem = ({shoe, ...props}) => {
    return (
        <div {...props} className={styles.item}>
            <Link to={`/${shoe.article}`} className={styles.item__content}>
                <div
                    className={`${styles.item__img} ${styles.img} ${shoe.article === "SS23B20" ? styles.item__img_large : ''}`}>
                    <img src={`./images/previewPhotos/${shoe.article}PreviewPhoto.png`} alt="Shoe Photo"/>
                </div>
            </Link>
            <Link to={`/${shoe.article}`} className={styles.item__text}>{shoe.name}</Link>
            <div className={styles.item__text}>{shoe.price}</div>
        </div>
    )
}
export default PreviewItem
