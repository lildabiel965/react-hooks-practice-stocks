import React from "react";

function Stock({ stock, onStockClick }) {
  return (
    <div onClick={() => onStockClick(stock)} className="card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{"Compant Name"}</h5>
          <p className="card-text">${"Stock Price"}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
