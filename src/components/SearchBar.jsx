import React from 'react';
import { useState } from 'react';


function SearchBar({ handleSearch }) {
  const [searchCriteria, setSearchCriteria] = useState({
    gamertag: '',
    console: '',
    region: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchCriteria);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search by Gamertag"
        name="gamertag"
        value={searchCriteria.gamertag}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Search by Console"
        name="console"
        value={searchCriteria.console}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Search by Region"
        name="region"
        value={searchCriteria.region}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
export default SearchBar