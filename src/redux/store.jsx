import { configureStore } from "@reduxjs/toolkit";
import  GlobalStateReducer  from "./feature/GlobalState";


export const store = configureStore({
    reducer: {
        GlobalState: GlobalStateReducer
    }
})