import "./stocks.scss";

import axios from "axios";
import { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Tile from "../../components/tile/Tile";

const Stocks = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function fetchNewsList() {
      try {
        const result = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ed0ce1635d248f0abf3c602470b6f98");
        console.log(result.data.articles);
        setNewsList(result.data.articles);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNewsList();
  }, []);

  return (
    <div className="stocks">
      <Sidebar />
      <div className="stocksContainer">
        <div className="stocksTitle">Search for stocks and read up-to-date news</div>
        {newsList.length > 0 ? (
          <div className='tiles'>
            {newsList.map((news, index) => (
              <Tile key={index} data={news} />
            ))}
          </div>
        ) : (
          <h3>Fetching news from API source...</h3>
        )}
      </div>
    </div>
  );
};

export default Stocks;
