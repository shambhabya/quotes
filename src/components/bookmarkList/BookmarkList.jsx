import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookmark } from '../../reducers/bookmarkReducer';
import Quote from "../quote/Quote"

const BookmarkList = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);


  const handleRemoveBookmark = (quote) => {
    dispatch(removeBookmark(quote));
  };

  return (
    <div>
      {bookmarks.map((quote) => (
        <Quote key={quote._id} quote={quote} handle={handleRemoveBookmark} />
      ))}
    </div>
  );
};

export default BookmarkList;
