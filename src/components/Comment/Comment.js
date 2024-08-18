import React, { useState } from "react";
import styles from "./Comment.module.css";
import ReplyComment from "../ReplyComment/ReplyComment";
import { epochToAgo } from "../../utils/utils";


export default function Comment ({content}) {

    const [repliesButton, setRepliesButton] = useState(false);
    const handleRepliesButtonClick = () => {
        setRepliesButton(!repliesButton);
    }

    return (
        <div className={`${styles.comment} ${styles.gb}`}
                style={repliesButton ? {backgroundColor: "#FEE"} : {backgroundColor: "white"}}>
            <div className={`${styles.commentInfo} ${styles.gb}`}>
                <p className={`${styles.commentUser} ${styles.gb}`}>{content.author}</p>
                <p className={`${styles.commentTimePosted} ${styles.gb}`}>{epochToAgo(content.created)}</p>
            </div>
            <div className={`${styles.commentContent} ${styles.gb}`}>
                <p className={styles.gb}>{content.body}</p>
            </div>
            <div className={`${styles.infoLine} ${styles.gb}`}>
                <figure className={`${styles.arrowUp} ${styles.gb}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 3L4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v7a2 2 0 0 0 2 2h4l.15-.005A2 2 0 0 0 16 20l-.001-7h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0"></path></svg>
                </figure>
                <p className={`${styles.score} ${styles.gb}`}>{content.score}</p>
            
                {content.replies.length>0 && <button onClick={handleRepliesButtonClick} 
                                                    className={`${styles.repliesButton} ${styles.gb}`}
                                                    style={repliesButton ? {backgroundColor: "#FF6B6B", color: "white"}:{backgroundColor: "#005792", color: "white"}}>
                                                        <span>Replies </span>
                                                        <span>{`(${content.replies.length}) `}</span>
                                                        {repliesButton && <span className={`${styles.closeCross} ${styles.gb}`}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496"/></svg></span>}
                                                
                                            </button>}
            </div>
            {repliesButton &&
            content.replies.map((reply, index) => {
                    return <ReplyComment replyContent={reply} key={index}/>
            }) 
            }
        </div>
    )
}