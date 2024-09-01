
export const searchRedditsFormVar = (isBelow900px) => ({
    visible: {
      marginTop: "0px",
      transition: {
        when: "beforeChildren",
        duration: 0.3,
      },
    },
    hidden: {
      marginTop: isBelow900px ? "-70px" : "-80px",
      transition: {
        when: "afterChildren",
        duration: 0.3,
      },
    },
  });

export const searchRedditsFieldVar = {
visible: {
    opacity: 1,
    transition: {
        delay: 0.1,
    }
},
hidden: { opacity: 0},
}