import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favourite",
  initialState: { favList: ["Bamberg", "Erlangen", "Nuremberg"] },
  reducers: {
    addFav(state, action) {
      const newFav = action.payload.favCity;
      const existingCity = state.favList.find((city) => city === newFav);
      if (!existingCity) {
        state.favList.push(newFav);
      }
    },
    removeFav(state, action) {
      const removeCity = action.payload.favCity;
      const indexCity = state.favList.indexOf(removeCity);
      if (indexCity !== -1) {
        const newFavList = state.favList.filter(function (f) {
          return f !== state.favList[indexCity];
        });
        state.favList = newFavList;
      }
    },
  },
});

export const favActions = favSlice.actions;

export default favSlice;
