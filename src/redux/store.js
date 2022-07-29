import { configureStore } from "@reduxjs/toolkit";

import fileReducer from '../redux/fileSlice'


export default configureStore({
    reducer:{
        file: fileReducer
    }
})