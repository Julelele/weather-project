import { configureStore } from "@reduxjs/toolkit";

import currentSlice from "./current-slice";
import favSlice from "./fav-slice";
import forecastSlice from "./forecast-slice";
import contentSlice from "./content-slice";

const store = configureStore({
  reducer: {
    current: currentSlice.reducer,
    favourite: favSlice.reducer,
    forecast: forecastSlice.reducer,
    content: contentSlice.reducer
  },
});

export default store;
