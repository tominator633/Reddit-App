import React from "react";
import styles from "./Subreddits.module.css";
import Subreddit from "../../components/Subreddit/Subreddit";
import {useSelector } from 'react-redux';
import {selectSwiperSubreddits} from "./subredditsSlice";

export default function Subreddits () {
    const swiperSubreddits = useSelector(selectSwiperSubreddits);

    return (
        <div className={`${styles.srManagerCon} ${styles.gb}`}>
            <section className={`${styles.mySubredditsCon} ${styles.gb}`}>
                <h2 className={`${styles.mySubredditsH2} ${styles.gb}`}>My Subreddits</h2>
                <div className={`${styles.mySubreddits} ${styles.gb}`}>
                    {swiperSubreddits.map((subreddit, index) => {
                    return    (
                        <Subreddit content={subreddit}/>
                        )
                } 
                    )}
                </div>
            </section>
        </div>
    )
};