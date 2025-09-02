
import React from 'react';
import { SearchIcon } from './icons';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="O que você está procurando?"
        className="w-full py-3 pl-5 pr-12 text-sm text-gray-800 bg-gray-100 border border-transparent rounded-full
                   transition-all duration-300 ease-in-out
                   focus:outline-none focus:ring-2 focus:ring-[#ff0070] focus:bg-white
                   focus:shadow-inner"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button className="p-2 text-gray-400 rounded-full hover:bg-[#ff0070] hover:text-white transition-colors">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;