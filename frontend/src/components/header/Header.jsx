import "./header.scss";

import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout, reset } from "../../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="header">
      <div className='headerContainer'>
        <header className='head'>
          <div className='logo'>
            <PaymentsRoundedIcon className="icon" />
            <Link to='/'>FinState</Link>
          </div>
          <ul>
            {user ? (
              <li>
                <button className='btn' onClick={onLogout}>
                  <LogoutRoundedIcon /> Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to='/login'>
                    <LoginRoundedIcon /> Login
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <PersonRoundedIcon /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
