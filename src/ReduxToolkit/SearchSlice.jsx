import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    search_results:[]
}

export const fetchSearch = createAsyncThunk(
    "search_results/fetchSearch",
    async (keyword) => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=512527e45f78c9fe542face1e16e9ad9&query=${keyword}`);
        console.log(res.data.results)
        return res.data.results;
    }
)

const searchSlice = createSlice({
    name: "search_results",
    initialState,
    extraReducers: {
        [fetchSearch.pending]: () => {
            //console.log("search pending")
        },
        [fetchSearch.fulfilled]: (state, {payload}) => {
            //console.log("search fulfilled")
            return {...state, search_results:payload}
        },
        [fetchSearch.rejected]: () => {
            console.log("search rejectec")
        }
    }
})

export default searchSlice.reducer