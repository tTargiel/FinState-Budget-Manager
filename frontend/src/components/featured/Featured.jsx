import "./featured.scss";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const Featured = () => {
  const value1 = 13.2;
  const value2 = 12.4;
  const value3 = 14.1;

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>

      </div>
      <div className="bottom">
        <div className="featuredChart">
          <Box sx={{ position: "relative" }}>
            <CircularProgress variant="determinate" sx={{ color: "lightgray", }} size={160} value={100} />
            <CircularProgress variant="determinate" size={160} sx={{ color: "dodgerblue", position: "absolute", left: 0, }} value={70} />
          </Box>
          <span className="percent">70%</span>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="description">Previous transactions processing. Last payments may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              {(value1 >= 0) ? <div className="positive"><KeyboardArrowUpRoundedIcon />${value1}</div> : <div className="negative"><KeyboardArrowDownRoundedIcon />${value1}</div>}
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult">
              {(value2 >= value3) ? <div className="positive"><KeyboardArrowUpRoundedIcon />${value2}</div> : <div className="negative"><KeyboardArrowDownRoundedIcon />${value2}</div>}
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult">
              {(value3 >= value1) ? <div className="positive"><KeyboardArrowUpRoundedIcon />${value3}</div> : <div className="negative"><KeyboardArrowDownRoundedIcon />${value3}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
