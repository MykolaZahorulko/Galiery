import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import styles from './Cart.module.scss'
import Button from "../../ui/button/Button.jsx";
import {Link} from "react-router-dom";
import {removeFromCart} from "../../../actions/cartAction.js";
import '../../../i18n'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
const Cart = () => {
    const { t } = useTranslation()
    const [totalPrice, setTotalPrice] = useState(0)
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    let currentLng = i18next.language

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0)
        setTotalPrice(total)
    }, [cartItems])

    return (
        <div className={styles.cart}>
            <div className={`${styles.cart__container} ${styles.container}`}>
                <div className={styles.cart__body}>
                    <h2 className={`${styles.cart__title} ${styles.title}`}>{t('cart.yourCart')}</h2>
                    {cartItems.length === 0 ? (
                        <div className={styles.cart__info}>
                            <p>{t('cart.cartIsEmpty')}</p>
                            <p>{t('cart.addToCart')}</p>
                        </div>
                    ) : (
                        <div className={styles.cart__items}>
                            {cartItems.map((item, index) => (
                                <div key={index}
                                     className={`${styles.cart__item} ${styles.item}`}>
                                    <div className={styles.item__position}>
                                        <div
                                            className={`${styles.item__img} ${styles.img} ${item.article === "SS23B20" ? styles.item__img_large : ''}`}>
                                            <img src={`./images/previewPhotos/${item.article}PreviewPhoto.png`}
                                                 alt="Item preview picture"/>
                                        </div>
                                        <div className={styles.item__info}>
                                            <div
                                                className={`${styles.item__info_icon} ${styles.img}`}
                                                onClick={() => dispatch(removeFromCart(index))}
                                            >
                                               <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                            </div>
                                            <h6 className={styles.item__info_title}>{item.name}</h6>
                                            <p className={styles.item__info_text}>
                                                {t('cart.size')}{item.sizes} {item.article}
                                            </p>
                                            <p className={styles.item__info_text}>
                                                {t('cart.color')}{currentLng === 'en' ? item.color.en : item.color.uk}
                                            </p>
                                        </div>
                                    </div>
                                    <hr className={styles.item__hr}/>
                                    <div className={styles.item__resume}>
                                        <div className={styles.item__resume_summary}>
                                            <div className={styles.item__resume_summaryText}>{t('cart.subtotal')}</div>
                                            <div className={styles.item__resume_summarySum}>{item.price}</div>
                                        </div>
                                        <div className={styles.item__resume_shipping}>{t('cart.shipping')}
                                            {t('cart.shipping')}
                                        </div>
                                    </div>
                                    <hr className={styles.item__hr}/>
                                </div>
                            ))}
                            <div className={styles.item__result}>
                                <div>{t('cart.totalAmount')}</div>
                                <div>{totalPrice}€</div>
                            </div>
                        </div>
                    )}
                    <Link to='/Galiery/preview'>
                        <Button isFill={true}>{t('cart.continueShopping')}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Cart
