import { createSlice } from "@reduxjs/toolkit";

const initialForecastState = {

};

const forecastSlice = createSlice({
  name: "forecast",
  initialState: { initialForecastState },
  reducers: {

  },
});

export const forecastActions = forecastSlice.actions;

export default forecastSlice;