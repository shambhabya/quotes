import React from 'react';
import QuoteList from './components/QuoteList';
import BookmarkList from './components/BookmarkList';

function App() {
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <QuoteList />
      <BookmarkList />
    </div>
  );
}

export default App;
