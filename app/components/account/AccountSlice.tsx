import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { RootState } from "../../api/store";
import {
    fetchAccounts,
    createAccount,
    updateAccount,
    destroyAccount,
} from "./AccountAPI";

export enum AccountStatuses {
    Initial = "Not Feteched",
    Loading = "Loading",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error",
}

export interface AccountState {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    position?: string;
    created_at?: any;
    updated_at?: any;
}

export interface AccountFormData {
    account: {
        id?: number;
        name: string;
        email: string;
        password: string;
        position: string;
    };
}

export interface AccountsState {
    accounts: AccountState[];
    status: string;
}

export interface AccountDeleteData {
    account: {
        account_id: number;
    };
}

export interface AccountUpdateData {
    account_id: number;
    account: AccountState;
}

const initialState: AccountsState = {
    accounts: [
        {
            id: 1,
            name: "",
            email: "",
            password: "",
            position: "",
            created_at: "",
            updated_at: "",
        },
    ],
    status: AccountStatuses.Initial,
};

export const fetchAccountsAsync = createAsyncThunk(
    "accounts/fetchAccounts",
    async () => {
        const response = await fetchAccounts();
        return response;
    }
);

export const createAccountAsync = createAsyncThunk(
    "accounts/createAccount",
    async (CreateAccountData: AccountFormData) => {
        const response = await createAccount(CreateAccountData);
        return response;
    }
);

export const updateAccountAsync = createAsyncThunk(
    "accounts/updateAccount",
    async (AccountUpdateData: AccountUpdateData) => {
        const response = await updateAccount(AccountUpdateData);
        return response;
    }
);

export const destroyAccountAsync = createAsyncThunk(
    "accounts/destroyAccount",
    async (DeleteAccountData: AccountDeleteData) => {
        const response = await destroyAccount(DeleteAccountData);
        return response;
    }
);

export const AccountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccountsAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = AccountStatuses.Loading;
                });
            })
            .addCase(fetchAccountsAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.accounts = action.payload;
                    draftState.status = AccountStatuses.UpToDate;
                });
            })
            .addCase(fetchAccountsAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = AccountStatuses.Error;
                });
            })
            .addCase(createAccountAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = AccountStatuses.Loading;
                });
            })
            .addCase(createAccountAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.accounts.push(action.payload);
                    draftState.status = AccountStatuses.UpToDate;
                });
            })
            .addCase(createAccountAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = AccountStatuses.Error;
                });
            })
            .addCase(updateAccountAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = AccountStatuses.Loading;
                });
            })
            .addCase(updateAccountAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    const index = draftState.accounts.findIndex(
                        (account) => account.id === action.payload.id
                    );
                    draftState.accounts[index] = action.payload;
                    draftState.status = AccountStatuses.UpToDate;
                });
            })
            .addCase(updateAccountAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = AccountStatuses.Error;
                });
            })
            .addCase(destroyAccountAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = AccountStatuses.Loading;
                });
            })
            .addCase(destroyAccountAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.accounts = draftState.accounts.filter(
                        (account) => account.id !== action.payload.id
                    );
                    draftState.status = AccountStatuses.Deleted;
                });
            })
            .addCase(destroyAccountAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = AccountStatuses.Error;
                });
            });
    },
});

export const {} = AccountsSlice.actions;
export const selectAccounts = (state: RootState) => state.accounts.accounts;
export const selectAccountStatus = (state: RootState) => state.accounts.status;
export default AccountsSlice.reducer;
