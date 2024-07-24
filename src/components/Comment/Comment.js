import React from "react";
import styles from "./Comment.module.css";

export default function Comment () {
    return (
        <div className={`${styles.comment} ${styles.gb}`}>
            <div className={`${styles.commentInfo} ${styles.gb}`}>
                <p className={`${styles.commentUser} ${styles.gb}`}>royalDestroyer</p>
                <p className={`${styles.commentTimePosted} ${styles.gb}`}>2 hours ago</p>
            </div>
            <div className={`${styles.commentContent} ${styles.gb}`}>
                <p className={styles.gb}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsa harum, ab odit id unde officia ex et reprehenderit earum doloribus molestias sit doloremque! Labore recusandae corrupti impedit aliquam harum!
                </p>
            </div>
        </div>
    )
}