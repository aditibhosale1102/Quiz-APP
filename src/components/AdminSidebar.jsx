import { Link, useLocation } from "react-router-dom";
import "../pages/AdminDashboard.css";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="admin"
        />
        <h3>Admin</h3>
      </div>

      <ul>
        <li className={location.pathname === "/admin" ? "active" : ""}>
          <Link to="/admin">Dashboard</Link>
        </li>

        <li
          className={
            location.pathname === "/admin/teachers" ? "active" : ""
          }
        >
          <Link to="/admin/teachers">Teacher</Link>
        </li>

        <li
          className={
            location.pathname === "/admin/students" ? "active" : ""
          }
        >
          <Link to="/admin/students">Student</Link>
        </li>

        <li
          className={
            location.pathname === "/admin/courses" ? "active" : ""
          }
        >
          <Link to="/admin/courses">Courses</Link>
        </li>

        {/* Updated Questions Route */}
        <li
          className={
            location.pathname === "/admin/add-question" ? "active" : ""
          }
        >
<Link to="/admin/questions">Questions</Link>        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;