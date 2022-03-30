import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
