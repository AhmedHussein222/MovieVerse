import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../Instance/instance";

export const moviesAction = createAsyncThunk("movies/getAll", async (pageNumber) => {
  let res = await instance.get(`top_rated?api_key=bf85c6cd8c2021f4fe2f6fdae05710eb&page=${pageNumber}`);
  
  return res.data.results;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [] }, // Initial state as an object with movies array

  extraReducers: (builder) => {
    builder
    .addCase(moviesAction.pending, () => {
        console.log("pending");
      })
      .addCase(moviesAction.fulfilled, (state, action) => {
        state.movies = action.payload; // Directly setting the state to the payload
      })

      
      .addCase(moviesAction.rejected, (err) => {
        console.log(err);
      });
  },
});
export default movieSlice.reducer;
