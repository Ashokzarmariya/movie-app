import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageNo:1,
}


const pageSlice = createSlice({
    name: "pageNo",
    initialState,
    reducers : {
        setPage: (state, { payload }) => {
            state.pageNo = payload;
        }
    }  

})

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer 