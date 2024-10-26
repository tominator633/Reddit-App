import React, {useState, useRef} from "react";
import styles from "./Subreddits.module.css";
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import {submitBtnVar, mySubredditVar, searchedSubredditVar} from "./subredditsFMVariants";
import Subreddit from "../../components/Subreddit/Subreddit";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Outlet } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import {selectSwiperSubreddits, selectSearchedSubreddits, searchSubreddits, selectIsSearchSubredditsLoading, selectHasSearchSubredditsError} from "./subredditsSlice";

export default function Subreddits () {

    const dispatch = useDispatch();

    const swiperSubreddits = useSelector(selectSwiperSubreddits);
    const searchedSubreddits = useSelector(selectSearchedSubreddits);
    const isSearchSubredditsLoading = useSelector(selectIsSearchSubredditsLoading);
    const hasSearchSubredditsError = useSelector(selectHasSearchSubredditsError);

    const [searchInput, setSearchInput] = useState("");
    const searchInputRef = useRef(null);

    const sanitizeInput = (input) => {
        const tempElement = document.createElement('div');
        tempElement.textContent = input; // Sanitizes input
        return tempElement.innerHTML;
    };

    const handleSearchFieldChange = ({ target }) => {
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\sěščřžůú]*$/;
        if (regex.test(target.value)) {
            setSearchInput(target.value); 
        } else {
            alert("Invalid input. Only alphanumeric characters, specific diacritics and spaces are allowed.");
        }
    };


    const handleSubmitSearchSubredditsBtnClick = () => {
        const sanitizedInput = sanitizeInput(searchInput);
        const encodedInput = encodeURIComponent(sanitizedInput);  // Encode input
        dispatch(searchSubreddits(encodedInput));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchInput) {
            event.preventDefault();
            const sanitizedInput = sanitizeInput(searchInput);
            const encodedInput = encodeURIComponent(sanitizedInput);
            dispatch(searchSubreddits(encodedInput));
        }
    };

    const handleErrorSearchSubmitReloadClick = () => {
        const sanitizedInput = sanitizeInput(searchInput);
        const encodedInput = encodeURIComponent(sanitizedInput);  // Encode the sanitized input
        dispatch(searchSubreddits(encodedInput));  // Dispatch the encoded input
    };
    return (
        <>
        <div className={`${styles.srManagerCon} ${styles.gb}`}>
            <section className={`${styles.mySubredditsCon} ${styles.gb}`}>
                <h2 className={`${styles.mySubredditsH2} ${styles.gb}`}>My Subreddits selection</h2>
                <div className={`${styles.mySubreddits} ${styles.gb}`}>
                <AnimatePresence> 
                    {swiperSubreddits.length > 0 ?
                    swiperSubreddits.map((subreddit) => {
                    return    (
                        <LayoutGroup key={subreddit.id}>
                            <motion.div variants={mySubredditVar}
                                        layout
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.2 }}>
                                <Subreddit content={subreddit} 
                                            key={subreddit.id}
                                            isSwiperSubreddit={true}/>
                            </motion.div>
                        </LayoutGroup>
                        )
                        } 
                    )
                    :
                    <ErrorMessage message="You have no subreddits in your selection." />
                    }
                </AnimatePresence>
                </div>
            </section>
            <section className={`${styles.searchSubredditsCon} ${styles.gb}`}>
                <h2 className={`${styles.searchSubredditsH2} ${styles.gb}`}>Explore subreddits</h2>
                <search className={styles.searchSubredditsSection}
                        onKeyDown={handleKeyDown}>
                    <input className={styles.searchField} 
                            onChange={handleSearchFieldChange}
                            id="searchSubredditsField"
                            value={searchInput}
                            ref={searchInputRef}
                            placeholder="Search subreddits here"
                            maxLength="60"
                            pattern="[A-Za-z0-9\s]+"
                            title="Alphanumeric characters only"/>
                </search>
                <AnimatePresence>
                {searchInput &&
                <motion.button className={`${styles.submitSearchSubredditsBtn} ${styles.gb}`}
                        onClick={handleSubmitSearchSubredditsBtnClick}
                        
                        variants={submitBtnVar}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        
                        >
                    <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>
                </motion.button>
                }
                </AnimatePresence>
                <div className={`${styles.searchedSubreddits} ${styles.gb}`}>
                <AnimatePresence> 
                    {isSearchSubredditsLoading ?
                    <Loading loadingText="Loading subreddits..."/>
                    : hasSearchSubredditsError ?
                    <ErrorMessage message="Request failed."
                                    onClick={handleErrorSearchSubmitReloadClick} />
                    : searchedSubreddits.length === 0 ?
                    <ErrorMessage message="No subreddits found" />
                    :
                    searchedSubreddits.map((subreddit) => {
                    return (
                        <LayoutGroup key={subreddit.id}>
                            <motion.div variants={searchedSubredditVar}
                                        layout
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.2 }}>
                                <Subreddit content={subreddit} 
                                            key={subreddit.id}
                                            isSwiperSubreddit={false}/>
                            </motion.div>
                        </LayoutGroup>
                    )
                    })
                    }
                </AnimatePresence>
                </div>
                
                
            </section>
            
        </div>
        <Outlet/>
        </>
    )
};



/* the Outlet is just below the outermost element, in 
order for the backdrop filter to blur everything in behind */

