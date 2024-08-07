import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { act } from 'react';
const baseUrl = "https://www.reddit.com";

/* export const loadSubredditData = createAsyncThunk(
    "subreddits/loadSubredditIcon",
    async (subreddit) => {
        const searchEndpoint = `/r/${subreddit}/about.json`;
        const response = await fetch(baseUrl + searchEndpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            const subredditData = jsonResponse.data;
            return {
                name: subredditData.display_name,
                id: subredditData.id,
                title: subredditData.title,
                url: subredditData.url,
                description: subredditData.public_description,
                subscribers: subredditData.subscribers,
                iconSrc: subredditData.icon_img,
            }
        }
    }
); */
export const loadInitialSwiperSubreddit = createAsyncThunk(
    "subreddits/loadInitialSwiperSubreddit",
    async (subreddit) => {
        const searchEndpoint = `/r/${subreddit}/about.json`;
        const response = await fetch(baseUrl + searchEndpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            const subredditData = jsonResponse.data;
            return {
                name: subredditData.display_name,
                id: subredditData.id,
                title: subredditData.title,
                url: subredditData.url,
                description: subredditData.public_description,
                subscribers: subredditData.subscribers,
                iconSrc: subredditData.icon_img,
            }
        }
    }
);



export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        swiperSubreddits: ["funny", "AskReddit", "gaming", "worldnews",],
        //swiperSubreddits: [{name: "funny"}, {name: "AskReddit"}, {name: "gaming"}, {name: "worldnews"},],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addSubreddit: (state, action) => {
            state.swiperSubreddits.push(action.payload);
        },
        deleteSubreddit: (state, action) => {
            return state.swiperSubreddits.filter(item => item !== action.payload)
        },
    },
    extraReducers: {
        [loadInitialSwiperSubreddit.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadInitialSwiperSubreddit.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadInitialSwiperSubreddit.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
           state.swiperSubreddits.forEach((subreddit, index) => {
            if (subreddit === action.payload.name) {
              state.swiperSubreddits[index] = action.payload;
            }
          });
          //forEach is mutable. Immutable version would include map method and returning a new array
          
        }
    }
});

export const selectSwiperSubreddits = (state) => state.subreddits.swiperSubreddits;
export const selectIsLoading = (state) => state.subreddits.isLoading;
export const selectHasError = (state) => state.subreddits.hasError;
export const {addSubreddit, deleteSubreddit} = subredditsSlice.actions;



export default subredditsSlice.reducer;