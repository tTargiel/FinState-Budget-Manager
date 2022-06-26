import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { createStock } from "../../features/stocks/stockSlice";

function StockForm({ data }) {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createStock({ name, symbol, price, count, date }));
    setName("");
    setSymbol("");
    setPrice("");
    setCount("");
    setDate("");
  };

  return (
    <>
      {/* <form onSubmit={onSubmit}> */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <div>
          <TextField
            required
            id="name"
            label="Name"
            defaultValue="Ethereum"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="symbol"
            label="Symbol"
            defaultValue="ETH"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
          <TextField
            required
            id="price"
            label="Price"
            defaultValue="1136"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            required
            id="count"
            label="Count"
            type="number"
            defaultValue="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <TextField
            required
            id="date"
            label="Date of buy"
            type="date"
            value={date}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className='btn btn-block' type='submit'>
        Add Stock
        </button>
      </Box>
      {/* <div className='formInput'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder={data[0].placeholder}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Symbol</label>
          <input
            type='text'
            name='symbol'
            id='symbol'
            value={symbol}
            placeholder={data[1].placeholder}
            onChange={(e) => setSymbol(e.target.value)}
          />
          <label>Price</label>
          <input
            type='text'
            name='price'
            id='price'
            value={price}
            placeholder={data[2].placeholder}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Count</label>
          <input
            type='text'
            name='count'
            id='count'
            value={count}
            placeholder={data[3].placeholder}
            onChange={(e) => setCount(e.target.value)}
          />
          <label>Date</label>
          <input
            type='date'
            name='date'
            id='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div> */}
      {/* </form> */}

    </>
  );
}

export default StockForm;
