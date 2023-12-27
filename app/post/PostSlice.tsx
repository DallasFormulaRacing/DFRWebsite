import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "../api/store"


export enum PostStatuses {
    Initial = "Not Feteched",
    Loading = "Loading",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error",
}

export interface PostState {
    id?: number;
    title?: string;
    author?: string;
    content?: string;
    created_at?: any;
    updated_at?: any;
    image?: string;
    snippet?: string;
    tags?: string[];
}

export interface PostFormData {
    post: {
        id?: number;
        title: string;
        content: string;
    };
}

export interface PostsState {
    posts: PostState[];
    status: string;
}

export interface PostDeleteData {
    post: {
        post_id: number;
    };
}