//registerSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { Responce } from "../actions/registerAction";

export interface Initial {
    user: Responce["data"] | null;
    loading: boolean;
    error: null;
}

const initialState: Initial = {
    user: null,
    loading: false,
    error: null,
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerStart(state) {
            state.loading = true;
        },
        registerSuccess(state, action) {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        registerFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { registerStart, registerSuccess, registerFail } = registerSlice.actions;
export default registerSlice.reducer;
