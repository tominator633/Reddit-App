import React, { useEffect, useRef } from "react";
import styles from "./ErrorMessage.module.css";
import { motion } from 'framer-motion';
import {errorMessageVar} from "./errorMessageFMVariants.js";


export default function ErrorMessage ({message, onClick}) {

      // Reference to focus the error message
      const errorRef = useRef(null);

      // Set focus to the error message when it is displayed
      useEffect(() => {
          if (errorRef.current) {
              errorRef.current.focus();
          }
      }, []);

    return (
    <motion.section className={styles.errorContainer}

                variants={errorMessageVar}
                initial="hidden"
                animate="visible"

                role="alert" // Inform assistive technologies that this is an important message
                aria-live="assertive" // Ensure this message is announced immediately
                tabIndex={-1} // Make the div focusable
                ref={errorRef} // Reference for managing focus
    
    >
        <div className={styles.errorDiv}
            role="presentation">
            <figure className={styles.errorFigure}
                    role="presentation">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3 4c-.3 0-.568.131-.751.34l-1.65-.33a.5.5 0 0 0-.594.42l-.368 2.578c-1.423.063-2.739.493-3.746 1.198a5 5 0 0 0-.547.439a1.5 1.5 0 0 0-1.34 2.684L6 13.5c0 1.382.802 2.532 1.891 3.294C8.983 17.56 10.439 18 12 18s3.017-.441 4.109-1.206C17.199 16.032 18 14.882 18 13.5l-.004-.17a1.5 1.5 0 0 0-1.34-2.685a5 5 0 0 0-.547-.44c-.94-.657-2.15-1.076-3.465-1.18l.276-1.931l1.132.226A1 1 0 1 0 15 6m-5.5 6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/></g></svg>
            </figure>
            <p className={styles.errorText}
                role="alert">{message}</p>
            {onClick && 
            <button className={styles.errorbutton}
                    onClick={onClick}
                    aria-live="polite">Try again</button>
            }
            
        </div>
    </motion.section>
    )
}