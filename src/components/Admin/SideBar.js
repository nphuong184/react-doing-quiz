import { FaGem, FaTachometerAlt } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import sidebarBg from "../../assets/bg-admin.jpg";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            PAT Admin
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
            <Link to="/admins" />
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Features">
              <MenuItem>
                Quan ly user <Link to="/admins/manage-users"></Link>
              </MenuItem>
              <MenuItem>Quan ly bai quiz</MenuItem>
              <MenuItem>Quan ly cau hoi</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                &#169; Nguyen Phuong
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};
export default SideBar;
