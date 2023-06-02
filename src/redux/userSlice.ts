import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/UserType";

const initialState: UserType = {
    displayName: '',
    uid: ''
}

export const userSlice = createSlice({
    name: 'user',
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

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;