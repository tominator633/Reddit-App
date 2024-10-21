import React from "react";
import styles from "./SavedReddits.module.css";
import { useSelector } from 'react-redux';
import { selectSavedReddits} from "../../features/Reddits/redditsSlice";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Reddit from "../../features/Reddit/Reddit";


export default function SavedReddits () {

    const savedReddits = useSelector(selectSavedReddits);
    return (
        <>
        <h2 className={styles.savedRedditsH2}>{`Saved reddits (${savedReddits.length})`}</h2>
        <section className={styles.savedReddits}>
            {
            savedReddits.length > 0 ?
            savedReddits.map((content) => (
                <Reddit content={content} 
                        key={content.id} />
            ))
            :
            <ErrorMessage message="No saved reddits" />
            }
        </section>
        </>
    )
}