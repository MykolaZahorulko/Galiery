import Button from "../../ui/button/Button.jsx";
import React from "react";
import styles from "./Home.module.scss";
import useScrollAnimation from "../../utils/useScrollAnimation.jsx";
import {Link} from "react-router-dom";
import useWindowResize from "../../../hooks/useWindowResize.jsx";
import Preview from "../preview/Preview.jsx";
import {useTranslation} from "react-i18next";
import '../../../i18n'

const Home = () => {
    const {t} = useTranslation()
    const windowWidth = useWindowResize();

    useScrollAnimation(styles);
    return (
        <div className={styles.home}>
            <section
                className={styles.retail}
                style={{backgroundImage: "url(/images/retail_background.jpg)"}}
            >
                <div className={`${styles.retail__container} ${styles.container}`}>
                    <div className={styles.retail__content}>
                        <h1 className={`${styles.retail__mobile_title} ${styles.title}`}>
                            {t('home.retailMobile')}
                        </h1>
                        <div className={styles.retail__information}>
                            <h1 className={`${styles.retail__title} ${styles.title}`}>
                                {t('home.retail')}
                            </h1>
                            <p className={styles.retail__text}>
                                {t('home.retailText')}
                            </p>
                            <Link to={"/subscription"}>
                                <Button className={styles.retail__button}>
                                    {t('home.subscribe')}
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
                                        {t('home.original')}
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
                                        {t('home.fastShipping')}
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
                                        {t('home.limitation')}
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
                                        style={{alignSelf: "end"}}
                                    >
                                        {t('home.weeklyAnonse')}
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
                                        style={{visibility: "hidden"}}
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
                        <img src="./images/detailsRedSuit.png" alt="A man in a red suit"/>
                    </div>
                    <div className={styles.details__styleElement1}>
                        <img src="./images/galieryStyledElement.png" alt="GALIERY"/>
                    </div>
                    <div className={styles.details__styleElement2}>
                        <img src="./images/galieryStyledElement.png" alt="GALIERY"/>
                    </div>
                </div>
                <div className={styles.details__content}>
                    <div className={styles.details__body}>
                        <h2 className={`${styles.details__title} ${styles.title}`}>
                            {t('home.details')}
                        </h2>
                        <p className={styles.details__text}>
                            {t('home.subscribeInterest')}
                            <Link to="subscription">{t('home.ourSubscribe')}</Link>
                            {t('home.exclusiveClothes')}
                        </p>
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
                                    {t('home.everyWeek')}
                                </p>
                                <hr className={styles.details__separator}/>
                                <div>
                                    {t('home.seeInInst')}<Link to="/contacts">{t('home.contacts')}</Link>
                                </div>
                            </div>
                            <div className={styles.details__imagesAndText_images}>
                                <div
                                    className={`${styles.details__imagesAndText_images_supreme} ${styles.img}`}
                                >
                                    <img src="./images/detailsSupreme.png" alt="Man in supreme"/>
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
            <Preview/>
        </div>
    );
};

export default Home;
