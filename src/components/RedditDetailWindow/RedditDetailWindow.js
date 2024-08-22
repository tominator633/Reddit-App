import React from "react";
import styles from "./RedditDetailWindow.module.css";
import Comment from "../Comment/Comment";
import { useParams, useNavigate } from "react-router-dom";
import { selectCurrentReddit, selectComments, emptyComments, selectIsCommentsLoading, selectHasCommentsError } from "../../features/Reddit/redditSlice";
import { useSelector, useDispatch } from 'react-redux';
import Loading from "../Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { epochToAgo } from "../../utils/utils";



export default function RedditDetailWindow () {

    let {redditId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentReddit = useSelector(selectCurrentReddit);
    const comments = useSelector(selectComments);
    const isCommentsLoading = useSelector(selectIsCommentsLoading);
    const hasCommentsError = useSelector(selectHasCommentsError);


    const handleCloseButtonClick = () => {
        dispatch(emptyComments());
        navigate(-1);
    };

    return (
<div id={redditId} className={`${styles.windowBarrier} ${styles.gb}`} role="presentation">
    <section className={`${styles.redditDetailWindow} ${styles.gb}`} role="dialog" aria-label="reddit detail window">
        <button onClick={handleCloseButtonClick} className={`${styles.closeBtn} ${styles.gb} ${styles.clearfix}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496"/></svg>
        </button>
        <div className={styles.redditDetail} >
            <div className={`${styles.redditInfoLine} ${styles.gb}`} role="presentation">
                <div className={`${styles.scoreDiv} ${styles.gb}`}>
                    <figure className={`${styles.arrowUp} ${styles.gb}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 3L4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v7a2 2 0 0 0 2 2h4l.15-.005A2 2 0 0 0 16 20l-.001-7h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0"></path></svg>
                    </figure>
                    <p className={`${styles.votes} ${styles.gb}`} aria-label={`The score of this reddit is ${currentReddit.score}`}>{currentReddit.score}</p>
                </div>
                <p className={`${styles.redditUser} ${styles.gb}`}>{currentReddit.user}</p>
                <p className={`${styles.redditTimePosted} ${styles.gb}`}>{epochToAgo(currentReddit.created)}</p>

            </div>
            <div className={`${styles.redditTitle} ${styles.gb}`} role="presentation">
                <h4>{currentReddit.title}</h4>
            </div>
        </div>
        <h2 className={`${styles.commentsH2} ${styles.gb}`}>{`Comments (${comments.length})`}</h2>
        <div className={`${styles.commentsSection} ${styles.gb}`}>
            {isCommentsLoading ? 
            <Loading loadingText="Loading comments..."/> 
            :
            hasCommentsError ?
            <ErrorMessage/>
            :
            comments.length === 0 ?
            <p className={`${styles.noComments} ${styles.gb}`}>This post has no comments</p>
            :
            comments.map((content, index) => {
                    return <Comment content={content} key={index}/>
                
            }) }

            
        </div>
    </section>
</div>
    )
}