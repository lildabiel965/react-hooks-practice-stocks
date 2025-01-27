import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onStockClick }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(Stock => (
        <Stock key={Stock.id} Stock={Stock} onStockClick={onStockClick}/>
      ))}
    </div>
  );
}

export default PortfolioContainer;
