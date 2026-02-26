import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminTeacherDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-content">
      <h2>Teacher Dashboard</h2>

      <div className="card-container">
        <div className="card">
          <h3>Total Teacher</h3>
          <p>10</p>
        </div>

        {/* CLICKABLE CARD */}
        <div
          className="card pending-card"
          onClick={() => navigate("/admin/pending-teachers")}
          style={{ cursor: "pointer" }}
        >
          <h3>Total Pending Teacher</h3>
          <p>5</p>
        </div>

        <div className="card salary-card">
          <h3>Total Teacher Salary</h3>
          <p>₹ 50000</p>
        </div>
      </div>
    </div>
  );
};

export default AdminTeacherDashboard;