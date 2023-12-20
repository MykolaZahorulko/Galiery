import React from 'react'
import {useParams} from "react-router-dom";
import shoes from "../../../services/shoesServices.js";
import styles from './ShoeBuy.module.scss'
const ShoeBuy = () => {
    const {article} = useParams()
    const shoe = shoes.find(shoe => shoe.article === article)
    console.log(shoe)
    if (!shoe) {
        return <div>Товар не знайдено</div>;
    }

    return (
        <div>{shoe.name}</div>
    )
}
export default ShoeBuy
