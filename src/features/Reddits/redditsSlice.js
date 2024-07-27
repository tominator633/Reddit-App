import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { act } from 'react';
const baseUrl = "https://www.reddit.com";


export const loadReddits = createAsyncThunk(
    "reddits/loadReddits",
    async (subreddit = "popular") => {
        const searchEndpoint = `/r/${subreddit}.json`;
        const response = await fetch(baseUrl + searchEndpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            const redditsArr = jsonResponse.data.children.map((post) => {
                return {
                    id: post.data.id,
                    user: post.data.author,
                    postTime: "",
                    subreddit: post.data.subreddit,
                    title: post.data.title,
                    text: post.data.selftext_html,
                    img: "",
                    score: post.data.score,
                }
            });
            return redditsArr;
        }
    }
);


export const redditsSlice = createSlice({
    name: "reddits",
    initialState: {
        subredditEndpoint: "/r/popular.json",
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


export default redditsSlice.reducer;