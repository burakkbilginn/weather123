import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    dateselected: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setDateselected: (state, action) => {
            state.dateselected = action.payload
        }
    }
})

export const { setDateselected } = navSlice.actions

// how to grab data from store - SELECTORS
export const selectDateselected = (state) => state.nav.dateselected

export default navSlice.reducer