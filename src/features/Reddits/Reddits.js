import React, { useEffect } from "react";
import styles from "./Reddits.module.css";
import { useDispatch, useSelector } from 'react-redux';
import Reddit from "../../components/Reddit/Reddit";
import { loadReddits, selectResultReddits, selectIsLoading, selectHasError} from "./RedditsSlice";

export default function Reddits () {
    const dispatch = useDispatch();
    const resultReddits = useSelector(selectResultReddits);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectHasError);

    useEffect(() => {
        dispatch(loadReddits());
    }, [dispatch]);
    
    return (
        <>
        <h2 className={styles.gb}>Reddits</h2>
        <section className={`${styles.reddits} ${styles.gb}`}>
            {resultReddits.map((content) => (
                <Reddit content={content} key={content.id} />
            ))}
        </section>
        </>
    )
}

