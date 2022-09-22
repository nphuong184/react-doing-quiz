import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Header />
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
