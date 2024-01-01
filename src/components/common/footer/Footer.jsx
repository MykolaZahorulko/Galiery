import useWindowResize from "../../../hooks/useWindowResize.jsx";
import React, { useState } from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import '../../../i18n'

const Footer = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation()

  function handleSubscribe() {
    if (inputValue) {
            setIsSubscribe(true);
            setInputValue("");
    } else {
        if (!isSubscribe) {
            setIsSubscribe(false);
        }
    }
  }

  function handleEnterKeyPress(e) {
    if (e.keyCode === 13) {
      handleSubscribe();
    }
  }

  const windowWidth = useWindowResize();

  return (
    <footer className={styles.footer}>
      {windowWidth > 768 ? (
        <img
          src="./images/footerBackgraund.jpg"
          alt="Lots of sneakers"
          className={styles.footer__backgraund}
        />
      ) : (
        <img
          src="./images/footerBackgraundMobile.jpg"
          alt="Lots of sneakers"
          className={styles.footer__backgraund}
        />
      )}
      <div className={`${styles.footer__container} ${styles.container}`}>
        <div className={styles.footer__body}>
          <div className={styles.footer__item}>
            <h3 className={styles.footer__item_title}>{t('footer.media')}</h3>
            <div className={styles.footer__item_link}>
              <a href="https://www.instagram.com/galierydrop?igshid=MzRlODBiNWFlZA%3D%3D">
                <div
                  className={`${styles.footer__item_linkIcon} ${styles.img}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                      fill="white"
                    />
                  </svg>
                </div>
                galiery.drop
              </a>
            </div>
            <div className={styles.footer__item_link}>
              <a href="https://t.me/galierydrop">
                <div
                  className={`${styles.footer__item_linkIcon} ${styles.img}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
                      fill="white"
                    />
                  </svg>
                </div>
                galiery.drop
              </a>
            </div>
            <div className={styles.footer__item_link}>
              <a href="https://www.tiktok.com/@galierydrop?_t=8fEwxeufngU&_r=1">
                <div
                  className={`${styles.footer__item_linkIcon} ${styles.img}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6 5.82C15.9165 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4262 16.071 12.1429 16.7066 11.6598 17.1729C11.1767 17.6393 10.5315 17.8999 9.86003 17.9C8.44003 17.9 7.26003 16.74 7.26003 15.3C7.26003 13.58 8.92003 12.29 10.63 12.82V9.66C7.18003 9.2 4.16003 11.88 4.16003 15.3C4.16003 18.63 6.92003 21 9.85003 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2974 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                      fill="white"
                    />
                  </svg>
                </div>
                galiery.drop
              </a>
            </div>
            <div className={styles.footer__item_link}>
              <a href="mailto:galierydrop.help@gmail.com">
                <div
                  className={`${styles.footer__item_linkIcon} ${styles.img}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                      fill="white"
                    />
                  </svg>
                </div>
                galierydrop.help@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.footer__item}>
            <h3 className={styles.footer__item_title}>{t('footer.links')}</h3>
            <div className={styles.footer__item_link}>
              <Link to="/Galiery/">{t('footer.main')}</Link>
            </div>
            <div className={styles.footer__item_link}>
              <Link to="/faq" className={styles.footer__item_link}>
                {t('footer.faq')}
              </Link>
            </div>
            <div className={styles.footer__item_link}>
              <Link to="/shipping-policy" className={styles.footer__item_link}>
                {t('footer.shippingPolicy')}
              </Link>
            </div>
            <div className={styles.footer__item_link}>
              <Link to="/terms-of-use" className={styles.footer__item_link}>
                {t('footer.termsOfUse')}
              </Link>
            </div>
          </div>
          <div className={styles.footer__item}>
            <h3 className={styles.footer__item_title}>
              {t('footer.subscribeTitle')}
            </h3>
            <div className={styles.footer__item_input}>
              <input
                type="text"
                placeholder={t('footer.placeholder')}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(e) => handleEnterKeyPress(e)}
              />
              {!isSubscribe ? (
                <div
                  className={`${styles.footer__item_inputStringIcon} ${styles.img}`}
                  onClick={() => handleSubscribe()}
                >
                  <svg
                    width="41"
                    height="16"
                    viewBox="0 0 41 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9L40 9V7L0 7L0 9Z"
                      fill="black"
                    />
                  </svg>
                </div>
              ) : (
                <div className={`${styles.footer__item_inputCheckIcon} ${styles.img}`}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.9092 8.15918L11.25 23.833L3.09082 15.6592L4.40918 14.3408L11.25 21.167L25.5908 6.84082L26.9092 8.15918Z"
                      fill="black"
                    />
                  </svg>
                </div>
              )}
            </div>
            <p className={`${isSubscribe ? styles._active : ""}`}>
              {t('footer.subscribeThankYou')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
