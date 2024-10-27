

/* export const epochToAgo = (epochTime) => {

    const currentTimeMs = Date.now();
    const epochTimeMs = epochTime * 1000;
    const timeDifferenceMs = currentTimeMs - epochTimeMs;
    const timeDifferenceS = timeDifferenceMs/1000;

    if (timeDifferenceS >= 31556926) {
        const yearsAgo = Math.floor(timeDifferenceS / 31556926);
        return yearsAgo === 1 ? `${yearsAgo} year ago` : `${yearsAgo} years ago`;
    } else if (timeDifferenceS < 31556926 && timeDifferenceS >= 2629743.83) {
        const monthsAgo = Math.floor(timeDifferenceS / 2629743.83);
        return monthsAgo === 1 ? `${monthsAgo} month ago` : `${monthsAgo} months ago`;
    } else if (timeDifferenceS < 2629743.83 && timeDifferenceS >= 86400) {
        const daysAgo = Math.floor(timeDifferenceS / 86400);
        return daysAgo === 1 ? `${daysAgo} day ago` : `${daysAgo} days ago`;
    } else if (timeDifferenceS < 86400 && timeDifferenceS >= 3600) {
        const hoursAgo = Math.floor(timeDifferenceS / 3600);
        return hoursAgo === 1 ? `${hoursAgo} hour ago` : `${hoursAgo} hours ago`;
    } else if (timeDifferenceS < 3600) {
        const minsAgo = Math.floor(timeDifferenceS / 60);
        return minsAgo === 1 ? `${minsAgo} min ago` : `${minsAgo} mins ago`;
    } else {
        return `${timeDifferenceS} s ago`;
    }
} */

export const epochToAgo = (epochTime) => {
    const currentTimeMs = Date.now();
    const epochTimeMs = epochTime * 1000;
    const timeDifferenceMs = currentTimeMs - epochTimeMs;
    const timeDifferenceS = Math.floor(timeDifferenceMs / 1000);

    const YEAR_IN_SECONDS = 31556926;
    const MONTH_IN_SECONDS = 2629743;
    const DAY_IN_SECONDS = 86400;
    const HOUR_IN_SECONDS = 3600;
    const MINUTE_IN_SECONDS = 60;

    if (timeDifferenceS >= YEAR_IN_SECONDS) {
        const yearsAgo = Math.floor(timeDifferenceS / YEAR_IN_SECONDS);
        return yearsAgo === 1 ? `${yearsAgo} year ago` : `${yearsAgo} years ago`;
    } else if (timeDifferenceS >= MONTH_IN_SECONDS) {
        const monthsAgo = Math.floor(timeDifferenceS / MONTH_IN_SECONDS);
        return monthsAgo === 1 ? `${monthsAgo} month ago` : `${monthsAgo} months ago`;
    } else if (timeDifferenceS >= DAY_IN_SECONDS) {
        const daysAgo = Math.floor(timeDifferenceS / DAY_IN_SECONDS);
        return daysAgo === 1 ? `${daysAgo} day ago` : `${daysAgo} days ago`;
    } else if (timeDifferenceS >= HOUR_IN_SECONDS) {
        const hoursAgo = Math.floor(timeDifferenceS / HOUR_IN_SECONDS);
        return hoursAgo === 1 ? `${hoursAgo} hour ago` : `${hoursAgo} hours ago`;
    } else if (timeDifferenceS >= MINUTE_IN_SECONDS) {
        const minsAgo = Math.floor(timeDifferenceS / MINUTE_IN_SECONDS);
        return minsAgo === 1 ? `${minsAgo} min ago` : `${minsAgo} mins ago`;
    } else {
        return `${timeDifferenceS} s ago`;
    }
};


export const formatNumberWithSpaces = (number) => {
    const numStr = number.toString();
    const formattedNumber = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedNumber;
}


