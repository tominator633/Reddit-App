const baseUrl = "https://www.reddit.com";

const redditData = {
    async getData () {
        const searchEndpoint = "/r/popular.json";
        try {
            const response = await fetch(baseUrl + searchEndpoint);
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
            } else {
                throw new Error("Request failed");
            }
        } catch (error) {
            console.log(error)
        }
    }
};

export default redditData;
