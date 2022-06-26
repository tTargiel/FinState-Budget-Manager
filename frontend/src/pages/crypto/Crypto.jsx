import "./crypto.scss";

import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";

const Crypto = () => {
  return (
    <div className="crypto">
      <Sidebar />
      <div className="cryptoContainer">
        <div className="cryptoTitle">Browse and manage cryptocurrencies</div>
        <Datatable />
      </div>
    </div>
  );
};

export default Crypto;
