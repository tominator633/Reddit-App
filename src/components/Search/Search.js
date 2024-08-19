import React, {useState} from "react";
import styles from "./Search.module.css";
import { useNavigate, createSearchParams, useParams } from 'react-router-dom';



export default function Search ({searchBtn, setSearchBtn}) {

    const navigate = useNavigate();
    let {subredditName} = useParams();
    const [searchInput, setSearchInput] = useState("");

    const handleSearchFieldChange = ({target}) => {
        setSearchInput(target.value);
        const query = {
            title: target.value
        };
        const queryString = createSearchParams(query);
        navigate({
            pathname: `/${subredditName}`,
            search: `?${queryString}`
        });
        !target.value && navigate(subredditName);
    }
    const handleCloseSearchBtnClick = () => {
        setSearchBtn(!searchBtn);
    }


    return (
    <form>
        <p className={`${styles.searchIntro} ${styles.gb}`}>Search for reddits</p>
        <div className={`${styles.searchCon} ${styles.gb}`} role="presentation">
            <input id={styles.searchField} 
                    type="search"
                    name="search" 
                    aria-label="search for a keyword" 
                    placeholder="search"
                    onChange={handleSearchFieldChange}
                    value={searchInput}/>
{/*             <button className={`${styles.searchSubmit} ${styles.gb}`}>
                <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>
            </button> */}
        </div>
        <div className={`${styles.closeSearchBtnCon} ${styles.gb}`}>
            <button  onClick={handleCloseSearchBtnClick} className={`${styles.closeSearchBtn} ${styles.gb}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496"/></svg>
            </button>
        </div>
        
    </form>
    )
}