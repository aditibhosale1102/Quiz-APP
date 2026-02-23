import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

const AdminLayout = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="dashboard-content">
        <AdminTopbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;