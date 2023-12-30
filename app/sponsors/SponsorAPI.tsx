import {
    SponsorState,
    SponsorFormData,
    SponsorUpdateData,
    SponsorDeleteData,
} from "./SponsorSlice";

const API_URL = "http://localhost:3000"; // TODO: move to config file

export async function fetchSponsors() {
    return fetch(`${API_URL}/sponsors.json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as SponsorState;
        });
}

export async function createSponsor(formData: SponsorFormData) {
    const sponsor = formData.sponsor;

    return fetch(`${API_URL}/sponsors.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sponsor,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as SponsorState;
        });
}

export async function updateSponsor(payload: SponsorUpdateData) {
    const sponsor = payload.sponsor;
    return fetch(`${API_URL}/sponsors/${sponsor.id}.json`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sponsor,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as SponsorState;
        });
}

export async function destroySponsor(payload: SponsorDeleteData) {
    const sponsor = payload.sponsor;

    return fetch(`${API_URL}/sponsors/${sponsor.sponsor_id}.json`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sponsor,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as SponsorState;
        });
}