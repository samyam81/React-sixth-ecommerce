import React, { useState, useEffect } from "react";

import "./Styles.css";

const BASE_URL = "https://fakestoreapi.com/products";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    searchItem("SunCream");
  }, []);

  const searchItem = async (title) => {
    try {
      const response = await fetch(`${BASE_URL}?title_like=${title}`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items: ", error);
      setItems([]);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    searchItem(searchTerm);
  };

  return (
    <div className="application">
      <h1>Shop-Mandu</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for Item"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="item-list">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.title}</h3>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "200px" }}
                />
              )}
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default App;
