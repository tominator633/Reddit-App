import React from "react";
import styles from "./Search.module.css";

export default function Search ({onChange, searchInput, placeholder}) {

    return (
    <form>
        <input id={styles.searchField} 
                type="search"
                name="search" 
                aria-label="search reddits based on keywords" 
                placeholder={placeholder}
                onChange={onChange}
                value={searchInput}/>
    </form>
    )
}