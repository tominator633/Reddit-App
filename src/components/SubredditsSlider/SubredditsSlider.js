import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, A11y, Mousewheel, FreeMode } from 'swiper/modules';
import "swiper/css/bundle";
import styles from "./SubredditsSlider.module.css";
import SliderBtnPrev from "../SliderBtnPrev/SliderBtnPrev";



export default function SubredditsSlider ({subredditsData}) {
 
    return (
    <Swiper className={`${styles.swiper} ${styles.gb}`}
      modules={[FreeMode, Mousewheel, Navigation, A11y]}
      freeMode={true}
      grabCursor={true}
      mousewheel={true}
      navigation={false}
      spaceBetween={10}
      slidesPerView={4}
    >
      
      {subredditsData.map((item,index) => 
         (
          <SwiperSlide key={index} className={`${styles.swiperSlide} ${styles.gb}`}>
            <a href="#" className={`${styles.topic} ${styles.gb}`}>
                <figure id={styles.topicIcon} className={styles.gb}>
                <img src={item.iconSrc} alt={item.name}/>
                </figure>
                <h3>{item.name}</h3>
            </a>
          </SwiperSlide>
        )
      )}

      <SliderBtnPrev/>
    </Swiper>
    )
}


/*             breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              480: {
                slidesPerView: 4,
                spaceBetween: 5
              }
            }} */