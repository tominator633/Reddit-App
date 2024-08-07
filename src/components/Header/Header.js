import React from "react";
import styles from "./Header.module.css";
import Subreddits from "../../features/Subreddits/Subreddits";



export default function Header () {
    return (
        <header className={styles.gb}>
        <div id={styles.headline} className={styles.gb} role="presentation">
            <figure id={styles.logo} className={styles.gb}>
                <svg role="img" aria-labelledby="logotitle" xmlns="http://www.w3.org/2000/svg" width="1.06em" height="1em" viewBox="0 0 1792 1696">
                    <title id="logotitle">Reddit logo pink</title>
                    <path fill="currentColor" d="M1792 846q0 58-29.5 105.5T1683 1024q12 46 12 96q0 155-106.5 287T1298 1615.5T898 1692t-399.5-76.5t-290-208.5T102 1120q0-47 11-94q-51-25-82-73.5T0 846q0-82 58-140.5T199 647q85 0 145 63q218-152 515-162L975 27q3-13 15-21t26-5l369 81q18-37 54-59.5T1518 0q62 0 106 43.5t44 105.5t-44 106t-106 44t-105.5-43.5T1369 150l-334-74l-104 472q300 9 519 160q58-61 143-61q83 0 141 58.5t58 140.5M418 1045q0 62 43.5 106t105.5 44t106-44t44-106t-44-105.5T567 896q-61 0-105 44t-44 105m810 355q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20t-160-20t-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5t91 4.5t91-4.5t122.5-29.5t118.5-68m-3-205q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5t44 106t106 44"></path>
                </svg>
            </figure>
            <h1 className={styles.gb} >Reddit.to.read</h1>
        </div>
        <nav className={styles.gb} id={styles.topics}>
            <Subreddits/>
        </nav>
        <form className={styles.gb} >
            <input id={styles.searchField} type="search" name="search" value="" aria-label="search for a keyword" placeholder="search" />
            <button id={styles.searchButton} className={styles.gb} aria-label="search button">
                <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>
            </button>
        </form>
    </header>
    )
}



            /* <ul role="presentation" className={styles.gb}>
                <li>
                    <a href="#" className={styles.topic}>
                        <figure id={styles.topicIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 72 72"><path fill="#fff" d="M50.995 21.47a3.008 3.008 0 0 1-6.014.133l-6.398-1.36l-1.89 9.04c4.463.16 8.469 1.529 11.364 3.648a4.298 4.298 0 1 1 4.624 7.065q.076.564.077 1.14c0 6.557-7.587 11.871-16.946 11.871c-9.358 0-16.945-5.314-16.945-11.87q0-.624.09-1.233a4.298 4.298 0 1 1 4.735-7.062c2.932-2.103 6.97-3.445 11.456-3.566l2.102-10.06a.76.76 0 0 1 .424-.533a.75.75 0 0 1 .514-.073l7.108 1.511a3.008 3.008 0 0 1 5.699 1.348"></path><path fill="#ea5a47" fillRule="evenodd" d="M36 65c16.016 0 29-12.984 29-29S52.016 7 36 7S7 19.984 7 36s12.984 29 29 29m14.995-43.53a3.009 3.009 0 0 1-6.014.133l-6.398-1.36l-1.89 9.04c4.463.16 8.469 1.529 11.364 3.648a4.298 4.298 0 1 1 4.624 7.065q.076.564.077 1.14c0 6.557-7.587 11.871-16.946 11.871c-9.358 0-16.945-5.314-16.945-11.87q0-.624.09-1.233a4.298 4.298 0 1 1 4.735-7.062c2.932-2.103 6.97-3.445 11.456-3.566l2.102-10.06a.76.76 0 0 1 .424-.533a.76.76 0 0 1 .514-.073l7.108 1.511a3.009 3.009 0 0 1 5.699 1.348" clipRule="evenodd"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeWidth={1.75} d="M28.863 46.212c3.275 2.866 11.052 2.866 13.917 0"></path><circle cx={42.659} cy={39.063} r={2}></circle><circle cx={29.334} cy={39.063} r={2}></circle><path fill="none" stroke="#000" strokeWidth={2} d="M64 36c0 15.464-12.536 28-28 28S8 51.464 8 36S20.536 8 36 8s28 12.536 28 28ZM47.987 25.478A4.009 4.009 0 1 0 44.829 19l-6.433-1.368a1.75 1.75 0 0 0-1.169.156c-.472.228-.84.667-.956 1.224l-1.943 9.298c-4.048.236-7.74 1.432-10.6 3.295a5.298 5.298 0 1 0-5.837 8.844a10 10 0 0 0-.024.688c0 3.693 2.138 6.935 5.39 9.212c3.253 2.28 7.696 3.658 12.555 3.658c4.86 0 9.302-1.378 12.557-3.658c3.25-2.277 5.389-5.519 5.389-9.212q0-.279-.016-.556a5.298 5.298 0 1 0-5.733-8.902c-2.733-1.81-6.24-3.006-10.1-3.326l1.447-6.924l4.74 1.008a4.01 4.01 0 0 0 3.89 3.04Z"></path></svg>
                        </figure>
                        <h3>topicerercfr</h3>
                    </a>
                </li>
            </ul> */