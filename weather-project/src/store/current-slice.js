import { createSlice } from "@reduxjs/toolkit";

const initialCurrentState = {
  cityName: "",
  temp: "",
};

const currentSlice = createSlice({
  name: "current",
  initialState: { initialCurrentState },
  reducers: {
    changeCity(state, action) {
      state.cityName = action.payload.cityName;
      state.temp = action.payload.temp;
      console.log(state.cityName);
    },
  },
});

export const currentActions = currentSlice.actions;

export default currentSlice;
