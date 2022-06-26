import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div className="singleTitle">Information</div>
      </div>
    </div>
  );
};

export default Single;
