import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div className="flexbox">
      <div className="search">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
        <form onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}>
          <input
            type="text"
            placeholder="Ciudad..."
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <i class="fa fa-search"></i>

        </form>
      </div>
    </div>
  );
}
