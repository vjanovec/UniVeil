import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Post = {
    title: string,
    text: string
}
type stateType = Post[];

const initialState: stateType = []

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postSubmit: (state, action: PayloadAction<Post>) => {
            state.push(action.payload)
        }
    }
})

export const { postSubmit } = postsSlice.actions;
export default postsSlice.reducer;