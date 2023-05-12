import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    SidebarOpen: true,
    category: "trending"

}


export const GlobalState = createSlice({
    name: 'global',
    initialState,
    reducers: {
        SidebarOpenClose: (state) => {
            state.SidebarOpen = !state.SidebarOpen;
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
    }
   
})




export const { SidebarOpenClose, setCategory } = GlobalState.actions

export default GlobalState.reducer