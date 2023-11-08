import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotes } from '../../reducers/quoteReducer'; 
import { addBookmark } from '../../reducers/bookmarkReducer';
import axios from 'axios';
import Dropdown from '../dropdown/Dropdown';
import Quote from '../quote/Quote';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator'; 
import "./quoteList.css";

const QuoteList = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);
  const [loading, setLoading] = useState(true); 

  const fetchQuotes = async () => {
    setLoading(true); 
    try {
      const response = await axios.get('https://api.quotable.io/quotes/random');
      dispatch(setQuotes(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };

  const handleAddBookmark = (quote) => {
    dispatch(addBookmark(quote));
  };

  useEffect(() => {
    fetchQuotes(); 
  }, []);

  return (
    <div className="container">
      {loading ? ( 
        <LoadingIndicator />
      ) : (
        quotes.map((quote) => (
          <Quote key={quote._id} quote={quote} handle={handleAddBookmark} />
        ))
      )}

      <div className='dropdown'><Dropdown /></div>

      <button className="btn" onClick={fetchQuotes}>Next Quote</button>
    </div>
  );
};

export default QuoteList;
