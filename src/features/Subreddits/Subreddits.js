import React, {useState} from "react";
import styles from "./Subreddits.module.css";
import Subreddit from "../../components/Subreddit/Subreddit";
import Search from "../../components/Search/Search";
import {useSelector } from 'react-redux';
import {selectSwiperSubreddits} from "./subredditsSlice";

export default function Subreddits () {

    const swiperSubreddits = useSelector(selectSwiperSubreddits);
    const [addSubredditsBtn, setAddSubredditsBtn] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleAddSubredditsBtnClick = () => {
        setAddSubredditsBtn(!addSubredditsBtn);
    }

    const handleSearchFieldChange = ({target}) => {
        setSearchInput(target.value);
    }

    return (
        <div className={`${styles.srManagerCon} ${styles.gb}`}>
            <section className={`${styles.mySubredditsCon} ${styles.gb}`}>
                <h2 className={`${styles.mySubredditsH2} ${styles.gb}`}>My Subreddits</h2>
                <div className={`${styles.mySubreddits} ${styles.gb}`}>
                    {swiperSubreddits.map((subreddit, index) => {
                    return    (
                        <Subreddit content={subreddit} key={index}/>
                        )
                        } 
                    )}
                    <button className={`${styles.addSubredditsBtn} ${styles.gb}`}
                            onClick={handleAddSubredditsBtnClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/></svg>
                        <p>Add subreddits</p>
                    </button>
                </div>
            </section>
            
            {addSubredditsBtn &&
            <section className={`${styles.searchSubredditsCon} ${styles.gb}`}>
                <Search onChange={handleSearchFieldChange} 
                        searchInput={searchInput}
                        placeholder="Search subreddits"/>
                {searchInput &&
                <button className={`${styles.submitSearchSubredditsBtn} ${styles.gb}`}>
                    <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>
                </button>
                }
                
            </section>
            }
            
        </div>
    )
};