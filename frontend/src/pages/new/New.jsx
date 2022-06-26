import "./new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import StockForm from "../../components/stockform/StockForm";

const New = ({ inputs }) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="newTitle">Add new item to your portfolio</div>
        <div className="form">
          {/* <div className="left"></div> */}
          <div className="right">
            {/* <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} value={input.placeholder} />
                </div>
              ))}
            </form>
            <button>Add</button> */}
            <StockForm data={inputs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
