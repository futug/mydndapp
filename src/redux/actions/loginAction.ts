import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { loginStart, loginFail, loginSuccess } from "../slices/loginSlice";
import axios from "axios";
import { AnyAction } from "redux";
import { ROOT_API_URL } from "../../utilities/consts/constants";

export interface User {
    email: string;
    password: string;
}

export interface LoginResponce {
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

export const loginUser = (userData: User) => async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    try {
        dispatch(loginStart());
        const response = await axios.post<LoginResponce>(`${ROOT_API_URL}/login`, userData);
        dispatch(loginSuccess(response.data));
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(loginFail(error.message));
        } else {
            dispatch(loginFail("An unexpected error occurred."));
        }
    }
};
