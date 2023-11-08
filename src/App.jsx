import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import QuoteList from './components/quoteList/QuoteList';
import BookmarkList from './components/bookmarkList/BookmarkList';
import './App.css';

const App = () => {

  const location = useLocation();

  return (
    <div className="App">
      <nav>
            <Link className={`link ${location.pathname === '/' ? 'bold-link' : ''}`} to="/">Quotes</Link>
          
            <Link className={`link ${location.pathname === '/bookmarks' ? 'bold-link' : ''}`} to="/bookmarks">Bookmarks</Link>
          
      </nav>

      <Routes>
        <Route path="/" element={<QuoteList />} />
        <Route path="/bookmarks" element={<BookmarkList />} />
      </Routes>
    </div>
  );
};

export default App;
