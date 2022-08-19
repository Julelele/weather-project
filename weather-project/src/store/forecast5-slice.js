import { createSlice } from "@reduxjs/toolkit";

const initialForecast5State = {
  today: []
};

const forecast5Slice = createSlice({
  name: "forecast5",
  initialState: { initialForecastState },
  reducers: {
    
    },
  },
);

export const forecast5Actions = forecast5Slice.actions;

export default forecast5Slice;