import React from 'react';
import ReactDOM from 'react-dom';
import TransactionApp from './TransactionApp'; // Import the TransactionApp component

ReactDOM.render(
  <React.StrictMode>
    <TransactionApp /> {/* Render the TransactionApp component */}
  </React.StrictMode>,
  document.getElementById('root')
);
