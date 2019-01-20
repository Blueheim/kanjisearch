import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="">
      <input aria-label="Search Kanjis" className="" type="search" placeholder="Search kanjis" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
