import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = "https://www.reddit.com";

 export const loadComments = createAsyncThunk(
    "reddit/loadComments",
    async (permalink) => {
        const searchEndpoint = `/${permalink}.json`;
        const response = await fetch(baseUrl + searchEndpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            const commentsArr = jsonResponse[1].data.children.map((post) => {
             
                    return {
                        author: post.data.author,
                        body: post.data.body,
                        created: post.data.created,
                        score: post.data.score,
                        kind: post.kind,
                        replies: post.data.replies ?
                            post.data.replies.data.children.map((reply) => {
                      
                                return {
                                    rAuthor: reply.data.author,
                                    rBody: reply.data.body,
                                    rCreated: reply.data.created,
                                    rScore: reply.data.score,
                                    rKind: reply.kind,
                                    } 
                            
                            }).filter(reply => reply.rKind === "t1")
                            :
                            "",
                        }
              
                  
                }  
            ).filter(post => post.kind === "t1");
            console.log(commentsArr);
            return commentsArr;
        }
    }
)


export const redditSlice = createSlice({
    name: "reddit",
    initialState: {
        currentReddit: {},
        comments: [],
        isCommentsLoading: false,
        hasCommentsError: false,
    },
    reducers: {
        setCurrentReddit: (state, action) => {
            state.currentReddit = action.payload;
        },
        emptyComments: (state, action) => {
            state.comments = [];
        }
    },
    extraReducers: {
        [loadComments.pending]: (state,action) => {
            state.isCommentsLoading = true;
            state.hasCommentsError = false;
        },
        [loadComments.rejected]: (state,action) => {
            state.isCommentsLoading = false;
            state.hasCommentsError = true;
            state.comments = [];
        },
        [loadComments.fulfilled]: (state,action) => {
            state.comments = action.payload;
            state.isCommentsLoading = false;
            state.hasCommentsError = false;
        }
    }
});



export const selectCurrentReddit = (state) => state.reddit.currentReddit;
export const selectComments = (state) => state.reddit.comments;
export const selectIsCommentsLoading = (state) => state.reddit.isCommentsLoading;
export const selectHasCommentsError = (state) => state.reddit.hasCommentsError;
export const {setCurrentReddit, emptyComments} = redditSlice.actions;
export default redditSlice.reducer;