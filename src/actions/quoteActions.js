// quoteActions.js
import { setQuotes } from '../reducers/quoteReducer';

export const fetchQuotes = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.quotable.io/quotes');
    const data = await response.json();
    dispatch(setQuotes(data.results));
  } catch (error) {
    // Handle errors
  }
};
