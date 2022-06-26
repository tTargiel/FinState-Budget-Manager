import "./sidebar.scss";

import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout, reset } from "../../features/auth/authSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/'>
          <PaymentsRoundedIcon className="icon" />
          <span className="logo">FinState</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to='/'>
              <DashboardRoundedIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to='/portfolio'>
              <AccountBalanceWalletRoundedIcon className="icon" />
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to='/crypto'>
              <CurrencyBitcoinRoundedIcon className="icon" />
              <span>Cryptocurrencies</span>
            </Link>
          </li>
          <li>
            <Link to='/stocks'>
              <AutoGraphRoundedIcon className="icon" />
              <span>Stocks</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <AccountBalanceRoundedIcon className="icon" />
              <span>Bank transactions</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <p className="title">USER</p>
          <li>
            <Link to='/'>
              <AccountCircleRoundedIcon className="icon" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <div onClick={onLogout}>
              <LogoutRoundedIcon className="icon" />
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
