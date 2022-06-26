import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";
// import { ToastContainer } from "react-toastify";

import Crypto from "./pages/crypto/Crypto";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Portfolio from "./pages/portfolio/Portfolio";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Stocks from "./pages/stocks/Stocks";
import { userInputs } from "./formSource";

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Dashboard />} />
              <Route path="/crypto">
                <Route index element={<Crypto />} />
                <Route path=":coinId" element={<Single />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/portfolio">
                <Route index element={<Portfolio />} />
                <Route path="new" element={<New inputs={userInputs} />} />
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/stocks">
                <Route index element={<Stocks />} />
                <Route path=":stockId" element={<Single />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
