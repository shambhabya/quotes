import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import QuoteList from './components/QuoteList';
import BookmarkList from './components/BookmarkList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Quotes</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<QuoteList />} />
        <Route path="/bookmarks" element={<BookmarkList />} />
      </Routes>
    </div>
  );
};

export default App;
