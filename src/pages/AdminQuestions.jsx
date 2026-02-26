import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "./AdminDashboard.css";

const AdminQuestions = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="cards-container">
          
          {/* Add Question Card */}
          <div
            className="card add-question"
            onClick={() => navigate("/admin/add-question")}
            style={{ cursor: "pointer" }}
          >
            <h3>Add Question</h3>
            <span style={{ fontSize: "30px" }}>+</span>
          </div>

          {/* View Questions Card */}
          <div
            className="card view-question"
            onClick={() => navigate("/admin/view-questions")}
            style={{ cursor: "pointer" }}
          >
            <h3>View Questions</h3>
            <span style={{ fontSize: "30px" }}>👁</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminQuestions;