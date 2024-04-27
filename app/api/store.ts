import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postsReducer from "../post/PostSlice";
import accountReducer from "../components/account/AccountSlice";
import sponsorReducer from "../sponsors/SponsorSlice";

import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        accounts: accountReducer,
        sponsors: sponsorReducer,
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
