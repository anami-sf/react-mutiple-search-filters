import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SingleSearchFilter from './single-search-filter';
import MultipleSearchFilters from './MultipleSearchFilters';

ReactDOM.render(
  <React.StrictMode>
    {/* <SingleSearchFilter /> */}
    <MultipleSearchFilters />
  </React.StrictMode>,
  document.getElementById('root')
);
