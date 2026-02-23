import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "../pages/AdminDashboard.css";
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="cards-container">
          <div className="card students">
            <h3>Total Students</h3>
            <p>2</p>
          </div>

          <div className="card teachers">
            <h3>Total Teacher</h3>
            <p>1</p>
          </div>

          <div className="card courses">
            <h3>Total Courses</h3>
            <p>2</p>
          </div>

          <div className="card questions">
            <h3>Total Questions</h3>
            <p>3</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AdminDashboard;