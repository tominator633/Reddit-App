import React from "react";
import styles from "./SubredditDetailWindow.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { selectCurrentSubreddit } from "../../features/Subreddits/subredditsSlice";
import { useSelector } from 'react-redux';





export default function SubredditDetailWindow () {
    let {subredditId} = useParams();
    const navigate = useNavigate();
    const currentSubreddit = useSelector(selectCurrentSubreddit);


    const handleCloseButtonClick = () => {
        navigate(-1);
    };

    return (
    <div id={subredditId} 
        className={`${styles.windowBarrier} ${styles.gb}`} 
        role="presentation">
        <section className={`${styles.subredditDetailWindow} ${styles.gb}`} role="dialog" aria-label="reddit detail window">
            <button onClick={handleCloseButtonClick} 
                    className={`${styles.closeBtn} ${styles.gb} ${styles.clearfix}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496"/></svg>
            </button>
            <div className={`${styles.subredditDetail} ${styles.gb}`}  >
                <figure className={`${styles.subredditBanner} ${styles.gb}`}>
                    {currentSubreddit.bannerImg &&
                    <img src={currentSubreddit.bannerImg} 
                        alt={`${currentSubreddit.name} banner image`} />
                    }
        
                </figure>
                <figure className={`${styles.subredditIcon} ${styles.gb}`}>
                    {currentSubreddit.iconImg ?
                    <img src={currentSubreddit.iconImg} 
                            alt="icon image" />
                    : currentSubreddit.headerImg ?
                    <img src={currentSubreddit.headerImg} 
                            alt="header image" />
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0m3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77c.4 0 1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0m.2-3.41c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.04 1.04 1.04s1.04-.47 1.04-1.04c0-.57-.46-1.04-1.04-1.04"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38"/></svg>
                    }
                    
                </figure>
                <h3 className={`${styles.subredditName} ${styles.gb}`}>{currentSubreddit.name}</h3>

                {currentSubreddit.headerTitle && 
                <p className={`${styles.subredditHeaderTitle} ${styles.gb}`}>{currentSubreddit.headerTitle}</p>}

                <p className={`${styles.subredditPublicDescription} ${styles.gb}`}>{currentSubreddit.publicDescription}</p>
                <p className={`${styles.subredditSubscribers} ${styles.gb}`}>{`Subscribers: ${currentSubreddit.subscribers}`}</p>
            </div>
        </section>
    </div>
    )
}