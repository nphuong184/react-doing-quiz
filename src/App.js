import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container">
          <Outlet />
        </div>
        <div className="app-content"></div>
      </div>
    </div>
  );
}

export default App;
