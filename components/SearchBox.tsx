import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

interface SearchBoxProps {
  onSearchByGenreAndYear: (searchText: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  onSearchByGenreAndYear,
}: SearchBoxProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchByGenreAndYear(searchText);
    }
  };

  return (
    <div className="relative max-w-md mx-auto mb-5">
      <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          value={searchText}
          className="block w-full pl-10 pr-10 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Search for a movie or tv show..."
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="absolute inset-y-0 right-0 px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none"
          onClick={() => onSearchByGenreAndYear(searchText)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
