import React, { useEffect, useRef } from "react";
import styles from "./Reddit.module.css";
import { Link } from "react-router-dom";
import { setCurrentReddit, loadComments } from "./redditSlice";
import { saveReddit, unsaveReddit, selectSavedReddits} from "../Reddits/redditsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { epochToAgo, formatNumberWithSpaces } from "../../utils/utils";
import dashjs from 'dashjs';  // Import dash.js
import MarkdownIt from 'markdown-it';  // Import markdown-it
import DOMPurify from 'dompurify';  // Import DOMPurify

const md = new MarkdownIt();  // Initialize markdown-it

export default function Reddit ({content}) {
    const dispatch = useDispatch();
    const savedReddits = useSelector(selectSavedReddits);
    const videoRef = useRef(null);  // Create a ref for the video element

    const handleDetailsClick = () => {
        dispatch(setCurrentReddit(content));
        dispatch(loadComments(content.permalink));
    }
    const handleSaveRedditBtnClick = () => {
        dispatch(saveReddit(content));
    }
    const handleUnsaveRedditBtnClick = () => {
        dispatch(unsaveReddit(content));
    }

    useEffect(() => {
        // Initialize Dash.js player if there's a video source (DASH manifest URL)
        if (content.videoDashUrl && videoRef.current) {
            const player = dashjs.MediaPlayer().create();
            player.initialize(videoRef.current, content.videoDashUrl, false);
        }

        // Cleanup Dash.js player when the component unmounts
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (videoRef.current) {
                const player = dashjs.MediaPlayer().create();
                player.reset();
            }
        };
    }, [content.videoDashUrl]);

        // Sanitize and convert selftext markdown to HTML
        const renderSelfText = () => {
            if (content.text) {
                const sanitizedHtml = DOMPurify.sanitize(md.render(content.text));
                return { __html: sanitizedHtml };  // Return HTML object
            }
            return null;
        };

    return (
        <article className={styles.reddit} 
            id={content.id}
            aria-label={`A reddit by ${content.user}`} >
            <div className={styles.votesColumn} 
                role="presentation">
                <figure className={styles.arrowUp}
                        aria-hidden="true" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 3L4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v7a2 2 0 0 0 2 2h4l.15-.005A2 2 0 0 0 16 20l-.001-7h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0"></path></svg>
                </figure>
                <p className={styles.votes} 
                    aria-label={`The score of this reddit is ${content.score}`}>{formatNumberWithSpaces(content.score)}</p>
            </div>

            <div className={styles.redditColumn} 
                    role="presentation">
                <div className={styles.redditInfo} 
                    role="presentation">
                    <a className={styles.redditUser}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={`https://www.reddit.com/user/${content.user}/`}
                        aria-label={`The link to user profile of ${content.user}`}>{content.user}</a>
                    <time className={styles.redditTimePosted}>{epochToAgo(content.created)}</time>
                </div>

                <div className={styles.redditContent}
                        role="presentation">
                    <h4 className={styles.redditTitle}>{content.title}</h4>

                    {/* content has selftext */}
                    {content.text && (
                        <p  className={styles.selftextContent}
                            dangerouslySetInnerHTML={renderSelfText()}  // Use the renderSelfText method
                            aria-label={renderSelfText()}
                        />
                    )}

                    {/* content is external URL */}
                    {(!content.isSelfpost && !content.isVideo && !content.imgSrc) ? 
                    <a className={styles.externalContent} 
                        href={content.url} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        aria-label={`External link included in this reddit of title: ${content.title}`}>
                        
                        {/* image thumbnail is present? */}
                        {content.thumbnail &&
                        <figure aria-hidden="true">
                            <img src={content.thumbnail} 
                                alt={content.title}/>
                        </figure>}
                        <p>{content.url}</p>
                    </a> : null}

                    {/* content is img */}
                    {content.imgSrc && 
                        <a className={`${styles.imgContent} ${styles.gb}`}
                            href={content.imgSrc}
                            target="_blank"
                            rel="noreferrer noopener" 
                            aria-label="External link of this reddit">
                            <img src={content.imgSrc}
                                alt={`The image content of ${content.title}`}/>
                        </a>
                    }

                    {/* content is video */}
                    {content.videoSrc && 
                        <>
                        {/* Video element where Dash.js will handle the playback */}
                        <video
                            ref={videoRef}  // Attach the video element to the ref
                            className={styles.videoContent} 
                            controls 
                            preload="metadata" 
                            aria-label="Video content"
                        />
                        </>
                    }
                </div>
            </div>

            <div className={styles.rightColumn} 
                    role="presentation">
                <Link to={`${content.id}`}  
                      onClick={handleDetailsClick}  
                      className={`${styles.commentsButton} ${styles.redditRightColumnBtn}`}
                      aria-label="go to reddit detail window with comments section">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3c-1.3 1.5-3.9 2.4-6.4 2.4h-.5c-.1.3-.1.5-.1.8c0 2 2.2 3.6 5 3.6h.6c.4.5 1.7 1.4 3.4 1.4c0 0-.8-.4-.8-1.8c0-.6 2-1.8 2-3.1"></path>
                        <path fill="currentColor" d="M13 4.6C13 2.1 10.2 0 6.6 0S0 2.1 0 4.6c0 1.7 2 3.2 3 4C3 10.4 1.6 11 1.6 11c2.3 0 3.6-1.1 4.2-1.8h.8c3.5.1 6.4-2 6.4-4.6"></path>
                    </svg>
                </Link>
                <a className={`${styles.redditLink} ${styles.redditRightColumnBtn}`}
                   href={content.url}
                   target="_blank"
                   rel="noreferrer noopener"
                   aria-label="view this reddit on the official Reddit platform (link)" >
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>
                    </svg>
                </a>
                {savedReddits.some(reddit => reddit.id === content.id) ?
                <button className={`${styles.unsaveRedditBtn} ${styles.redditRightColumnBtn}`}
                        onClick={handleUnsaveRedditBtnClick}
                        aria-label="unsave this reddit">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M418.9 0H93.1C80.2 0 69.8 10.4 69.8 23.3V512L256 325.8L442.2 512V23.3c0-12.9-10.4-23.3-23.3-23.3m-46.5 186.2H139.6v-46.5h232.7v46.5z"/></svg>
                </button>
                :
                <button className={`${styles.saveRedditBtn} ${styles.redditRightColumnBtn}`}
                        onClick={handleSaveRedditBtnClick}
                        aria-label="save this reddit">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M432.9 0H107.1C94.3 0 83.8 10.4 83.8 23.3V512L270 325.8L456.2 512V23.3c0-12.9-10.4-23.3-23.3-23.3m-46.5 186.2h-93.1v93.1h-46.5v-93.1h-93.1v-46.5h93.1V46.5h46.5v93.1h93.1z"/></svg>                
                </button>
                }
                
            </div>
        </article>
    );
}
