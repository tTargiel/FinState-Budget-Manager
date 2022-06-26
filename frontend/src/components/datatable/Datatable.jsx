import "./datatable.scss";

import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { userColumns } from "../../datatablesource";

const Datatable = () => {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    async function fetchCryptoList() {
      try {
        const result = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d");
        // console.log(result.data)
        setCryptoList(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCryptoList();
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 144,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/portfolio/new" style={{ textDecoration: "none" }}>
              <button className="addButton">Add to portfolio</button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {cryptoList.length > 0 ? (
        <DataGrid
          className="datagrid"
          rows={cryptoList}
          columns={userColumns.concat(actionColumn)}
          pageSize={25}
          rowsPerPageOptions={[25]}
        />
      ) : (
        <h3>Fetching crypto from API source...</h3>
      )}
    </div>
  );
};

export default Datatable;
