import React, { useEffect } from "react";
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
        <div className={`${styles.closeBtnCon} ${styles.gb}`} role="presentation">
            <button onClick={handleCloseButtonClick} className={`${styles.closeBtn} ${styles.gb}`}>Close</button>
        </div>
        <div className={styles.redditDetail} >
                <div className={`${styles.votesColumn} ${styles.gb}`} role="presentation">
                    <button className={`${styles.arrowUp} ${styles.gb}`} aria-label="upvote this reddit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 3L4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v7a2 2 0 0 0 2 2h4l.15-.005A2 2 0 0 0 16 20l-.001-7h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0"></path></svg>
                    </button>
                    <p className={`${styles.votes} ${styles.gb}`} aria-label={`The score of this reddit is ${currentReddit.score}`}>{currentReddit.score}</p>
                    <button className={`${styles.arrowDown} ${styles.gb}`}  aria-label="downvote this reddit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 2l-.15.005A2 2 0 0 0 8 4v6.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V4a2 2 0 0 0-2-2z"></path></svg>
                    </button>
                </div>
                <div className={`${styles.redditColumn} ${styles.gb}`} role="presentation">
                    <div className={`${styles.redditInfo} ${styles.gb}`} role="presentation">
                        <p className={`${styles.redditUser} ${styles.gb}`}>{currentReddit.user}</p>
                        <p className={`${styles.redditTimePosted} ${styles.gb}`}>{epochToAgo(currentReddit.created)}</p>
                    </div>
                    <div className={`${styles.redditContent} ${styles.gb}`}>
                        <h4>{currentReddit.title}</h4>
                    </div>
                </div>
            </div>
        <div className={`${styles.commentsSection} ${styles.gb}`}>
            {isCommentsLoading ? 
            <Loading loadingText="Loading comments..."/> 
            :
            hasCommentsError ?
            <ErrorMessage/>
            :
            comments.length === 0 ?
            <p>This post has no comments</p>
            :
            comments.map((content, index) => {
                    return <Comment content={content} key={index}/>
                
            }) }

            
        </div>
    </section>
</div>
    )
}