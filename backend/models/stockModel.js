const mongoose = require("mongoose");

const stockSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please fill in name value"],
    },
    symbol: {
      type: String,
      required: [true, "Please fill in symbol value"],
    },
    price: {
      type: String,
      required: [true, "Please fill in price value"],
    },
    count: {
      type: String,
      required: [true, "Please fill in count value"],
    },
    date: {
      type: String,
      required: [true, "Please fill in date value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", stockSchema);
