import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {addShoeToCart} from "../actions/cartAction.js";
import shoes from "../services/shoesServices.js";

export const useShoeBuy = (article, warningMessage) => {
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
    }

    const addingInCart = () => {
        if (!selectedValue) {
            alert(warningMessage)
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
    }
    return {
        isShoeInCart,
        selectedValue,
        shoe,
        handleSelectChange,
        addingInCart
    }
}
