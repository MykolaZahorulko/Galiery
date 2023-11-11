import React, {useEffect, useRef} from 'react'
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import useHeaderHeight from "../../../hooks/HeaderHeightHook.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurgerMenu} from "../../../actions/toggleBurgerMenu.js";
import {setHeaderHeight} from "../../../actions/headerAction.js";

const Header = () => {
    const menuBurgerRef = useRef(null);
    const headerHeight = useHeaderHeight(styles.header);
    const isBurgerOpen = useSelector((state) => state.burger.isBurgerOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isBurgerOpen) return;

        document.body.style.overflow = isBurgerOpen ? 'hidden' : 'auto';

        const handleClick = (e) => {
            if (!menuBurgerRef.current) return;
            if (!menuBurgerRef.current.contains(e.target)) {
                dispatch(toggleBurgerMenu());
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleClick);
        };
    }, [isBurgerOpen, dispatch]);

    useEffect(() => {
        dispatch(setHeaderHeight(headerHeight));
    }, [headerHeight, dispatch]);

    const handleBurgerClick = (e) => {
        e.stopPropagation();
        dispatch(toggleBurgerMenu());
    };
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__body}>
                    <div
                        ref={menuBurgerRef}
                        className={styles.header__burger}
                        onClick={handleBurgerClick}
                    >
                        <span></span>
                    </div>
                    <div className={styles.header__logo}>
                        <Link to="/"><span>g</span>aliery</Link>
                    </div>
                    <div className={`${styles.header__mobile_background} ${isBurgerOpen ? styles._active : ''}`}></div>
                    <nav
                        className={`${styles.header__menu} ${isBurgerOpen ? styles._active : ''}`}
                        ref={menuBurgerRef}
                        style={{top: headerHeight}}
                    >
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__item} onClick={() => dispatch(toggleBurgerMenu(false))}><Link to="/">Головна</Link>
                            </li>
                            <li className={styles.menu__item} onClick={() => dispatch(toggleBurgerMenu(false))}><Link
                                to="/preview">Передогляд</Link>
                            </li>
                            <li className={styles.menu__item} onClick={() => dispatch(toggleBurgerMenu(false))}><Link
                                to="/subscription">Підписка</Link></li>
                            <li className={styles.menu__item} onClick={() => dispatch(toggleBurgerMenu(false))}><Link
                                to="/contacts">Контакти</Link>
                            </li>
                            <li className={styles.menu__item} onClick={() => dispatch(toggleBurgerMenu(false))}><Link to="/faq">F.A.Q.</Link>
                            </li>
                            <li className={styles.menu__item} onClick={() => dispatch(toggleBurgerMenu(false))}><Link to="/signin">
                                <div className={`${styles.menu__item_icon} ${styles.img}`}>
                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_675_3077)">
                                            <path
                                                d="M6.5 0.5C7.36195 0.5 8.1886 0.84241 8.7981 1.4519C9.40759 2.0614 9.75 2.88805 9.75 3.75C9.75 4.61195 9.40759 5.4386 8.7981 6.0481C8.1886 6.65759 7.36195 7 6.5 7C5.63805 7 4.8114 6.65759 4.2019 6.0481C3.59241 5.4386 3.25 4.61195 3.25 3.75C3.25 2.88805 3.59241 2.0614 4.2019 1.4519C4.8114 0.84241 5.63805 0.5 6.5 0.5ZM6.5 8.625C10.0913 8.625 13 10.0794 13 11.875V13.5H0V11.875C0 10.0794 2.90875 8.625 6.5 8.625Z"
                                                fill="#0F0E0E"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_675_3077">
                                                <rect width="13" height="13" fill="white" transform="translate(0 0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                | Вхід до акаунту</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.header__panel}>
                        <div className={styles.panel__list}>
                            <div className={`${styles.panel__item} ${styles.img}`}><img
                                src="./images/icons/language.svg" alt="Earth"/></div>
                            <Link className={`${styles.panel__item} ${styles.img}`} to="/signin"
                                  onClick={() => dispatch(toggleBurgerMenu(false))}>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2002_594)">
                                        <path
                                            d="M9 0.5C10.1935 0.5 11.3381 0.974106 12.182 1.81802C13.0259 2.66193 13.5 3.80653 13.5 5C13.5 6.19347 13.0259 7.33807 12.182 8.18198C11.3381 9.02589 10.1935 9.5 9 9.5C7.80653 9.5 6.66193 9.02589 5.81802 8.18198C4.97411 7.33807 4.5 6.19347 4.5 5C4.5 3.80653 4.97411 2.66193 5.81802 1.81802C6.66193 0.974106 7.80653 0.5 9 0.5ZM9 11.75C13.9725 11.75 18 13.7638 18 16.25V18.5H0V16.25C0 13.7638 4.0275 11.75 9 11.75Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2002_594">
                                            <rect width="18" height="19" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link className={`${styles.panel__item} ${styles.img}`} to="/cart"
                                  onClick={() => dispatch(toggleBurgerMenu(false))}><img
                                src="./images/icons/cart.svg" alt="Cart"/></Link>
                        </div>
                    </div>
                </div>
                <hr className={styles.header__separator}/>
            </div>
        </header>
    )
}
export default Header
