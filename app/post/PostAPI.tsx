import {
    PostsState,
    PostFormData,
    PostDeleteData,
    PostUpdateData,
} from "./PostSlice";

const API_URL = "http://localhost:3000/"; // TODO: move to config file

export async function fetchPosts() {
    return fetch(`${API_URL}/posts.json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as PostsState;
        });
}

export async function createPost(formData: PostFormData) {
    const post = formData.post;

    return fetch(`${API_URL}/posts.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as PostsState;
        });
}

export async function updatePost(payload: PostUpdateData) {
    const post = payload.post;
    return fetch(`${API_URL}/posts/${post.id}.json`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as PostsState;
        });
}

export async function destroyPost(payload: PostDeleteData) {
    const post = payload.post;

    return fetch(`${API_URL}/posts/${post.post_id}.json`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as PostsState;
        });
}
