import React from "react";
import styles from './ShoeBuy.module.scss'
import Select from "../../ui/select/Select.jsx";
import Button from "../../ui/button/Button.jsx";
import Slider from "../../utils/slider/Slider.jsx";
import {useShoeBuy} from "../../../hooks/shoeBuyHook.jsx";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import '../../../i18n'
import i18next from "i18next";
const ShoeBuy = () => {
    const {t} =useTranslation()
    const {article} = useParams()
    const warningMessage = t('shoeBuy.firstSelectSize')
    let currentLng = i18next.language

    const {
        isShoeInCart,
        selectedValue,
        shoe,
        handleSelectChange,
        addingInCart
    } = useShoeBuy(article, warningMessage)

    return (
        <div className={styles.shoe}>
            <div className={`${styles.shoe__container} ${styles.container}`}>
                <div className={styles.shoe__body}>
                    <Slider shoe={shoe}/>
                    <div className={styles.shoe__content}>
                        <h3 className={styles.shoe__name}>
                            <p>{shoe.name}</p>
                            <div>{shoe.price}</div>
                        </h3>
                        <p className={styles.shoe__pdv}>{t('shoeBuy.pdv')}</p>
                        <Select
                            value={selectedValue}
                            onChange={handleSelectChange}
                            name="sizes select"
                            options={shoe.sizes}
                            defaultValue={t('shoeBuy.selectSize')}
                            className={styles.shoe__select}
                        />
                        <Button isFill={true} className={styles.shoe__button} onClick={() => addingInCart()}>
                            {isShoeInCart ? t('shoeBuy.itemAdded') : t('shoeBuy.addToCart')}
                        </Button>
                        <div className={styles.shoe__info}>
                            <p>{t('shoeBuy.color')}{currentLng === 'en' ? shoe.color.en : shoe.color.uk}</p>
                            <p>{t('shoeBuy.article')}{shoe.article}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShoeBuy
