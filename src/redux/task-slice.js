import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    count: 0,
};

const taskReducer = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            return {...state, user: [...state.user, action.payload]}
        },
        removeTask: (state, action) => {
            return {...state, user: state.user.filter(item => item.id !== action.payload)}
        },
        editTask: (state, action) => {
            return {...state, user: state.user.map(item => item.id === action.payload.id ? action.payload : item)}
        }
    },
});

export default taskReducer.reducer;
export const { addTask, removeTask, editTask } = taskReducer.actions