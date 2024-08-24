import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Mousewheel, FreeMode } from 'swiper/modules';
import "swiper/css/bundle";
import styles from "./SubredditsSwiper.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import {loadInitialSwiperSubreddit, selectSwiperSubreddits} from "../../features/Subreddits/subredditsSlice";




export default function SubredditsSwiper () {
    const dispatch = useDispatch();
    const swiperSubreddits = useSelector(selectSwiperSubreddits);
    /*   const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectHasError); */

    useEffect(() => {
      swiperSubreddits.forEach((initialSubreddit) => {
        dispatch(loadInitialSwiperSubreddit(initialSubreddit));
      })
      },[dispatch, swiperSubreddits]);

 
    return (
    <Swiper className={`${styles.swiper} ${styles.gb}`}
      modules={[FreeMode, Mousewheel, Navigation, A11y, ]}
      freeMode={true}
      grabCursor={true}
      mousewheel={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }}
      breakpoints={{
        0: {
          slidesPerView: 5,
          spaceBetween: 0
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        1250: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
     
      }}
    >
      <button className="swiper-button-prev" id={styles.btnPrev}></button>

      <SwiperSlide className={`${styles.swiperSlide} ${styles.gb}`}>
            <NavLink to="/popular" className={({isActive}) => isActive ? styles.activeSubreddit : styles.inactiveSubreddit}>
                <figure id={styles.iconPopular} className={styles.gb}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0m3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77c.4 0 1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0m.2-3.41c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.04 1.04 1.04s1.04-.47 1.04-1.04c0-.57-.46-1.04-1.04-1.04"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38"/></svg>
                </figure>
                <h3>popular</h3>
            </NavLink>
      </SwiperSlide>

      {swiperSubreddits.map((subreddit,index) => 
         (
          <SwiperSlide id={subreddit.id} key={index} className={`${styles.swiperSlide} ${styles.gb}`}>
            <NavLink to={`${subreddit.name}`} className={({isActive}) => isActive ? styles.activeSubreddit : styles.inactiveSubreddit}>
                <figure id={styles.icon} className={styles.gb}>
                  {subreddit.iconImg ? 
                  <img src={subreddit.iconImg} alt={subreddit.name}/>
                  : subreddit.headerImg ?
                  <img src={subreddit.headerImg} alt={subreddit.name}/>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0m3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77c.4 0 1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0m.2-3.41c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.04 1.04 1.04s1.04-.47 1.04-1.04c0-.57-.46-1.04-1.04-1.04"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38"/></svg>
                  }
                </figure>
                <h3>{subreddit.name}</h3>
            </NavLink>
          </SwiperSlide>
        )
      )}
      <SwiperSlide className={`${styles.swiperSlide} ${styles.gb}`}>
            <NavLink to="/subreddits" 
                      className={`${styles.editSubredditsBtn} ${styles.gb}`}
                      >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"/></svg>            
            </NavLink>
      </SwiperSlide>
      <button className="swiper-button-next" id={styles.btnNext}></button>
    </Swiper>
    )
}
