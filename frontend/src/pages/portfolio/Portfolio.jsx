import "./portfolio.scss";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "../../components/sidebar/Sidebar";
import Spinner from "../../components/spinner/Spinner";
// import StockForm from "../../components/stockform/StockForm";
import StockItem from "../../components/stockitem/StockItem";
import { getStocks, reset } from "../../features/stocks/stockSlice";

const Portfolio = () => {
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

  return (
    <div className="portfolio">
      <Sidebar />
      <div className="portfolioContainer">
        <div className="head">
          <div className="portfolioTitle">Manage your finances</div>
          <Link to="/portfolio/new" style={{ textDecoration: "none" }}>
            <button className='btn btn-block' type='submit'>
              Add new item to portfolio
            </button>
          </Link>
        </div>
        {/* <StockForm /> */}

        <section className='content'>
          {stocks.length > 0 ? (
            <div className='stocks'>
              <table className="stocks-table">
                <thead>
                  <tr>
                    <th className="coin">Name</th>
                    <th className="symbol">Symbol</th>
                    <th className="price">Price</th>
                    <th className="count">Count</th>
                    <th className="date">Date of buy</th>
                    <th className="action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.map((stock) => (
                    <StockItem key={stock._id} stock={stock} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h3>You have not set any stocks</h3>
          )}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
