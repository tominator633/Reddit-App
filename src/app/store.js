import { configureStore } from '@reduxjs/toolkit';
import redditsReducer from '../features/Reddits/redditsSlice';
import subredditsReducer from '../features/Subreddits/subredditsSlice';

export default configureStore({
    reducer: {
        reddits: redditsReducer,
        subreddits: subredditsReducer
    }
});