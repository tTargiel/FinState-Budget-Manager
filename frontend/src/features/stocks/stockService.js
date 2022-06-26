import axios from "axios";

const API_URL = "/api/stocks/";

// Create new stock
const createStock = async (stockData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, stockData, config);

  return response.data;
};

// Get user stocks
const getStocks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user stock
const deleteStock = async (stockId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + stockId, config);

  return response.data;
};

const stockService = {
  createStock,
  getStocks,
  deleteStock,
};

export default stockService;
