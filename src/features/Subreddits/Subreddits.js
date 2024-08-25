import React, {useState} from "react";
import styles from "./Subreddits.module.css";
import Subreddit from "../../components/Subreddit/Subreddit";
import Search from "../../components/Search/Search";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useParams, Outlet, useSearchParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import {selectSwiperSubreddits, selectSearchedSubreddits, searchSubreddits, selectIsSearchSubredditsLoading, selectHasSearchSubredditsError} from "./subredditsSlice";

export default function Subreddits () {

    const dispatch = useDispatch();

    const swiperSubreddits = useSelector(selectSwiperSubreddits);
    const searchedSubreddits = useSelector(selectSearchedSubreddits);
    const isSearchSubredditsLoading = useSelector(selectIsSearchSubredditsLoading);
    const hasSearchSubredditsError = useSelector(selectHasSearchSubredditsError);

    const [searchInput, setSearchInput] = useState("");


    const handleSearchFieldChange = ({target}) => {
        setSearchInput(target.value);
    }

    const handleSubmitSearchSubredditsBtnClick = () => {
        dispatch(searchSubreddits(searchInput));
    }

    return (
        <div className={`${styles.srManagerCon} ${styles.gb}`}>
            <section className={`${styles.mySubredditsCon} ${styles.gb}`}>
                <h2 className={`${styles.mySubredditsH2} ${styles.gb}`}>My Subreddits selection</h2>
                <div className={`${styles.mySubreddits} ${styles.gb}`}>
                    {swiperSubreddits.length > 0 ?
                    swiperSubreddits.map((subreddit, index) => {
                    return    (
                        <Subreddit content={subreddit} 
                                    key={index}
                                    swiperSubreddit={true}/>
                        )
                        } 
                    )
                    :
                    <ErrorMessage message="You have no subreddits in your selection." />
                    }
                </div>
            </section>
            <section className={`${styles.searchSubredditsCon} ${styles.gb}`}>
                <h2 className={`${styles.searchSubredditsH2} ${styles.gb}`}>Explore subreddits</h2>
                <Search onChange={handleSearchFieldChange} 
                        searchInput={searchInput}
                        placeholder="Search subreddits here"/>
                {searchInput &&
                <button className={`${styles.submitSearchSubredditsBtn} ${styles.gb}`}
                        onClick={handleSubmitSearchSubredditsBtnClick}>
                    <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>
                </button>
                }
                <div className={`${styles.searchedSubreddits} ${styles.gb}`}>
                    {isSearchSubredditsLoading ?
                    <Loading loadingText="Loading subreddits..."/>
                    : hasSearchSubredditsError ?
                    <ErrorMessage message="Request failed." />
                    :
                    searchedSubreddits.map((subreddit, index) => {
                    return (
                        <Subreddit content={subreddit} 
                                    key={index}
                                    swiperSubreddit={false}/>
                    )
                    })
                    }
                </div>
                
                
            </section>
            <Outlet/>
        </div>
    )
};