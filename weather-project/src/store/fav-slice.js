import { createSlice } from "@reduxjs/toolkit";

const initialFavState = {
  favList: []
};

const favSlice = createSlice({
  name: "favourite",
  initialState: { initialFavState },
  reducers: {
    addFav() {},
    removeFav() {}
  },
});

export const favActions = favSlice.actions;

export default favSlice;