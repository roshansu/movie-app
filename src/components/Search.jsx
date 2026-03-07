import React from "react";
import { useEffect, useState } from "react";
import useDebounce from "../customhook/useDebounce";

const Search = ({ setSearchText }) => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  useEffect(() => {
    // if (!debouncedSearch) return;

    setSearchText(debouncedSearch);
    console.log(debouncedSearch);
  }, [debouncedSearch]);

  return (
<div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">

  <span className="mr-2 text-gray-400">🔍</span>

  <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 outline-none bg-transparent"
    placeholder="Search for movies..."
  />

  {search && (
    <button
      onClick={() => {
        setSearchText("");
        setSearch("");
      }}
      className="ml-2 text-gray-400 hover:text-red-500"
    >
      ✕
    </button>
  )}
</div>
  );
};

export default Search;
