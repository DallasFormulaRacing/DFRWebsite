import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { RootState } from "../api/store";
import {
    fetchSponsors,
    createSponsor,
    updateSponsor,
    destroySponsor,
} from "./SponsorAPI";

export enum SponsorStatuses {
    Initial = "Not Feteched",
    Loading = "Loading",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error",
}

export interface SponsorState {
    id?: number;
    name?: string;
    logo?: string;
    link?: string;
}

export interface SponsorFormData {
    sponsor: {
        id?: number;
        name: string;
        logo: string;
        link: string;
    };
}

export interface SponsorsState {
    sponsors: SponsorState[];
    status: string;
}

export interface SponsorDeleteData {
    sponsor: {
        sponsor_id: number;
    };
}

export interface SponsorUpdateData {
    sponsor_id: number;
    sponsor: SponsorState;
}

const initialState: SponsorsState = {
    sponsors: [
        {
            id: 1,
            name: "",
            logo: "",
            link: "",
        },
    ],
    status: SponsorStatuses.Initial,
};

export const fetchSponsorsAsync = createAsyncThunk(
    "sponsors/fetchSponsors",
    async () => {
        const response = await fetchSponsors();
        return response;
    }
);

export const createSponsorAsync = createAsyncThunk(
    "sponsors/createSponsor",
    async (formData: SponsorFormData) => {
        const response = await createSponsor(formData);
        return response;
    }
);

export const updateSponsorAsync = createAsyncThunk(
    "sponsors/updateSponsor",
    async (payload: SponsorUpdateData) => {
        const response = await updateSponsor(payload);
        return response;
    }
);

export const destroySponsorAsync = createAsyncThunk(
    "sponsors/destroySponsor",
    async (payload: SponsorDeleteData) => {
        const response = await destroySponsor(payload);
        return response;
    }
);

export const sponsorSlice = createSlice({
    name: "sponsors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSponsorsAsync.pending, (state) => {
                state.status = SponsorStatuses.Loading;
            })
            .addCase(fetchSponsorsAsync.fulfilled, (state, action) => {
                state.status = SponsorStatuses.UpToDate;
                state.sponsors = action.payload;
            })
            .addCase(createSponsorAsync.pending, (state) => {
                state.status = SponsorStatuses.Loading;
            })
            .addCase(createSponsorAsync.fulfilled, (state, action) => {
                state.status = SponsorStatuses.UpToDate;
                state.sponsors.push(action.payload);
            })
            .addCase(updateSponsorAsync.pending, (state) => {
                state.status = SponsorStatuses.Loading;
            })
            .addCase(updateSponsorAsync.fulfilled, (state, action) => {
                state.status = SponsorStatuses.UpToDate;
                const sponsor = action.payload;
                const index = state.sponsors.findIndex(
                    (s) => s.id === sponsor.id
                );
                state.sponsors[index] = sponsor;
            })
            .addCase(destroySponsorAsync.pending, (state) => {
                state.status = SponsorStatuses.Loading;
            })
            .addCase(destroySponsorAsync.fulfilled, (state, action) => {
                state.status = SponsorStatuses.Deleted;
                const sponsor = action.payload;
                const index = state.sponsors.findIndex(
                    (s) => s.id === sponsor.id
                );
                state.sponsors.splice(index, 1);
            })
            .addCase(fetchSponsorsAsync.rejected, (state) => {
                state.status = SponsorStatuses.Error;
            });
    },
});

export const {} = sponsorSlice.actions;
export const selectSponsors = (state: RootState) => state.sponsors.sponsors;
export const selectSponsorStatus = (state: RootState) => state.sponsors.status;
export default sponsorSlice.reducer;
