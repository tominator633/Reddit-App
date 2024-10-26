import React from "react";
import styles from "./SavedReddits.module.css";
import { useSelector } from 'react-redux';
import { selectSavedReddits, filterReddits} from "../../features/Reddits/redditsSlice";
import { Outlet, useSearchParams } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Reddit from "../../features/Reddit/Reddit";
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import {savedRedditVar} from "./savedRedditsFMVariants";


export default function SavedReddits () {


    const savedReddits = useSelector(selectSavedReddits);
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");

    const redditsToRender = title ? filterReddits(title,savedReddits) : savedReddits;

    return (
        <>
        <h2 className={styles.savedRedditsH2}>{`Saved reddits (${savedReddits.length})`}</h2>
        <section className={styles.savedReddits}>
            <AnimatePresence> 
            {
            redditsToRender.length > 0 ?
            redditsToRender.map((content) => {
                return (
                    <LayoutGroup key={content.id}>
                        <motion.div className={styles.savedRedditWrapper}
                                    variants={savedRedditVar}
                                    layout
                                    exit="exit"
                                    transition={{ duration: 0.2 }}>
                            <Reddit content={content} 
                                    key={content.id} />
                        </motion.div>
                            
                    </LayoutGroup>
                )
            } )
            :
            <ErrorMessage message={title ? "No reddits found for the given input" : "No reddits saved"} />
            }
            </AnimatePresence> 
        </section>
        <Outlet/>
        </>
    )
}


