import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotes } from '../reducers/quoteReducer'; // Import the setQuotes action
import { addToBookmarks } from '../actions/bookmarkActions';
import axios from 'axios';

const QuoteList = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/quotes/random');
      
      console.log(response.data);
      dispatch(setQuotes(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBookmark = (quote) => {
    dispatch(addToBookmarks(quote));
  };

  return (
    <div>
      <button onClick={fetchQuotes}>Fetch Quote</button>
      {quotes.map((quote) => (
        <div key={quote._id}>
          <p>{quote.content}</p>
          <button onClick={() => handleAddBookmark(quote)}>Add to Bookmarks</button>
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
