// store.js
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import registerReducer, { Initial as RegisterInitialState } from "../slices/registerSlice";
import loginReducer, { Initial as LoginInitialState } from "../slices/loginSlice";

export type RootState = {
    register: RegisterInitialState;
    login: LoginInitialState;
};
const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
    },
    middleware: [thunk],
});

export default store;
