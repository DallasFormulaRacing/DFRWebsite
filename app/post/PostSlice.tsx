import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { RootState } from "../api/store";
import { fetchPosts, createPost, updatePost, destroyPost } from "./PostAPI";

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

export interface PostUpdateData {
    post_id: number;
    post: PostState;
}

const initialState: PostsState = {
    posts: [
        {
            id: 1,
            title: "",
            author: "",
            content: "",
            created_at: "",
            updated_at: "",
            image: "",
            snippet: "",
            tags: [],
        },
    ],
    status: PostStatuses.Initial,
};

export const fetchPostsAsync = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const response = await fetchPosts();
        return response;
    }
);

export const createPostAsync = createAsyncThunk(
    "posts/createPost",
    async (CreatePostData: PostFormData) => {
        const response = await createPost(CreatePostData);
        return response;
    }
);

export const updatePostAsync = createAsyncThunk(
    "posts/updatePost",
    async (UpdatePostData: PostUpdateData) => {
        const response = await updatePost(UpdatePostData);
        return response;
    }
);

export const destroyPostAsync = createAsyncThunk(
    "posts/destroyPost",
    async (DeletePostData: PostDeleteData) => {
        const response = await destroyPost(DeletePostData);
        return response;
    }
);

export const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = PostStatuses.Loading;
                });
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.posts = action.payload;
                    draftState.status = PostStatuses.UpToDate;
                });
            })
            .addCase(fetchPostsAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = PostStatuses.Error;
                });
            })
            .addCase(createPostAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = PostStatuses.Loading;
                });
            })
            .addCase(createPostAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.posts.push(action.payload);
                    draftState.status = PostStatuses.UpToDate;
                });
            })
            .addCase(createPostAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = PostStatuses.Error;
                });
            })
            .addCase(updatePostAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = PostStatuses.Loading;
                });
            })
            .addCase(updatePostAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    const index = draftState.posts.findIndex(
                        (post) => post.id === action.payload.id
                    );
                    draftState.posts[index] = action.payload;

                    draftState.status = PostStatuses.UpToDate;
                });
            })
            .addCase(updatePostAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = PostStatuses.Error;
                });
            })
            .addCase(destroyPostAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = PostStatuses.Loading;
                });
            })
            .addCase(destroyPostAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.posts = action.payload;
                    draftState.status = PostStatuses.Deleted;
                });
            })
            .addCase(destroyPostAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = PostStatuses.Error;
                });
            });
    },
});

export const {} = PostsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostStatus = (state: RootState) => state.posts.status;
export default PostsSlice.reducer;
