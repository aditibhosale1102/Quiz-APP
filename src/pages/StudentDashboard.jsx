import { useNavigate } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar";
import StudentTopbar from "../components/StudentTopbar";
import "./TeacherDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // CLICK FUNCTION
  const goToStudents = () => {
    navigate("/admin/students");
  };

  return (
    <div className="admin-dashboard">
      <StudentSidebar />

      <div className="dashboard-content">
        <StudentTopbar />

        <div className="cards-container">
          {/* CLICKABLE CARD */}
          <div
            className="card students"
            style={{ backgroundColor: "#f05b5b", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "white" }}>Total Exams Available</h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "white" }}>
              <span style={{ fontSize: "24px" }}>📄</span>
              <p style={{ fontSize: "32px", margin: 0, fontWeight: "bold" }}>3</p>
            </div>
          </div>

          <div
            className="card marks"
            style={{ backgroundColor: "#613b3b", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "white" }}>Total Questions</h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "white" }}>
              <span style={{ fontSize: "24px" }}>❓</span>
              <p style={{ fontSize: "32px", margin: 0, fontWeight: "bold" }}>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;