import { configureStore } from '@reduxjs/toolkit';
import redditsReducer from '../features/Reddits/redditsSlice';

export default configureStore({
    reducer: {
        reddits: redditsReducer
    }
});