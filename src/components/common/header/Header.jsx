import React, {useEffect, useRef, useState} from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { toggleBurgerMenu } from "../../../actions/toggleBurgerMenu.js";
import useHeaderBurger from "../../../hooks/HeaderBurgerHook.jsx";
import useWindowResize from "../../../hooks/useWindowResize.jsx";
import {toggleLanguageMenu} from "../../../actions/toggleLanguageMenu.js";
import {useTranslation} from "react-i18next";
import '../../../i18n'

const Header = () => {
  const menuBurgerRef = useRef(null)
  const isBurgerOpen = useHeaderBurger(menuBurgerRef)
  const dispatch = useDispatch()
  const windowWidth = useWindowResize()
  const isWindowWidthOk = windowWidth <= 768;
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${styles.container}`}>
        <div className={styles.header__body}>
          <div
            ref={menuBurgerRef}
            className={styles.header__burger}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleBurgerMenu())
            }}
          >
            <span></span>

          </div>
          <div className={styles.header__logo}>
            <Link to="/Galiery/">
              <span>g</span>aliery
            </Link>
          </div>
          <div
            className={`${styles.header__mobile_background} ${
              isBurgerOpen ? styles._active : ""
            }`}
          ></div>
          <nav
            className={`${styles.header__menu} ${
              isBurgerOpen ? styles._active : ""
            }`}
            ref={menuBurgerRef}
          >
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/Galiery/"
                  onClick={() =>
                    isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                  }
                >
                  {t('header.home')}
                </Link>
                <span
                  onClick={() =>
                    isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                  }
                >
                  <svg
                    width="21"
                    height="8"
                    viewBox="0 0 21 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                      fill="#818181"
                    />
                  </svg>
                </span>
              </li>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/Galiery/preview"
                  onClick={() =>
                    isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                  }
                >
                  {t('header.preview')}
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/Galiery/subscription"
                  onClick={() =>
                    isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                  }
                >
                  {t('header.subscription')}
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/Galiery/contacts"
                  onClick={() =>
                    isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                  }
                >
                  {t('header.contacts')}
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/Galiery/faq"
                  onClick={() =>
                    isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                  }
                >
                  F.A.Q.
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/Galiery/login"
                  onClick={() =>
                    isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                  }
                >
                  <div className={`${styles.menu__item_icon} ${styles.img}`}>
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_675_3077)">
                        <path
                          d="M6.5 0.5C7.36195 0.5 8.1886 0.84241 8.7981 1.4519C9.40759 2.0614 9.75 2.88805 9.75 3.75C9.75 4.61195 9.40759 5.4386 8.7981 6.0481C8.1886 6.65759 7.36195 7 6.5 7C5.63805 7 4.8114 6.65759 4.2019 6.0481C3.59241 5.4386 3.25 4.61195 3.25 3.75C3.25 2.88805 3.59241 2.0614 4.2019 1.4519C4.8114 0.84241 5.63805 0.5 6.5 0.5ZM6.5 8.625C10.0913 8.625 13 10.0794 13 11.875V13.5H0V11.875C0 10.0794 2.90875 8.625 6.5 8.625Z"
                          fill="#0F0E0E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_675_3077">
                          <rect
                            width="13"
                            height="13"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  | {t('header.login')}
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header__panel}>
            <div className={styles.panel__list}>
              <div
                  className={`${styles.panel__item} ${styles.img}`}
                  onClick={() => dispatch(toggleLanguageMenu())}
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.924 11.2999C12.996 10.7059 13.05 10.1119 13.05 9.49995C13.05 8.88795 12.996 8.29395 12.924 7.69995H15.966C16.11 8.27595 16.2 8.87895 16.2 9.49995C16.2 10.1209 16.11 10.7239 15.966 11.2999M11.331 16.3039C11.871 15.3049 12.285 14.2249 12.573 13.0999H15.228C14.3561 14.6014 12.9727 15.7387 11.331 16.3039ZM11.106 11.2999H6.894C6.804 10.7059 6.75 10.1119 6.75 9.49995C6.75 8.88795 6.804 8.28495 6.894 7.69995H11.106C11.187 8.28495 11.25 8.88795 11.25 9.49995C11.25 10.1119 11.187 10.7059 11.106 11.2999ZM9 16.6639C8.253 15.5839 7.65 14.3869 7.281 13.0999H10.719C10.35 14.3869 9.747 15.5839 9 16.6639ZM5.4 5.89995H2.772C3.63497 4.39444 5.01732 3.25528 6.66 2.69595C6.12 3.69495 5.715 4.77495 5.4 5.89995ZM2.772 13.0999H5.4C5.715 14.2249 6.12 15.3049 6.66 16.3039C5.02076 15.7384 3.64036 14.6009 2.772 13.0999ZM2.034 11.2999C1.89 10.7239 1.8 10.1209 1.8 9.49995C1.8 8.87895 1.89 8.27595 2.034 7.69995H5.076C5.004 8.29395 4.95 8.88795 4.95 9.49995C4.95 10.1119 5.004 10.7059 5.076 11.2999M9 2.32695C9.747 3.40695 10.35 4.61295 10.719 5.89995H7.281C7.65 4.61295 8.253 3.40695 9 2.32695ZM15.228 5.89995H12.573C12.2913 4.78526 11.8742 3.70925 11.331 2.69595C12.987 3.26295 14.364 4.40595 15.228 5.89995ZM9 0.499947C4.023 0.499947 0 4.54995 0 9.49995C0 11.8869 0.948211 14.1761 2.63604 15.8639C3.47177 16.6996 4.46392 17.3626 5.55585 17.8149C6.64778 18.2672 7.8181 18.4999 9 18.4999C11.3869 18.4999 13.6761 17.5517 15.364 15.8639C17.0518 14.1761 18 11.8869 18 9.49995C18 8.31805 17.7672 7.14773 17.3149 6.0558C16.8626 4.96387 16.1997 3.97171 15.364 3.13599C14.5282 2.30026 13.5361 1.63732 12.4442 1.18503C11.3522 0.732739 10.1819 0.499947 9 0.499947Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Link
                className={`${styles.panel__item} ${styles.img}`}
                to="/Galiery/login"
                onClick={() =>
                  isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                }
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="n one"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2002_594)">
                    <path
                      d="M9 0.5C10.1935 0.5 11.3381 0.974106 12.182 1.81802C13.0259 2.66193 13.5 3.80653 13.5 5C13.5 6.19347 13.0259 7.33807 12.182 8.18198C11.3381 9.02589 10.1935 9.5 9 9.5C7.80653 9.5 6.66193 9.02589 5.81802 8.18198C4.97411 7.33807 4.5 6.19347 4.5 5C4.5 3.80653 4.97411 2.66193 5.81802 1.81802C6.66193 0.974106 7.80653 0.5 9 0.5ZM9 11.75C13.9725 11.75 18 13.7638 18 16.25V18.5H0V16.25C0 13.7638 4.0275 11.75 9 11.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2002_594">
                      <rect width="18" height="19" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                className={`${styles.panel__item} ${styles.img}`}
                to="/Galiery/cart"
                onClick={() =>
                  isWindowWidthOk ? dispatch(toggleBurgerMenu(false)) : null
                }
              >
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.87413 18.5C3.60595 18.5 3.36143 18.417 3.14058 18.2509C2.91972 18.0848 2.76986 17.8678 2.69098 17.6L0.0407419 8.03161C-0.0381344 7.81055 -0.00248233 7.60529 0.147698 7.41582C0.297878 7.22635 0.498855 7.13161 0.750628 7.13161H5.53053L9.69519 0.926346C9.77407 0.80003 9.8845 0.697399 10.0265 0.618452C10.1685 0.539504 10.3183 0.500031 10.4761 0.500031C10.6338 0.500031 10.7837 0.539504 10.9257 0.618452C11.0676 0.697399 11.1781 0.80003 11.2569 0.926346L15.4216 7.13161H20.2488C20.5012 7.13161 20.7025 7.22635 20.8527 7.41582C21.0029 7.60529 21.0382 7.81055 20.9587 8.03161L18.3085 17.6C18.2296 17.8684 18.0797 18.0857 17.8589 18.2518C17.638 18.4179 17.3935 18.5007 17.1253 18.5H3.87413ZM10.4997 14.7106C11.0203 14.7106 11.4661 14.5249 11.8372 14.1535C12.2082 13.7821 12.3934 13.3362 12.3928 12.8158C12.3928 12.2948 12.2072 11.8486 11.8362 11.4772C11.4652 11.1058 11.0197 10.9204 10.4997 10.9211C9.97915 10.9211 9.53334 11.1068 9.1623 11.4781C8.79127 11.8495 8.60607 12.2954 8.6067 12.8158C8.6067 13.3369 8.79222 13.7831 9.16325 14.1544C9.53429 14.5258 9.97978 14.7112 10.4997 14.7106ZM7.82583 7.13161H13.15L10.4761 3.15266L7.82583 7.13161Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <hr className={styles.header__separator} />
      </div>
    </header>
  );
};
export default Header;
