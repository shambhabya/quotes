import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotes } from '../reducers/quoteReducer'; 
import { setTags } from '../reducers/tagReducer';
import { addBookmark } from '../reducers/bookmardReducer';
import axios from 'axios';
import Dropdown from './Dropdown';

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
    dispatch(addBookmark(quote));
  };

  useEffect(() => {
    fetchQuotes(); // Call fetchQuotes within the useEffect function
  }, []);
  

  
  
  return (
    <>
    
      {quotes.map((quote) => (
        <div key={quote._id}>
            <p>{quote.content}</p>
            <button onClick={() => handleAddBookmark(quote)}>Add to Bookmarks</button>
        </div>
        ))}

    <Dropdown />

    <button onClick={fetchQuotes}>Fetch Quote</button>
  </>
  );
};

export default QuoteList;
