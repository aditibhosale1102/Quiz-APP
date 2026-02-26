import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "../pages/AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const AdminCourses = () => {
  const navigate = useNavigate();

  const handleAddCourse = () => {
    navigate("/admin/add-course");
  };

  const handleViewCourse = () => {
    navigate("/admin/view-course");   // Make sure this route exists
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="cards-container">
          
          {/* Add Course Card */}
          <div
            className="card add-course"
            onClick={handleAddCourse}
            style={{ cursor: "pointer" }}
          >
            <h3>Add Course</h3>
            <span className="icon">＋</span>
          </div>

          {/* View Course Card */}
          <div
            className="card view-course"
            onClick={handleViewCourse}
            style={{ cursor: "pointer" }}
          >
            <h3>View Course</h3>
            <span className="icon">👁</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminCourses;