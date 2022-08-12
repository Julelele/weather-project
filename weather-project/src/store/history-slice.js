import { createSlice } from "@reduxjs/toolkit";

const initialHistoryState = {

};

const historySlice = createSlice({
  name: "history",
  initialState: { initialHistoryState },
  reducers: {

  },
});

export const historyActions = historySlice.actions;

export default historySlice;