// quoteReducer.js
import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: [],
  reducers: {
    setQuotes: (state, action) => action.payload,
  },
});

export const { setQuotes } = quoteSlice.actions;
export default quoteSlice.reducer;
