import React, { useEffect } from "react";
import styles from "./Reddits.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Outlet, useSearchParams } from 'react-router-dom';
import Reddit from "../Reddit/Reddit";
import { loadReddits, selectResultReddits, selectIsLoading, selectHasError, filterReddits} from "./redditsSlice";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Reddits () {
    const dispatch = useDispatch();
    const resultReddits = useSelector(selectResultReddits);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectHasError);
    let {subredditName} = useParams();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");

    const redditsToRender = title ? filterReddits(title,resultReddits) : resultReddits;
 

    useEffect(() => {
        dispatch(loadReddits(subredditName));
    }, [dispatch, subredditName]);
    
    if (isLoading) {
        return (
            <Loading loadingText="Loading reddits..."/>
        )
    } else if (hasError) {
        return (
            <>
            <h2 className={`${styles.redditsH2} ${styles.gb}`}>{subredditName}</h2>
            <ErrorMessage/>
            </>
        )
    } else {
        return (
            <>
            <h2 className={`${styles.redditsH2} ${styles.gb}`}>{subredditName}</h2>
            <section className={`${styles.reddits} ${styles.gb}`}>
                {redditsToRender.map((content) => (
                    <Reddit content={content} key={content.id} />
                ))}
            </section>
            <Outlet/>
            </>
        )
    }
}

