import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setTags } from '../reducers/tagReducer';
import { setQuotes } from '../reducers/quoteReducer';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State variable to control dropdown visibility
  const dispatch = useDispatch();
  const options = useSelector((state) => state.tags);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown's open/closed state
  };


  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axios.get('https://api.quotable.io/tags');
        console.log(res.data);
        dispatch(setTags(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags(); 
  }, [dispatch]);
  

  const handleTagSelect = async (selectedTag) => {
    try {
      const response = await axios.get(`https://api.quotable.io/quotes/random?tags=${selectedTag}`);
      
      console.log(response.data);
      dispatch(setQuotes(response.data));

    } catch (error) {
      console.error('Error fetching quote with selected tag:', error);
    }
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Dropdown</button>
      {isOpen && ( 
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option._id} onClick={() => handleTagSelect(option.name)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
