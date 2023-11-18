// authActions.ts
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";

import { registerStart, registerFail, registerSuccess } from "../slices/registerSlice";
import axios from "axios";
import { AnyAction } from "redux";
import { ROOT_API_URL } from "../../utilities/consts/constants";

export interface User {
    username: string;
    email: string;
    password: string;
}

export interface Responce {
    data: {
        accessToken: string;
        refreshToken: string;
        user: {
            email: string;
            hasActivated: boolean;
            id: string;
        };
    };
}

export const registerUser = (userData: User) => async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    try {
        dispatch(registerStart());
        const response = await axios.post<Responce>(`${ROOT_API_URL}/register`, userData);
        dispatch(registerSuccess(response.data));
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(registerFail(error.message));
        } else {
            dispatch(registerFail("An unexpected error occurred."));
        }
    }
};
