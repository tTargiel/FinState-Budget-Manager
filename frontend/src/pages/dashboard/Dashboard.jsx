import "./dashboard.scss";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Sidebar from "../../components/sidebar/Sidebar";
import Spinner from "../../components/spinner/Spinner";
import Widget from "../../components/widget/Widget";
import { getStocks, reset } from "../../features/stocks/stockSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { stocks, isLoading, isError, message } = useSelector(
    (state) => state.stocks
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    else {
      dispatch(getStocks());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  function sum(stocks) {
    var sum = 0;
    for (let i = 0; i < stocks.length; i++) {
      sum += (stocks[i].count * stocks[i].price);
    }
    return sum;
  }

  function free(stocks) {
    var free = 0;
    for (let i = 0; i < stocks.length; i++) {
      if (stocks[i].symbol === "USD" || stocks[i].symbol === "CHF" || stocks[i].symbol === "TUSD") {
        free += (stocks[i].count * stocks[i].price);
      }
    }
    return free;
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <div className="widgets">
          <Widget type="user" number={user.name} percent="0" />
          <Widget type="stocks" number={stocks.length} percent={((stocks.length-6)*100/6).toFixed(2)} />
          <Widget type="earnings" number={sum(stocks).toFixed(2)} percent={((sum(stocks).toFixed(2)-free(stocks).toFixed(2)*3)*10/free(stocks).toFixed(2)*2).toFixed(2)} />
          <Widget type="balance" number={free(stocks).toFixed(2)} percent={((free(stocks).toFixed(2)*1.12-free(stocks).toFixed(2))*-10/free(stocks).toFixed(2)).toFixed(2)} />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
