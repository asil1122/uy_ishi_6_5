import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task-slice";
import { loadState, saveState } from "../config/storage";

export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
    preloadedState:{
        task: loadState('task')
    }
})

store.subscribe(() => {
    saveState('task', store.getState().task)
})