import React from 'react'
import styles from './Button.module.scss'

const Button = ({children, className, isFill, ...props}) => {
    const buttonFill = isFill ? styles.fill : styles.unfilled
    console.log(buttonFill)
    return (
        <button className={`${buttonFill} ${className}`} {...props}>
            {children}
        </button>
    )
}
export default Button
