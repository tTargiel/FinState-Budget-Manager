import React from 'react'
import PropTypes from 'prop-types'

GetCrypto.propTypes = {
  cryptoList: PropTypes.array,
}

GetCrypto.defaultProps = {
  cryptoList: [],
}

function GetCrypto(props) {
  const { cryptoList } = props;

  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th className="number">#</th>
          <th className="coin">Coin</th>
          <th className="symbol">Symbol</th>
          <th className="price">Price</th>
          <th className="tf">24h</th>
          <th className="sd">7d</th>
          <th className="mkt-cap">Market Capitalization</th>
        </tr>
      </thead>
      <tbody>
      {cryptoList.map(post => (
        <tr key={post.id} className="crypto-item">
          <td className="number">{post.market_cap_rank}</td>
          <td className="coin"><img src={post.image} alt={post.id} />{post.name}</td>
          <td className="symbol">{post.symbol.toUpperCase()}</td>
          <td className="price">${post.current_price.toLocaleString("en-US")}</td>
          <td className={post.price_change_percentage_24h_in_currency < 0 ? "red" : "green"}>{post.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
          <td className={post.price_change_percentage_7d_in_currency < 0 ? "red" : "green"}>{post.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
          <td className="mkt-cap">${post.market_cap.toLocaleString("en-US")}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default GetCrypto
