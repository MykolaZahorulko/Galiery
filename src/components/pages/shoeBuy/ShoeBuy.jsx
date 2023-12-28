import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import shoes from "../../../services/shoesServices.js";
import styles from './ShoeBuy.module.scss'
import Select from "../../ui/select/Select.jsx";
import Button from "../../ui/button/Button.jsx";
import Slider from "../../utils/slider/Slider.jsx";
import {useDispatch} from "react-redux";
import {addShoeToCart} from "../../../actions/cartAction.js";

const ShoeBuy = () => {
    const {article} = useParams()
    const [isShoeInCart, setIsShoeInCart] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')
    const shoe = shoes.find(shoe => shoe.article === article)
    const dispatch = useDispatch()

    if (!shoe) {
        return <div>Товар не знайдено</div>
    }

    const handleSelectChange = (event) => {
        const value = event.target.value
        setSelectedValue(value)
    };

    const addingInCart = () => {
        if (!selectedValue) {
            alert('Спочатку треба вибрати розмір.')
        } else {
            const updatedShoe = {
                ...shoe,
                sizes: [selectedValue],
            }

            dispatch(addShoeToCart(updatedShoe))

            setIsShoeInCart(true);
            setTimeout(() => {
                setIsShoeInCart(false);
            }, 3000);
        }
    };

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
                        <p className={styles.shoe__pdv}>Податки та збори не включені.</p>
                        <Select
                            value={selectedValue}
                            onChange={handleSelectChange}
                            name="sizes select"
                            options={shoe.sizes}
                            defaultValue="Обрати розмір"
                            className={styles.shoe__select}
                        />
                        <Button isFill={true} className={styles.shoe__button} onClick={() => addingInCart()}>
                            {isShoeInCart ? 'Товар додано :)' : 'Додати до кошика'}
                        </Button>
                        <div className={styles.shoe__info}>
                            <p>Колір: {shoe.color}</p>
                            <p>Колір: {shoe.article}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShoeBuy
