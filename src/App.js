import React from "react";
import SearchBar from "./components/SearchBar";
import data from "./Data/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar data={data} />
    </div>
  );
}

export default App;
