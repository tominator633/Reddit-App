import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = "https://www.reddit.com";


export const loadReddits = createAsyncThunk(
    "reddits/loadReddits",
    async (subreddit = "popular") => {
        const searchEndpoint = `/r/${subreddit}.json`;
        const response = await fetch(baseUrl + searchEndpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            const redditsArr = jsonResponse.data.children.map((post) => {

                let imgThumbnail;
                const thumbnailIsImg = /\.(jpeg|jpg|png)$/i;
                if (thumbnailIsImg.test(post.data.thumbnail)) {
                    imgThumbnail = post.data.thumbnail;
                } else {
                    imgThumbnail = null;
                };

                let imgUrl;
                const urlIncludesImg = /\.(jpeg|jpg|png)$/i;
                if (urlIncludesImg.test(post.data.url)) {
                    imgUrl = post.data.url;
                } else {
                    imgUrl = null;
                };

                let videoUrl;
                let videoDashUrl;
                if (post.data.is_video) {
                    videoUrl = post.data.media.reddit_video.fallback_url;
                    videoDashUrl = post.data.media.reddit_video.dash_url;
                } else {
                    videoUrl = null;
                    videoDashUrl = null;
                };
        
                return {
                    id: post.data.id,
                    user: post.data.author,
                    created: post.data.created,
                    subreddit: post.data.subreddit,
                    title: post.data.title,
                    text: post.data.selftext,
                    imgSrc: imgUrl,
                    isVideo: post.data.is_video,
                    videoSrc: videoUrl,
                    videoDashUrl: videoDashUrl,
                    score: post.data.score,
                    thumbnail: imgThumbnail,
                    url: post.data.url,
                    isSelfpost: post.data.is_self,
                    permalink: post.data.permalink,
                    
                }
            });
            console.log(jsonResponse);
            return redditsArr;
        }
    }
);


export const redditsSlice = createSlice({
    name: "reddits",
    initialState: {
        resultReddits: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: {
        [loadReddits.pending]: (state,action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadReddits.rejected]: (state,action) => {
            state.isLoading = false;
            state.hasError = true;
            state.resultReddits = [];
        },
        [loadReddits.fulfilled]: (state,action) => {
            state.resultReddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        }
    }
});



export const selectResultReddits = (state) => state.reddits.resultReddits;
export const selectIsLoading = (state) => state.reddits.isLoading;
export const selectHasError = (state) => state.reddits.hasError;

export const filterReddits = (query, reddits) => {
    return reddits.filter(reddit => reddit.title.toLowerCase().includes(query.toLowerCase()));
}






export default redditsSlice.reducer;