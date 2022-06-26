import React from "react";
import { useDispatch } from "react-redux";

import { deleteStock } from "../../features/stocks/stockSlice";

function StockItem({ stock }) {
  const dispatch = useDispatch();

  return (
    <tr key={stock.symbol} className="stock-item">
      <td className="name">{stock.name}</td>
      <td className="symbol">{stock.symbol.toUpperCase()}</td>
      <td className="price">${stock.price.toLocaleString("en-US")}</td>
      <td className="count">{stock.count}</td>
      <td className="date">{stock.date.toLocaleString("en-US")}</td>
      <td className="action"><button onClick={() => dispatch(deleteStock(stock._id))} className='close'>
        X
      </button></td>
    </tr>
  );
}

export default StockItem;
