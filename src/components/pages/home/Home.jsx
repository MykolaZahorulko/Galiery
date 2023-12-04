import Button from "../../ui/button/Button.jsx";
import React from "react";
import styles from "./Home.module.scss";
import useScrollAnimation from "../../utils/useScrollAnimation.jsx";
import { Link } from "react-router-dom";
import useWindowResize from "../../../hooks/useWindowResize.jsx";

const Home = () => {
  const windowWidth = useWindowResize();

  useScrollAnimation(styles);
  return (
    <div className={styles.home}>
      <section
        className={styles.retail}
        style={{ backgroundImage: "url(/images/retail_background.jpg)" }}
      >
        <div className={`${styles.retail__container} ${styles.container}`}>
          <div className={styles.retail__content}>
            <h1 className={`${styles.retail__mobile_title} ${styles.title}`}>
              Ритейл одягу та взуття
            </h1>
            <div className={styles.retail__information}>
              <h1 className={`${styles.retail__title} ${styles.title}`}>
                Ритейл одягу
              </h1>
              <p className={styles.retail__text}>
                Наша команда Galiery дає вам можливість купувати лімітовані
                позиції одягу та взуття за ритейл цінами. В нашому магазині
                зібрані найрідші та найпопулярніші моделі з усього світу.
                Залишайтесь з нами та приймайте участь у наших дропах кожного
                дня!
              </p>
              <Link to={"/subscription"}>
                <Button className={styles.retail__button}>
                  Оформити підписку
                </Button>
              </Link>
            </div>
            <div className={styles.retail__proposition}>
              <div
                className={`${styles.retail__shoes} ${styles._anim_items} ${styles._anim_no_hide}`}
              >
                <div className={styles.retail__shoe}>
                  <div className={`${styles.retail__shoe_img0} ${styles.img}`}>
                    <img
                      src="/images/retail_shoe/retailShoe1.png"
                      alt="Shoe image"
                    />
                  </div>
                  <div className={styles.retail__shoe_info}>
                    Оригінальна продукція
                  </div>
                </div>
                <div className={styles.retail__shoe}>
                  <div className={`${styles.retail__shoe_img1} ${styles.img}`}>
                    <img
                      src="/images/retail_shoe/retailShoe2.png"
                      alt="Shoe image"
                    />
                  </div>
                  <div className={styles.retail__shoe_info}>
                    Швидка доставка
                  </div>
                </div>

                <div className={styles.retail__shoe}>
                  <div className={`${styles.retail__shoe_img2} ${styles.img}`}>
                    <img
                      src="/images/retail_shoe/retailShoe3.png"
                      alt="Shoe image"
                    />
                  </div>
                  <div className={styles.retail__shoe_info}>
                    Лімітовані позиції
                  </div>
                </div>

                <div className={styles.retail__shoe}>
                  <div className={`${styles.retail__shoe_img3} ${styles.img}`}>
                    <img
                      src="/images/retail_shoe/retailShoe4.png"
                      alt="Shoe image"
                    />
                  </div>
                  <div
                    className={styles.retail__shoe_info}
                    style={{ alignSelf: "end" }}
                  >
                    Щотижня оновлення асортименту
                  </div>
                </div>

                <div className={styles.retail__shoe}>
                  <div className={`${styles.retail__shoe_img4} ${styles.img}`}>
                    <img
                      src="/images/retail_shoe/retailShoe5.png"
                      alt="Shoe image"
                    />
                  </div>
                  <div
                    className={styles.retail__shoe_info}
                    style={{ visibility: "hidden" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.details}>
        <div className={styles.details__image_part}>
          <div className={`${styles.details__image} ${styles.img}`}>
            <img src="./images/detailsRedSuit.png" alt="A man in a red suit" />
          </div>
          <div className={styles.details__styleElement1}>
            <img src="./images/galieryStyledElement.png" alt="GALIERY" />
          </div>
          <div className={styles.details__styleElement2}>
            <img src="./images/galieryStyledElement.png" alt="GALIERY" />
          </div>
        </div>
        <div className={styles.details__content}>
          <div className={styles.details__body}>
            <h2 className={`${styles.details__title} ${styles.title}`}>
              Детальніше про проект
            </h2>
            {windowWidth > 768 ? (
              <p className={styles.details__text}>
                Якщо в тебе є зацікавленість у перепродажі одягу та взуття, або
                ти просто не хочеш переплачувати ресейлерам, щоб отримати бажану
                пару, тоді наша пропозиція саме для тебе. Оформивши{" "}
                <Link to="subscription">нашу підписку</Link> на сайті в тебе
                з’явиться можливість купувати ексклюзивний одяг без націнки,
                збирати свою колекцію лімітованих айтемів або продавати речі в
                кілька разів дорожче та заробляти на цьому.
              </p>
            ) : (
              <p className={styles.details__text}>
                Якщо тебе цікавить перепродаж одягу та взуття, або ти просто не
                хочеш переплачувати ресейлерам, щоб отримати бажану пару, тоді
                наша пропозиція саме для тебе. Оформивши{" "}
                <Link to="subscription">нашу підписку</Link> на сайті в тебе
                з’явиться можливість купувати ексклюзивний одяг без націнки,
                збирати колекцію лімітованих айтемів або продавати їх у кілька
                разів дорожче, заробляючи на цьому.
              </p>
            )}

            <div className={styles.details__mobile_image_part}>
              <div className={`${styles.details__mobile_image} ${styles.img}`}>
                <img
                  src="./images/detailsRedSuit.png"
                  alt="A man in a red suit"
                />
              </div>
              <div className={styles.details__mobile_styleElement1}>
                <img
                  src="./images/galieryMobileStyledElement.png"
                  alt="GALIERY"
                />
              </div>
              <div className={styles.details__mobile_styleElement2}>
                <img
                  src="./images/galieryMobileStyledElement.png"
                  alt="GALIERY"
                />
              </div>
            </div>
            <div className={styles.details__imagesAndText}>
              <div className={styles.details__imagesAndText_text}>
                <p>
                  Кожного тижня в нас оновлюватиметься асортимент і забере річ
                  на дропі той, хто буде найшвидшим. Усі дати та час оновлення
                  ми кожного разу оголошуватимемо в нашому інстаграмі.
                </p>
                <hr className={styles.details__separator} />
                <div>
                  Дивитись інстаграм у розділі
                  <Link to="/contacts"> контакти</Link>
                </div>
              </div>
              <div className={styles.details__imagesAndText_images}>
                <div
                  className={`${styles.details__imagesAndText_images_supreme} ${styles.img}`}
                >
                  <img src="./images/detailsSupreme.png" alt="Man in supreme" />
                </div>
                <div
                  className={`${styles.details__imagesAndText_images_jacket} ${styles.img}`}
                >
                  <img
                    src="./images/detailsYellowJacket.png"
                    alt="Man in yellow jacket"
                  />
                </div>
              </div>
              <div
                className={`${styles.details__imagesAndText_MobileBackground} ${styles.img}`}
              >
                <img
                  src="./images/detailsYellowJacket.png"
                  alt="Man in yellow jacket"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
