import React from "react";
import styles from "./ReplyComment.module.css";

export default function ReplyComment ({replyContent}) {
    return (
        <div className={`${styles.comment} ${styles.gb}`}>
            <div className={`${styles.commentInfo} ${styles.gb}`}>
                <p className={`${styles.commentUser} ${styles.gb}`}>{replyContent.rAuthor}</p>
                <p className={`${styles.commentTimePosted} ${styles.gb}`}>{replyContent.rCreated}</p>
            </div>
            <div className={`${styles.commentContent} ${styles.gb}`}>
                <p className={styles.gb}>{replyContent.rBody}</p>
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