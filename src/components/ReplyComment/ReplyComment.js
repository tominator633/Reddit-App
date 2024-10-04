import React from "react";
import styles from "./ReplyComment.module.css";
import { epochToAgo } from "../../utils/utils";
import MarkdownIt from 'markdown-it';  // Import markdown-it
import DOMPurify from 'dompurify';  // Import DOMPurify

const md = new MarkdownIt();  // Initialize markdown-it

export default function ReplyComment ({replyContent}) {


    // Sanitize and convert selftext markdown to HTML
    const renderSelfText = () => {
        if (replyContent.rBody) {
                const sanitizedHtml = DOMPurify.sanitize(md.render(replyContent.rBody));
                return { __html: sanitizedHtml };  // Return HTML object
            }
            return null;
        };
    return (
        <div className={`${styles.comment} ${styles.gb}`}>
            <div className={`${styles.commentInfo} ${styles.gb}`}>
                <a className={`${styles.commentUser} ${styles.gb}`}
                    target="_blank"
                    rel="noreferrer noopener" 
                    href={`https://www.reddit.com/user/${replyContent.rAuthor}/`}>{replyContent.rAuthor}</a>
                <p className={`${styles.commentTimePosted} ${styles.gb}`}>{epochToAgo(replyContent.rCreated)}</p>
            </div>
            <div className={`${styles.commentContent} ${styles.gb}`}>
                <p  className={`${styles.replyCommentText} ${styles.gb}`}
                    dangerouslySetInnerHTML={renderSelfText()}  // Use the renderSelfText method
                    />
            </div>
            <div className={`${styles.infoLine} ${styles.gb}`}>
                <figure className={`${styles.arrowUp} ${styles.gb}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 3L4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v7a2 2 0 0 0 2 2h4l.15-.005A2 2 0 0 0 16 20l-.001-7h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0"></path></svg>
                </figure>
                <p className={`${styles.score} ${styles.gb}`}>{replyContent.rScore}</p>
            </div>
        </div>
    )
}