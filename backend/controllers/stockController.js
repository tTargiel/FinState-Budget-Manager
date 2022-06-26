const asyncHandler = require("express-async-handler");

const Stock = require("../models/stockModel");

// @desc    Get stocks
// @route   GET /api/stocks
// @access  Private
const getStocks = asyncHandler(async (req, res) => {
  const stocks = await Stock.find({ user: req.user.id });

  res.status(200).json(stocks);
});

// @desc    Set stock
// @route   POST /api/stocks
// @access  Private
const setStock = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.symbol || !req.body.price || !req.body.count || !req.body.date) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const stock = await Stock.create({
    name: req.body.name,
    symbol: req.body.symbol,
    price: req.body.price,
    count: req.body.count,
    date: req.body.date,
    user: req.user.id,
  });

  res.status(200).json(stock);
});

// @desc    Update stock
// @route   PUT /api/stocks/:id
// @access  Private
const updateStock = asyncHandler(async (req, res) => {
  const stock = await Stock.findById(req.params.id);

  if (!stock) {
    res.status(400);
    throw new Error("Stock not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the stock user
  if (stock.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedStock);
});

// @desc    Delete stock
// @route   DELETE /api/stocks/:id
// @access  Private
const deleteStock = asyncHandler(async (req, res) => {
  const stock = await Stock.findById(req.params.id);

  if (!stock) {
    res.status(400);
    throw new Error("Stock not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the stock user
  if (stock.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await stock.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getStocks,
  setStock,
  updateStock,
  deleteStock,
};
