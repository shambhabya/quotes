// quoteReducer.js
import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: [],
  reducers: {
    setQuotes: (state, action) => action.payload,
    // Other quote-related actions
  },
});

export const { setQuotes } = quoteSlice.actions;
export default quoteSlice.reducer;
