



export const submitBtnVar = {
    visible: {
        marginTop: "0px",
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    hidden: {
        marginTop: "-70px",
        opacity: 0,
        transition: {
            duration: 0.3
        }
    },
    }

    
       export const subredditVar = {
            hidden: { opacity: 0, x: 50 }, // Start offscreen to the right
            visible: { opacity: 1, x: 0 }, // Animate to visible
            exit: { opacity: 0, x: -50 }   // Exit offscreen to the left
          };