// bookmarkActions.js
import { addBookmark, removeBookmark } from '../reducers/bookmardReducer';

export const addToBookmarks = (quote) => (dispatch) => {
  dispatch(addBookmark(quote));
};

export const removeFromBookmarks = (quote) => (dispatch) => {
  dispatch(removeBookmark(quote));
};
