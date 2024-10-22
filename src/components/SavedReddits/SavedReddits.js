import React from "react";
import styles from "./SavedReddits.module.css";
import { useSelector } from 'react-redux';
import { selectSavedReddits, filterReddits} from "../../features/Reddits/redditsSlice";
import { Outlet, useSearchParams } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Reddit from "../../features/Reddit/Reddit";


export default function SavedReddits () {

    const savedReddits = useSelector(selectSavedReddits);
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");

    const redditsToRender = title ? filterReddits(title,savedReddits) : savedReddits;

    return (
        <>
        <h2 className={styles.savedRedditsH2}>{`Saved reddits (${savedReddits.length})`}</h2>
        <section className={styles.savedReddits}>
            {
            redditsToRender.length > 0 ?
            redditsToRender.map((content) => (
                <Reddit content={content} 
                        key={content.id} />
            ))
            :
            <ErrorMessage message="No saved reddits" />
            }
        </section>
        <Outlet/>
        </>
    )
}