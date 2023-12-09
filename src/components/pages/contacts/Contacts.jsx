import React from "react";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <section className={styles.contact}>
        <div className={`${styles.contact__backgraund} ${styles.img}`}>
          <img src="./images/contactsBackgraund.jpg" alt="shoes" />
        </div>
        <div className={`${styles.contact__container} ${styles.container}`}>
          <div className={styles.contact__body}>
            <div className={styles.contact__messageArea}>
              <div className={styles.contact__messageArea_area}>
                <form className={styles.contact__form}>
                  <label htmlFor="title" className={styles.contact__form_title}>
                    Надішліть нам повідомлення
                  </label>
                  <input
                    type="text"
                    name="name"
                    tabIndex="1"
                    placeholder="Повне імʼя"
                    className={styles.contact__form_input}
                  />
                  <input
                    type="tel"
                    name="tel"
                    tabIndex="2"
                    placeholder="Номер телефону"
                    className={styles.contact__form_input}
                  />
                  <input
                    type="email"
                    name="email"
                    tabIndex="3"
                    placeholder="Пошта"
                    className={styles.contact__form_input}
                  />
                  <input
                    type="text"
                    name="help"
                    tabIndex="4"
                    placeholder="Чим ми можемо Вам допомогти?"
                    className={styles.contact__form_input}
                  />
                  <button
                    type="submit"
                    name="submiteBtn"
                    tabIndex="5"
                    className={styles.contact__form_button}
                  >
                    Надіслати
                  </button>
                </form>
              </div>
            </div>
            <div className={styles.info}>
              <div className={`${styles.info__backgraund} ${styles.img}`}>
                <img src="./images/contactsBackgraund.jpg" alt="shoes" />
              </div>
              <div className={styles.info__item}>
                <h4 className={styles.info__item_title}>Контактна інформація</h4>
                <div className={styles.info__item_link}>
                  <a href="https://www.instagram.com/galierydrop?igshid=MzRlODBiNWFlZA%3D%3D">
                    <div
                      className={`${styles.info__item_linkIcon} ${styles.img}`}
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
                <div className={styles.info__item_link}>
                  <a href="https://t.me/galierydrop">
                    <div
                      className={`${styles.info__item_linkIcon} ${styles.img}`}
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
              </div>
              <div className={styles.info__item}>
                <h4 className={styles.info__item_title}>Часи роботи</h4>
                <div className={styles.info__item_link}>
                    Пн-сб: 10:00-22:00
                </div>
                <div className={styles.info__item_link}>
                    Нд: 10:00-18:00
                </div>
              </div>
              <div className={styles.info__item}>
                <h4 className={styles.info__item_title}>Слідкуйте за нами</h4>
                <div className={styles.info__item_linkList}>
                  <a className={styles.info__item_linkList_link} href="https://www.instagram.com/galierydrop?igshid=MzRlODBiNWFlZA%3D%3D">
                    <div className={`${styles.info__item_linkIcon} ${styles.img}`}>
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
                  </a>
                  <a className={styles.info__item_linkList_link} href="https://t.me/galierydrop">
                    <div className={`${styles.info__item_linkIcon} ${styles.img}`}>
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6569 1.43229C13.5891 1.37375 13.5066 1.33483 13.4183 1.3197C13.3301 1.30457 13.2393 1.31381 13.1559 1.34643L2.07297 5.68369C1.9159 5.74477 1.78292 5.85522 1.69405 5.99841C1.60519 6.14161 1.56524 6.30979 1.58023 6.47765C1.59522 6.64551 1.66434 6.80396 1.77717 6.92914C1.89001 7.05432 2.04045 7.13946 2.20586 7.17174L5.0775 7.73557V10.9375C5.07694 11.1119 5.12876 11.2825 5.22627 11.4271C5.32378 11.5717 5.46247 11.6837 5.62438 11.7485C5.78603 11.8145 5.9638 11.8304 6.13458 11.794C6.30536 11.7576 6.46124 11.6707 6.58195 11.5446L7.96664 10.1085L10.1634 12.0313C10.3219 12.1719 10.5263 12.2497 10.7382 12.25C10.831 12.2499 10.9233 12.2354 11.0116 12.2068C11.156 12.161 11.2858 12.0782 11.3882 11.9666C11.4906 11.855 11.5619 11.7186 11.5952 11.5708L13.8149 1.91408C13.8348 1.82699 13.8306 1.73614 13.8027 1.65127C13.7749 1.56639 13.7245 1.49069 13.6569 1.43229ZM10.3133 3.40104L5.41383 6.90979L2.70133 6.37768L10.3133 3.40104ZM5.9525 10.9375V8.34096L7.3082 9.52987L5.9525 10.9375ZM10.7393 11.375L6.21773 7.41018L12.7255 2.74588L10.7393 11.375Z" fill="white"/></svg>
                    </div>
                  </a>
                  <a className={styles.info__item_linkList_link} href="https://www.tiktok.com/@galierydrop?_t=8fEwxeufngU&_r=1">
                    <div className={`${styles.info__item_linkIcon} ${styles.img}`}>
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.38509 2.39488C6.98633 1.93966 6.76659 1.35505 6.76675 0.749878H4.96425V7.98321C4.95035 8.37464 4.78509 8.74541 4.50328 9.01742C4.22147 9.28944 3.8451 9.44149 3.45342 9.44154C2.62508 9.44154 1.93675 8.76488 1.93675 7.92488C1.93675 6.92154 2.90508 6.16904 3.90259 6.47821V4.63488C1.89008 4.36654 0.128418 5.92988 0.128418 7.92488C0.128418 9.86738 1.73842 11.2499 3.44759 11.2499C5.27925 11.2499 6.76675 9.76238 6.76675 7.92488V4.25571C7.49767 4.78062 8.37521 5.06225 9.27509 5.06071V3.25821C9.27509 3.25821 8.17842 3.31071 7.38509 2.39488Z" fill="white"/></svg>
                    </div>
                  </a>
                  <a className={styles.info__item_linkList_link} href="mailto:galierydrop.help@gmail.com">
                    <div className={`${styles.info__item_linkIcon} ${styles.img}`}>
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
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.info__styleComponent}></div>
          </div>
        </div>
      </section>
      <section className={styles.insta}></section>
    </div>
  );
};
export default Contacts;
