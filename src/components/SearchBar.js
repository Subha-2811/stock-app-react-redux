import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectWishList } from "../features/userSlice";
import Card from "./Card";
import "./SearchBar.css";
import WishList from "./WishList";

const SearchBar = ({ data }) => {
  let [searchInput, setSearchInput] = useState("");
  let [suggestions, setSuggestions] = useState([]);
  let wishList = useSelector(selectWishList);

  // Handling any change in Search Bar
  const handleSearchData = (e) => {
    let value = e.target.value;
    setSearchInput(value);

    // FILTERING DATA FOR SUGGESTION BASED ON THE SEARCH INPUT
    let filteredStocks = [];
    if (value.length > 0) {
      filteredStocks = data.filter((stock) =>
        stock[0].toLowerCase().includes(value.toLowerCase())
      );
    }
    setSuggestions(filteredStocks);
  };

  // Rendering List For Suggestions
  const renderList = (stock, key) => {
    // Checking if the Stock is present in wishlist
    let present = wishList.includes(stock);
    return <Card stock={stock} key={key} present={present} />;
  };

  return (
    <div>
      <div className="search-input">
        <input
          className="search-bar"
          value={searchInput}
          placeholder="Search stocks..."
          onChange={handleSearchData}
        />
        <ul className="suggestion-list">
          {suggestions.map((stock) => {
            return renderList(stock);
          })}
        </ul>
      </div>
      {/* If SearchField is present then only suggestions are displayed and wishlist is hidden */}
      {searchInput.length === 0 && <WishList />}
    </div>
  );
};

export default SearchBar;
