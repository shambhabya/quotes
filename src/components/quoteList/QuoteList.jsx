import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotes } from '../../reducers/quoteReducer'; 
import { addBookmark } from '../../reducers/bookmardReducer';
import axios from 'axios';
import Dropdown from '../dropdown/Dropdown';
import Quote from '../quote/Quote';
import "./quoteList.css";

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
    <div className="container">
      {quotes.map((quote) => (
        <Quote key={quote._id} quote={quote} handle={handleAddBookmark} />
      ))}

      <div className='dropdown'><Dropdown /></div>

      <button className="btn" onClick={fetchQuotes}>Next Quote</button>
    </div>
  );
};

export default QuoteList;
