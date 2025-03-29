function SearchBar({ onSearch }) {
    const handleSearch = () => {
      const city = document.getElementById("cityInput").value;
      if (city) onSearch(city);
    };
  
    return (
      <div className="search-container">
        <input id="cityInput" type="text" placeholder="Enter city name..." />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  }
  
  export default SearchBar;
  