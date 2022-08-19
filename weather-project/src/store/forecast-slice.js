import { createSlice } from "@reduxjs/toolkit";

const initialForecastState = {
  cityName: "",
  cityCountry: "",
  forecastDays: "",
  list: [],
  timezone: "",
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState: { initialForecastState },
  reducers: {
    forecastWeather(state, action) {
      state.cityName = action.payload.cityName;
      state.cityCountry = action.payload.cityCountry;
      state.forecastDays = action.payload.forecastDays;
      state.list = action.payload.list;
      state.timezone = action.payload.timezone;
    },
    counter(state) {
      state.counter++;
    }
  },
});

export const forecastActions = forecastSlice.actions;

export default forecastSlice;
