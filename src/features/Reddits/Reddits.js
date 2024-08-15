import React, { useEffect } from "react";
import styles from "./Reddits.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import Reddit from "../Reddit/Reddit";
import { loadReddits, selectResultReddits, selectIsLoading, selectHasError} from "./redditsSlice";
import Loading from "../../components/Loading/Loading";

export default function Reddits () {
    const dispatch = useDispatch();
    const resultReddits = useSelector(selectResultReddits);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectHasError);
    let {subredditName} = useParams();
 

    useEffect(() => {
        dispatch(loadReddits(subredditName));
    }, [subredditName]);
    
    if (isLoading) {
        return (
            <Loading loadingText="Loading reddits..."/>
        )
    } else if (hasError) {
        return (
            <>
            <h2 className={styles.gb}>{subredditName}</h2>
            <section className={`${styles.reddits} ${styles.gb}`}>
               <p>REQUEST FAILED</p>
            </section>
            </>
        )
    } else {
        return (
            <>
            <h2 className={styles.gb}>{subredditName}</h2>
            <section className={`${styles.reddits} ${styles.gb}`}>
                {resultReddits.map((content) => (
                    <Reddit content={content} key={content.id} />
                ))}
            </section>
            <Outlet/>
            </>
        )
    }
}

