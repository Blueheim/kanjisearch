import React from "react";

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div className="">
      <input
        aria-label="Search Kanjis"
        className=""
        type="search"
        placeholder="Search kanjis"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
