import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Nombre del Usuario",
    avatar: "/defaultUser.jpg",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser(state, action) {
            const { name, avatar } = action.payload;
            state.name = name ?? state.name;
            state.avatar = avatar ?? state.avatar;
        },
    },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
