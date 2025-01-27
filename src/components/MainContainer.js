import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortOption, setSortOption] = useState("Alphabetically");
  const [filterOption, setFilterOption] = useState("All");

  const handleStockClick = (stock) => {
    if (portfolio.includes(stock)) {
      setPortfolio(portfolio.filter(s => s.id !== stock.id)); 
    } else {
      setPortfolio([...portfolio, stock]); 
    }
  };
    
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };
    
  const filteredStocks = stocks.filter(stock => {
    if (filterOption === "All") return true;
    return stock.type === filterOption;
  });
    
  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortOption === "Alphabetically") {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });
  
  return (
    <div>
      <SearchBar 
        sortOption={sortOption} 
        onSortChange={handleSortChange} 
        filterOption={filterOption} 
        onFilterChange={handleFilterChange} 
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} onStockClick={handleStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onStockClick={handleStockClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
