import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    data: [],
    error: false
};

const fileSlice = createSlice({
    name:'file',
    initialState,
    reducers:{
        fileChoose(state,action) {
            state.data.push(action.payload)
        },
        fileChooseFail(state,action) {
            state.error = true
        }
    }
})

export const {
    fileChoose,
    fileChooseFail
} = fileSlice.actions

export default fileSlice.reducer