import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        decrease: state => {state.value -= 1},
        increase: state => {state.value += 1}
    }
})

export const selectCount = state => state.counter.value;
export const {decrease, increase} = counterSlice.actions;
export default counterSlice.reducer;