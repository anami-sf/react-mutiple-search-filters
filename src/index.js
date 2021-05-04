import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SingleSearchFilter from './single-search-filter';
import MultipleSearchFilters from './MultipleSearchFilters';
// import FilterByName from './FilterByName'

ReactDOM.render(
  <React.StrictMode>
    {/* <SingleSearchFilter /> */}
    <MultipleSearchFilters />
    {/* <FilterByName /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
