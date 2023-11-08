// src/api/quotableAPI.js
import axios from 'axios';

const BASE_URL = 'https://api.quotable.io';

export const fetchRandomQuote = async () => {
  const response = await axios.get(`${BASE_URL}/quotes/random`);
  return response.data;
};

export const fetchTags = async () => {
  const response = await axios.get(`${BASE_URL}/tags`);
  return response.data;
};

// Implement similar functions for fetching quotes by tag.
