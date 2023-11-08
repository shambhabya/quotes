import React from 'react';
import "./Quote.css";
import { useLocation } from 'react-router-dom';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

const Quote = ({ quote, handle }) => {
    const location = useLocation();

    return (
        <div key={quote._id} className="quote-container">
            <p className="quote-text">{quote.content}</p>
            <div className="author-container">
                <span className="author-text">-{quote.author}</span>
                <div className='Bookmark'>
                    {location.pathname === '/bookmarks' ? ( 
                        <BookmarkRemoveIcon  onClick={() => handle(quote)}/>
                    ) : (
                        <BookmarkAddIcon onClick={() => handle(quote)} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quote;
