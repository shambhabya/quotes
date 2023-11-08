import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './reducers/quoteReducer';
import bookmarkReducer from './reducers/bookmardReducer';

const store = configureStore({
  reducer: {
    quotes: quoteReducer,
    bookmarks: bookmarkReducer,
  },
});

export default store;
