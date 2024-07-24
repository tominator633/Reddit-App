import React from "react";
import styles from "./RedditDetailWindow.module.css";
import Comment from "../Comment/Comment";
import Reddit from "../Reddit/Reddit";


export default function RedditDetailWindow () {
    return (
<div className={`${styles.windowBarrier} ${styles.gb}`} role="presentation">
    <section className={`${styles.redditDetailWindow} ${styles.gb}`} role="dialog" aria-label="reddit detail window for...">
        <div className={`${styles.closeBtnCon} ${styles.gb}`}>
            <button className={`${styles.closeBtn} ${styles.gb}`}>Close</button>
        </div>
        <Reddit/>
        <div className={`${styles.commentsSection} ${styles.gb}`}>
            <Comment/>
        </div>
    </section>
</div>
    )
}