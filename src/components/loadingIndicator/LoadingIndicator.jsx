import React from 'react';
import './LoadingIndicator.css'; // Create a CSS file for styling

const LoadingIndicator = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingIndicator;
