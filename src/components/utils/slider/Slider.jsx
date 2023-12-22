import React, {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './Slider.module.scss'
import {Pagination} from "swiper/modules";
import './paginationStyles.scss';

const Slider = ({shoe}) => {
    const [isDragging, setIsDragging] = useState(false);
    return (
        <Swiper
            className={styles.slider}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{clickable: true}}
            style={isDragging ? { cursor: 'grabbing' } : {}}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
        >
            {shoe.photos.map(image => (
                <SwiperSlide key={image} className={`${styles.image} ${styles.img}`}>
                    <img src={image} alt="Item image"/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default Slider
