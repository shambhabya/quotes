import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the BrowserRouter
import App from './App';
import store from './store';
import './index.css';
import { createRoot } from 'react-dom/client';


// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>);

