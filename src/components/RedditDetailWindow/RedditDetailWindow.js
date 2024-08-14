import React from "react";
import styles from "./RedditDetailWindow.module.css";
import Comment from "../Comment/Comment";
import Reddit from "../../features/Reddit/Reddit";
import { useParams, useNavigate } from "react-router-dom";
import { selectCurrentReddit } from "../../features/Reddit/redditSlice";
import { useSelector } from 'react-redux';


export default function RedditDetailWindow () {

    let {redditId} = useParams();
    const navigate = useNavigate();
    const currentReddit = useSelector(selectCurrentReddit);

    return (
<div id={redditId} className={`${styles.windowBarrier} ${styles.gb}`} role="presentation">
    <section className={`${styles.redditDetailWindow} ${styles.gb}`} role="dialog" aria-label="reddit detail window for...">
        <div className={`${styles.closeBtnCon} ${styles.gb}`} role="presentation">
            <button onClick={() => {navigate(-1)}} className={`${styles.closeBtn} ${styles.gb}`}>Close</button>
        </div>
        <Reddit content={currentReddit} key={currentReddit.id}/>
        <div className={`${styles.commentsSection} ${styles.gb}`}>
            <Comment/>
        </div>
    </section>
</div>
    )
}