import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBookmark, removeBookmark } from '../reducers/bookmardReducer'; // Import your reducer or action creators

const BookmarkList = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);

  const handleAddBookmark = (quote) => {
    dispatch(addBookmark(quote));
  };

  const handleRemoveBookmark = (quote) => {
    dispatch(removeBookmark(quote));
  };

  return (
    <div>
      <h2>Bookmarks</h2>
      {bookmarks.map((quote) => (
        <div key={quote._id}>
          <p>{quote.content}</p>
          <button onClick={() => handleRemoveBookmark(quote)}>Remove from Bookmarks</button>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
