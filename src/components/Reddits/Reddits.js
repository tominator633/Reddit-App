import React from "react";
import styles from "./Reddits.module.css";
import Reddit from "../Reddit/Reddit";

export default function Reddits () {
    return (
        <>
        <h2 className={styles.gb}>Subreddits</h2>
        <section className={`${styles.reddits} ${styles.gb}`}>
        <Reddit/>
        <Reddit/>
        <Reddit/>
        </section>
        </>
    )
}

