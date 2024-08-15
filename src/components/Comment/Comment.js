import React from "react";
import styles from "./Comment.module.css";

export default function Comment ({content}) {
    return (
        <div className={`${styles.comment} ${styles.gb}`}>
            <div className={`${styles.commentInfo} ${styles.gb}`}>
                <p className={`${styles.commentUser} ${styles.gb}`}>{content.author}</p>
                <p className={`${styles.commentTimePosted} ${styles.gb}`}>{content.created}</p>
            </div>
            <div className={`${styles.commentContent} ${styles.gb}`}>
                <p className={styles.gb}>{content.body}</p>
            </div>
        </div>
    )
}