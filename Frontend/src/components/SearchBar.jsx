import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setProducts }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    axios
      .get(`http://localhost:8080/api/products/search?query=${query}`)
      .then((response) => setProducts(response.data));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
