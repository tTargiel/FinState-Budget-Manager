export const userColumns = [
  { field: "market_cap_rank", headerName: "#", width: 32 },
  {
    field: "coin",
    headerName: "Coin",
    width: 224,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt={params.row.id} />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "symbol",
    headerName: "Symbol",
    width: 96,
    renderCell: (params) => {
      return (
        <div>
          {params.row.symbol.toUpperCase()}
        </div>
      );
    },
  },
  {
    field: "current_price",
    headerName: "Price",
    width: 128,
    renderCell: (params) => {
      return (
        <div>
                    ${params.row.current_price.toLocaleString("en-US")}
        </div>
      );
    },
  },
  {
    field: "price_change_percentage_24h_in_currency",
    headerName: "24h",
    width: 96,
    renderCell: (params) => {
      return (
        <div className={params.row.price_change_percentage_24h_in_currency < 0 ? "negative" : "positive"}>
          {params.row.price_change_percentage_24h_in_currency.toFixed(2)}%
        </div>
      );
    },
  },
  {
    field: "price_change_percentage_7d_in_currency",
    headerName: "7d",
    width: 96,
    renderCell: (params) => {
      return (
        <div className={params.row.price_change_percentage_7d_in_currency < 0 ? "negative" : "positive"}>
          {params.row.price_change_percentage_7d_in_currency.toFixed(2)}%
        </div>
      );
    },
  },
  {
    field: "market_cap",
    headerName: "Market Capitalization",
    width: 192,
    renderCell: (params) => {
      return (
        <div>
                    ${params.row.market_cap.toLocaleString("en-US")}
        </div>
      );
    },
  },
];
