import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = "https://www.reddit.com";

/* export const loadComments = createAsyncThunk(
    "reddit/loadComments",
    async () => {

    }
) */


export const redditSlice = createSlice({
    name: "reddit",
    initialState: {
        currentReddit: {},
        comments: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {
        setCurrentReddit: (state, action) => {
            state.currentReddit = action.payload;
        }
    },
/*     extraReducers: {
        [loadComments.pending]: (state,action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadComments.rejected]: (state,action) => {
            state.isLoading = false;
            state.hasError = true;
            state.comments = [];
        },
        [loadComments.fulfilled]: (state,action) => {
            state.comments = action.payload;
            state.isLoading = false;
            state.hasError = false;
        }
    } */
});



export const selectCurrentReddit = (state) => state.reddit.currentReddit;
export const {setCurrentReddit} = redditSlice.actions;
export default redditSlice.reducer;