import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async () => {
    const response = await axios.get("http://localhost:8000/api/games/");
    return response.data;
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.games = action.payload;
      });
  },
});

export default gamesSlice.reducer;
