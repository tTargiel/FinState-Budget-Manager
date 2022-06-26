import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import stockService from "./stockService";

const initialState = {
  stocks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new stock
export const createStock = createAsyncThunk(
  "stocks/create",
  async (stockData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await stockService.createStock(stockData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user stocks
export const getStocks = createAsyncThunk(
  "stocks/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await stockService.getStocks(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user stock
export const deleteStock = createAsyncThunk(
  "stocks/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await stockService.deleteStock(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createStock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stocks.push(action.payload);
      })
      .addCase(createStock.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getStocks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStocks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stocks = action.payload;
      })
      .addCase(getStocks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteStock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stocks = state.stocks.filter(
          (stock) => stock._id !== action.payload.id
        );
      })
      .addCase(deleteStock.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = stockSlice.actions;
export default stockSlice.reducer;