export const initialSubredditsSelection = [
    {
        name: "pics",
        id: "2qh0u",
        subscribers: 31164714,
        url: "/r/pics/",
        headerTitle: "Something Clever",
        iconImg: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png",
        headerImg: "https://b.thumbs.redditmedia.com/1zT3FeN8pCAFIooNVuyuZ0ObU0x1ro4wPfArGHl3KjM.png",
        bannerImg: "",
        publicDescription: "A place for photographs, pictures, and other images."
    },
    {
        name: "funny",
        id: "2qh33",
        subscribers: 64364619,
        url: "/r/funny/",
        headerTitle: "",
        iconImg: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
        headerImg: "https://b.thumbs.redditmedia.com/JXMBG9CsCO8qDCm5AxBKzKlpziPyxQWGbrI1STjs7uM.png",
        bannerImg: "https://a.thumbs.redditmedia.com/9zfV0uAe-z008QZ0NJnHQ34o30cmLCN9-qBCgAZGcc0.png",
        publicDescription: "Reddit's largest humor depository"
    },
    {
        name: "AskReddit",
        id: "2qh1i",
        subscribers: 48812700,
        url: "/r/AskReddit/",
        headerTitle: "Ass Credit",
        iconImg: "https://b.thumbs.redditmedia.com/LSHrisQApf1H5F8nWShTx3_KjTOMc3R_ss3kx3XAyXQ.png",
        headerImg: "https://a.thumbs.redditmedia.com/IrfPJGuWzi_ewrDTBlnULeZsJYGz81hsSQoQJyw6LD8.png",
        bannerImg: "https://b.thumbs.redditmedia.com/RdyIGEa9Ghu94wr5v3oQQ_zvE1C1cntehzZJChVFkcw.png",
        publicDescription: "r/AskReddit is the place to ask and answer thought-provoking questions."
    },
    {
        name: "gaming",
        id: "2qh03",
        subscribers: 43872821,
        url: "/r/gaming/",
        headerTitle: "",
        iconImg: "https://b.thumbs.redditmedia.com/0PgZl68jAxA6T1BH6uvUQ5Bz1F1GrrJLCL8oi2Gz0Ak.png",
        headerImg: "https://a.thumbs.redditmedia.com/8GTpvn_Q-n-PuI_Zg2zvjA3Ycjv2ThxyJ5N10dFiXD8.png",
        bannerImg: "",
        publicDescription: "The Number One Gaming forum on the Internet."
    },
    {
        name: "worldnews",
        id: "2qh13",
        subscribers: 41655509,
        url: "/r/worldnews/",
        headerTitle: "News from Planet Earth",
        iconImg: "",
        headerImg: null,
        bannerImg: "",
        publicDescription: "A place for major news from around the world, excluding US-internal news."
    },
    {
        name: "aww",
        id: "2qh1o",
        subscribers: 36977568,
        url: "/r/aww/",
        headerTitle: "Fun fact: you're on reddit right now!",
        iconImg: "https://a.thumbs.redditmedia.com/A71uOuvJLekakhm6d5jn3SPO2R7IezsXTT72Fq98J30.png",
        headerImg: "https://b.thumbs.redditmedia.com/G-3UFSFhXcv-WCIz2XDKFv9Mt06HMfyfFxpBWhlAMQM.png",
        bannerImg: "https://a.thumbs.redditmedia.com/5-pbhynSeq6Vvo_rYYvW32xjbRCy2_TkxKH9Urg-Zd8.png",
        publicDescription: "Things that make you go AWW! -- like puppies, bunnies, babies, and so on...\n\nFeel free to post original pictures and videos of cute things."
    },
    {
        name: "Music",
        id: "2qh1u",
        subscribers: 35036080,
        url: "/r/Music/",
        headerTitle: "/r/Music - Reddit's largest/best music community!",
        iconImg: "https://b.thumbs.redditmedia.com/PEWyzBXzK1xSBEI_dbUx9yijATp_G1lyUrn1TSMPwCY.png",
        headerImg: null,
        bannerImg: "https://b.thumbs.redditmedia.com/XWgGN39mWf12u3_Mv0NO2Jhps8OjGlQ9Xv9jxeKqV-k.png",
        publicDescription: "Reddit’s #1 Music Community"
    }
]