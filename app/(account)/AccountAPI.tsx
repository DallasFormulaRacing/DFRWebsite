import {
    AccountState,
    AccountFormData,
    AccountDeleteData,
    AccountUpdateData,
} from "./AccountSlice";

const API_URL = "http://localhost:3000/"; // TODO: move to config file

export async function fetchAccounts() {
    return fetch(`${API_URL}/accounts.json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as AccountState;
        });
}

export async function createAccount(formData: AccountFormData) {
    const account = formData.account;

    return fetch(`${API_URL}/accounts.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            account,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as AccountState;
        });
}

export async function updateAccount(payload: AccountUpdateData) {
    const account = payload.account;
    return fetch(`${API_URL}/accounts/${account.id}.json`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            account,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as AccountState;
        });
}

export async function destroyAccount(payload: AccountDeleteData) {
    const account = payload.account;

    return fetch(`${API_URL}/accounts/${account.account_id}.json`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            account,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as AccountState;
        });
}
