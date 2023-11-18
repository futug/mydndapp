import { createSlice } from "@reduxjs/toolkit";
import { LoginResponce } from "../actions/loginAction";

export interface Initial {
    user: LoginResponce["data"] | null;
    loading: boolean;
    error: null;
    hasAuth: boolean;
}

const initialState = {
    user: null,
    loading: false,
    error: null,
    hasAuth: localStorage.getItem("hasAuth") === "false",
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
        },
        loginSuccess(state, action) {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
            state.hasAuth = true;
            localStorage.setItem("hasAuth", "true");
        },
        loginFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { loginStart, loginSuccess, loginFail } = loginSlice.actions;
export default loginSlice.reducer;
