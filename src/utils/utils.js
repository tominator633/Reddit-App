

export const epochToAgo = (epochTime) => {

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
}

export const formatNumberWithSpaces = (number) => {
    const numStr = number.toString();
    const formattedNumber = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedNumber;
}