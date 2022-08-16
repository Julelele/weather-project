import { createSlice } from "@reduxjs/toolkit";

const initialCurrentState = {
  cityName: "",
  temp: "",
  maxTemp: "",
  minTemp: "",
};

const currentSlice = createSlice({
  name: "current",
  initialState: { initialCurrentState },
  reducers: {
    changeCity(state, action) {
      state.cityName = action.payload.cityName;
      state.temp = action.payload.temp;
      state.maxTemp = action.payload.maxTemp;
      state.minTemp = action.payload.minTemp;
    },
  },
});

export const currentActions = currentSlice.actions;

export default currentSlice;
