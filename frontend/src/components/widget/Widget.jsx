import "./widget.scss";

import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Widget = ({ type, number, percent }) => {
  let data;

  switch (type) {
  case "user":
    data = {
      title: "USER",
      isMoney: false,
      link: "See all users",
      amount: number,
      diff: percent,
      icon: <PersonOutlineRoundedIcon className="icon" style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple", }} />,
    };
    break;
  case "stocks":
    data = {
      title: "STOCKS",
      isMoney: false,
      link: "See all stocks",
      amount: number,
      diff: percent,
      icon: <ShoppingCartRoundedIcon className="icon" style={{ backgroundColor: "rgba(0, 255, 0, 0.2)", color: "green", }} />,
    };
    break;
  case "earnings":
    data = {
      title: "INVESTED MONEY",
      isMoney: true,
      link: "View invested money",
      amount: number,
      diff: percent,
      icon: <MonetizationOnRoundedIcon className="icon" style={{ backgroundColor: "rgba(0, 0, 255, 0.2)", color: "blue", }} />,
    };
    break;
  case "balance":
    data = {
      title: "FREE BALANCE",
      isMoney: true,
      link: "View balance",
      amount: number,
      diff: percent,
      icon: <AccountBalanceWalletRoundedIcon className="icon" style={{ backgroundColor: "rgba(255, 128, 0, 0.2)", color: "brown", }} />,
    };
    break;
  default:
    break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{number}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          {(percent >= 0) ? <div className="positive"><KeyboardArrowUpRoundedIcon />{percent}%</div> : <div className="negative"><KeyboardArrowDownRoundedIcon />{percent}%</div>}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
