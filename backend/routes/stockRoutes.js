const express = require("express");
const router = express.Router();

const {
  getStocks,
  setStock,
  updateStock,
  deleteStock,
} = require("../controllers/stockController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getStocks).post(protect, setStock);
router.route("/:id").delete(protect, deleteStock).put(protect, updateStock);

module.exports = router;
