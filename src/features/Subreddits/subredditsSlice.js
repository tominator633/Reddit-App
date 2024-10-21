import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {initialSubredditsSelection} from "../../utils/utils";

const baseUrl = "https://www.reddit.com";

export const searchSubreddits = createAsyncThunk(
    "subreddits/searchSubreddits",
    async (searchInput) => {
        const searchEndpoint = `/subreddits/search.json?q=${searchInput}&limit=20`;
        const response = await fetch(baseUrl + searchEndpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            const searchedSubredditsArr = jsonResponse.data.children.map((subreddit) => {
                return {
                    name: subreddit.data.display_name,
                    id: subreddit.data.id,
                    subscribers: subreddit.data.subscribers,
                    url: subreddit.data.url,
                    headerTitle: subreddit.data.header_title,
                    iconImg: subreddit.data.icon_img,
                    headerImg: subreddit.data.header_img,
                    bannerImg: subreddit.data.banner_img,
                    publicDescription: subreddit.data.public_description,
                }
            });
            console.log(searchedSubredditsArr);
            return searchedSubredditsArr;
        }
    }
)


export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        swiperSubreddits: initialSubredditsSelection,
        searchedSubreddits: [],
        isSearchSubredditsLoading: false,
        hasSearchSubredditsError: false,
        currentSubreddit: {},
    },
    reducers: {
        addSubreddit: (state, action) => {
            if (!state.swiperSubreddits.some(subreddit => subreddit.id === action.payload.id)) {
                state.swiperSubreddits.push(action.payload);
                const updatedSearchedSubreddits = state.searchedSubreddits.filter(subreddit => subreddit.id !== action.payload.id);
                state.searchedSubreddits = updatedSearchedSubreddits;
            }
        },
        deleteSubreddit: (state, action) => {
            const newArr = state.swiperSubreddits.filter(item => item.id !== action.payload.id);
            state.swiperSubreddits = newArr;
            state.searchedSubreddits.unshift(action.payload);
        },
        setCurrentSubreddit: (state, action) => {
            state.currentSubreddit = action.payload;
        }
    },
    extraReducers: {
        [searchSubreddits.pending]: (state) => {
            state.isSearchSubredditsLoading = true;
            state.hasSearchSubredditsError = false;
        },
        [searchSubreddits.rejected]: (state) => {
            state.isSearchSubredditsLoading = false;
            state.hasSearchSubredditsError = true;
            state.searchedSubreddits = [];
        },
        [searchSubreddits.fulfilled]: (state, action) => {
            state.isSearchSubredditsLoading = false;
            state.hasSearchSubredditsError = false;
            state.searchedSubreddits = action.payload;          
        },
    }
});

export const selectSwiperSubreddits = (state) => state.subreddits.swiperSubreddits;
export const selectSearchedSubreddits = (state) => state.subreddits.searchedSubreddits;
export const selectIsSearchSubredditsLoading = (state) => state.subreddits.isSearchSubredditsLoading;
export const selectHasSearchSubredditsError = (state) => state.subreddits.hasSearchSubredditsError;

export const selectCurrentSubreddit = (state) => state.subreddits.currentSubreddit;

export const {addSubreddit, deleteSubreddit, setCurrentSubreddit} = subredditsSlice.actions;



export default subredditsSlice.reducer;