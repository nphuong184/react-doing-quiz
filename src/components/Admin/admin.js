import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
  const [collapsed, setCollaped] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollaped(!collapsed)}></FaBars>
        <div className="admin-header"></div>
        <div className="admin-main">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Admin;
