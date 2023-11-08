import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTags } from '../../reducers/tagReducer';
import { setQuotes } from '../../reducers/quoteReducer';
import "./dropdown.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./dropdown.css"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const options = useSelector((state) => state.tags);
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  useEffect(() => {
    const closeDropdownOnOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

 
    document.addEventListener('click', closeDropdownOnOutsideClick);

   
    return () => {
      document.removeEventListener('click', closeDropdownOnOutsideClick);
    };
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axios.get('https://api.quotable.io/tags');
        console.log(res.data);
        dispatch(setTags(res.data));
      } catch (error) {
        console.log('Error fetching quote with ', error);
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
    <div className="scrollable-dropdown" ref={dropdownRef}>
      <button className="butn" onClick={toggleDropdown}>Dropdown <ArrowDropDownIcon className='arrow'/></button>
      {isOpen && ( 
        <ul className="options">
          {options.map((option) => (
            <li className="" key={option._id} onClick={() => handleTagSelect(option.name)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
