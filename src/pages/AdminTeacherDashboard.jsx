import "./AdminDashboard.css";

const AdminTeacherDashboard = () => {
  return (
    <div className="admin-content">
      <h2>Teacher Dashboard</h2>

      <div className="card-container">
        <div className="card">
          <h3>Total Teachers</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Pending Approvals</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Total Salary</h3>
          <p>₹2,50,000</p>
        </div>
      </div>
    </div>
  );
};

export default AdminTeacherDashboard;