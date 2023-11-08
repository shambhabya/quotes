import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './reducers/quoteReducer';
import bookmarkReducer from './reducers/bookmardReducer';
import tagReducer from './reducers/tagReducer';

const store = configureStore({
  reducer: {
    quotes: quoteReducer,
    bookmarks: bookmarkReducer,
    tags: tagReducer
  },
});

export default store;
