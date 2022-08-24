import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favourite",
  initialState: { favList: ["Bamberg", "Nuremberg", "Erlangen"] },
  reducers: {
    addFav(state, action) {
      state.favList.push(action.payload.favCity);
    },
    removeFav(state, action) {
      state.favList = action.payload.newFavList;
    },
  },
});

export const favActions = favSlice.actions;

export default favSlice;
