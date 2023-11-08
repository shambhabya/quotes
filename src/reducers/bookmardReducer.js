// bookmarkReducer.js
import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const newQuote = action.payload;
      // Check if the quote with the same _id is already in the state
      const isDuplicate = state.some((quote) => quote._id === newQuote._id);
      
      if (!isDuplicate) {
        state.push(newQuote);
      }
    },
    removeBookmark: (state, action) => {
      return state.filter((quote) => quote._id !== action.payload.id);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
