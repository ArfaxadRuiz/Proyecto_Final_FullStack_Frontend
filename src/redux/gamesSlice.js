import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ownedGames: [],     // juegos que el usuario tiene
  wishlist: []        // juegos deseados
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    addOwnedGame: (state, action) => {
      state.ownedGames.push(action.payload);
    },
    removeOwnedGame: (state, action) => {
      state.ownedGames = state.ownedGames.filter(
        game => game.id !== action.payload
      );
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        game => game.id !== action.payload
      );
    }
  }
});

export const {
  addOwnedGame,
  removeOwnedGame,
  addToWishlist,
  removeFromWishlist
} = gamesSlice.actions;

export default gamesSlice.reducer;