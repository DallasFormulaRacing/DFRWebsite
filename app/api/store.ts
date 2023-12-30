import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postsReducer from "../post/PostSlice";

import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
