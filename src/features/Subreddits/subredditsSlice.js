import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const loadSubredditIcon = createAsyncThunk(
    "subreddits/loadSubredditIcon",
    async (subreddit = )
)



export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [
            {
                name: "popular",
                icon: "",
            },
            {
                name: "funny",
                icon: "",
            },
            {
                name: "AskReddit",
                icon: "",
            },
            {
                name: "gaming",
                icon: "",
            },
            {
                name: "worldnews",
                icon: "",
            },
            {
                name: "science",
                icon: "",
            },
        ],

    }
});