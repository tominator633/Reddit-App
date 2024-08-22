import React from "react";
import styles from "./Reddit.module.css";
import { Link } from "react-router-dom";
import { setCurrentReddit, loadComments, selectCurrentReddit } from "./redditSlice";
import { useDispatch, useSelector} from 'react-redux';
import { epochToAgo } from "../../utils/utils";

export default function Reddit ({content}) {
    const dispatch = useDispatch();
    const currentReddit = useSelector(selectCurrentReddit);
    const handleDetailsClick = () => {
        dispatch(setCurrentReddit(content));
        dispatch(loadComments(content.permalink));
    } 


    return (
        <div className={styles.reddit} id={content.id} >
                <div className={`${styles.votesColumn} ${styles.gb}`} role="presentation">
                    <figure className={`${styles.arrowUp} ${styles.gb}`} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 3L4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v7a2 2 0 0 0 2 2h4l.15-.005A2 2 0 0 0 16 20l-.001-7h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0"></path></svg>
                    </figure>
                    <p className={`${styles.votes} ${styles.gb}`} aria-label={`The score of this reddit is ${content.score}`}>{content.score}</p>
                </div>
                <div className={`${styles.redditColumn} ${styles.gb}`} role="presentation">
                    <div className={`${styles.redditInfo} ${styles.gb}`} role="presentation">
                        <p className={`${styles.redditUser} ${styles.gb}`}>{content.user}</p>
                        <p className={`${styles.redditTimePosted} ${styles.gb}`}>{epochToAgo(content.created)}</p>
                    </div>
                    <div className={`${styles.redditContent} ${styles.gb}`}>
                        <h4 className={`${styles.redditTitle} ${styles.gb}`}>{content.title}</h4>
                        
                        {/* content has selftext */}
                        {content.text && <p className={`${styles.selftextContent} ${styles.gb}`}>{content.text}</p>}

                        {/* content is external URL */}
                        {(!content.isSelfpost && !content.isVideo && !content.imgSrc) ? 
                        <a className={`${styles.externalContent} ${styles.gb}`} href={content.url} target="_blank" rel="noreferrer noopener" >
                            {/* image thumbnail is present?*/}
                            {content.thumbnail &&
                            <figure>
                                <img src={content.thumbnail} alt={content.title}/>
                            </figure>}
                            <p className={styles.gb}>{content.url}</p>
                        </a> : null}

                        {/* content is img */}
                        {content.imgSrc && 
                            <figure className={`${styles.imgContent} ${styles.gb}`}>
                                <img src={content.imgSrc} alt={content.title}/>
                            </figure>
                            }

                        {/* content is video */}
                        {content.videoSrc && 
                            <>
                            <video className={`${styles.videoContent} ${styles.gb}`} controls>
                            <source src={content.videoSrc} type="video/mp4"/>
                            </video>
                            </>
                            
                        
                        }

                    </div>
                </div>
                <div className={`${styles.rightColumn} ${styles.gb}`}role="presentation">
                    <Link to={`${content.id}`}  onClick={handleDetailsClick}  className={`${styles.commentsButton} ${styles.gb}`} aria-label="comments section">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3c-1.3 1.5-3.9 2.4-6.4 2.4h-.5c-.1.3-.1.5-.1.8c0 2 2.2 3.6 5 3.6h.6c.4.5 1.7 1.4 3.4 1.4c0 0-.8-.4-.8-1.8c0-.6 2-1.8 2-3.1"></path><path fill="currentColor" d="M13 4.6C13 2.1 10.2 0 6.6 0S0 2.1 0 4.6c0 1.7 2 3.2 3 4C3 10.4 1.6 11 1.6 11c2.3 0 3.6-1.1 4.2-1.8h.8c3.5.1 6.4-2 6.4-4.6"></path></svg>
                    </Link>
                </div>
            </div>
    )
}

