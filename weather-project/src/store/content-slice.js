import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
  name: 'content',
  initialState: { contentIsVisible: false},
  reducers: {
    visible(state, action) {
      state.contentIsVisible = action.payload.cartIsVisible;
    }
  },
});

export const contentActions = contentSlice.actions;

export default contentSlice;