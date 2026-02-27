import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* =========================
   THUNK (PETICIÓN AL BACKEND)
========================= */

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async () => {

    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:8000/api/games/",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data;
  }
);


/* =========================
   SLICE
========================= */

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export default gamesSlice.reducer;