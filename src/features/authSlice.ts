import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/UserType";

const initialState: UserType = {
    displayName: '',
    uid: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.uid = action.payload;
        },
        logout: (state) => {
            state.uid = '';
            state.displayName = '';
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;