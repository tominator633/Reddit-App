import React, { useState } from "react";
import styles from "./Comment.module.css";
import ReplyComment from "../ReplyComment/ReplyComment";
import { epochToAgo, formatNumberWithSpaces} from "../../utils/utils";
import { motion, AnimatePresence } from 'framer-motion';
import {replyCommentVar} from "./commentFMVariants";
import MarkdownIt from 'markdown-it';  // Import markdown-it
import DOMPurify from 'dompurify';  // Import DOMPurify

const md = new MarkdownIt();  // Initialize markdown-it



export default function Comment ({content}) {

    const [repliesButton, setRepliesButton] = useState(false);
    const handleRepliesButtonClick = () => {
        setRepliesButton(!repliesButton);
    }


    // Sanitize and convert selftext markdown to HTML
    const renderSelfText = () => {
            if (content.body) {
                const sanitizedHtml = DOMPurify.sanitize(md.render(content.body));
                return { __html: sanitizedHtml };  // Return HTML object
            }
            return null;
        };



    return (
        <article className={styles.comment}
                aria-label={`Comment by ${content.author}`}
                style={repliesButton ? {backgroundColor: "#FEE"} : {backgroundColor: "white"}}>
            <header className={styles.commentInfo}>
                <a className={styles.commentUser}
                    target="_blank"
                    rel="noreferrer noopener" 
                    href={`https://www.reddit.com/user/${content.author}/`}
                    aria-label={`Visit profile of ${content.author}`} >{content.author}</a>
                <time className={styles.commentTimePosted}
                    aria-label={`Posted ${epochToAgo(content.created)}`}>{epochToAgo(content.created)}</time>
            </header>
            <section className={styles.commentContent}
                    aria-live="polite" 
                    aria-atomic="true">
                <p  className={styles.commentText}
                    dangerouslySetInnerHTML={renderSelfText()}  // Use the renderSelfText method
                    />
            </section>
            <footer className={styles.infoLine}>
                <figure className={styles.arrowUp}
                        role="presentation">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 3L4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v7a2 2 0 0 0 2 2h4l.15-.005A2 2 0 0 0 16 20l-.001-7h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0"></path></svg>
                </figure>
                <p className={styles.score}
                    aria-label={`the score of this comment is: ${content.score}`}>{formatNumberWithSpaces(content.score)}</p>
            
                {content.replies.length>0 && <button onClick={handleRepliesButtonClick} 
                                                    className={styles.repliesButton}
                                                    style={repliesButton ? {backgroundColor: "#FF6B6B", color: "white"}:{backgroundColor: "#005792", color: "white"}}
                                                    aria-expanded={repliesButton} 
                                                    aria-controls="replies-section"
                                                    aria-label={repliesButton ? "Collapse replies" : "Expand replies"}>
                                                        <span>Replies </span>
                                                        <span>{`(${content.replies.length}) `}</span>
                                                        {repliesButton && 
                                                        <span className={styles.closeCross}><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496"/></svg></span>}
                                                
                                            </button>}
            </footer>
            <AnimatePresence>
                {repliesButton && (
                    <section id="replies-section" 
                            aria-label="Replies">
                        {content.replies.map((reply, index) => (
                            <motion.div
                                key={index}
                                variants={replyCommentVar}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                aria-live="polite"
                                aria-atomic="true">
                                <ReplyComment replyContent={reply}
                                                key={index} />
                            </motion.div>
                        ))}
                    </section>
                )}
            </AnimatePresence>
        </article>
    )
}