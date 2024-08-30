import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Mousewheel, FreeMode } from 'swiper/modules';
import "swiper/css/bundle";
import styles from "./SubredditsSwiper.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams} from 'react-router-dom';
import { selectSwiperSubreddits} from "../../features/Subreddits/subredditsSlice";
import { loadReddits} from "../../features/Reddits/redditsSlice";




export default function SubredditsSwiper ({setSearchBtn, setSearchInput}) {
    const dispatch = useDispatch();

    let {subredditName} = useParams();
    const swiperSubreddits = useSelector(selectSwiperSubreddits);
/* 
    useEffect(() => {
      swiperSubreddits.forEach((initialSubreddit) => {
        dispatch(loadInitialSwiperSubreddit(initialSubreddit));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      })
      },[]); //this dependency array must be empty, otherwise it retains data everytime a new subreddit is added */


      const handleSwiperSubredditClick = () => {
        setSearchBtn(false);
        setSearchInput("");
      }

      const handleSwiperReloadBtnClick = () => {
        dispatch(loadReddits(subredditName));
      }

 
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
          spaceBetween: 3
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 3
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 3,
        },
        1250: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
     
      }}
    >
      <button className="swiper-button-prev" id={styles.btnPrev}></button>

      <SwiperSlide className={`${styles.swiperSlide} ${styles.gb}`}>
            <NavLink to="/popular" className={({isActive}) => isActive ? styles.activeSubreddit : styles.inactiveSubreddit}
                                    onClick={handleSwiperSubredditClick}>
                <figure id={styles.iconPopular} className={styles.gb}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0m3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77c.4 0 1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0m.2-3.41c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.04 1.04 1.04s1.04-.47 1.04-1.04c0-.57-.46-1.04-1.04-1.04"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38"/></svg>
                </figure>
                <h3>popular</h3>
            </NavLink>
      </SwiperSlide>

      {
      swiperSubreddits.map((subreddit,index) => 
         (
          <SwiperSlide id={subreddit.id} key={index} className={`${styles.swiperSlide} ${styles.gb}`}>
            <NavLink to={`${subreddit.name}`} 
                      className={({isActive}) => isActive ? styles.activeSubreddit : styles.inactiveSubreddit}
                      onClick={handleSwiperSubredditClick}>
                {isLoadInitialSwiperSubredditLoading ?
                <figure className={`${styles.iconLoading} ${styles.gb}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256s-114.6 256-256 256H37.1c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256m349.6-102.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4v.2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1v-.2c0-25.4 18.9-46.5 43.4-49.9c4.4 18.8 21.3 32.8 41.5 32.8zm-172.5 93.3c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5S160.3 247 177 247zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6s11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9.8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1.3 5.1 3.6 3.9 6.5"/></svg>
                </figure>
                :
                <figure id={styles.icon} className={styles.gb}>
                  {subreddit.iconImg ? 
                  <img src={subreddit.iconImg} alt={subreddit.name}/>
                  : subreddit.headerImg ?
                  <img src={subreddit.headerImg} alt={subreddit.name}/>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0m3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77c.4 0 1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0m.2-3.41c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.04 1.04 1.04s1.04-.47 1.04-1.04c0-.57-.46-1.04-1.04-1.04"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38"/></svg>
                  }
                </figure>
                }
                <h3>{subreddit.name}</h3>
            </NavLink>
          </SwiperSlide>
        )
      )}
      <button className="swiper-button-next" id={styles.btnNext}></button>
    </Swiper>
    )
}
