import "../pages/AdminDashboard.css";
const AdminSidebar = () => {
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
        <li>Dashboard</li>
        <li>Teacher</li>
        <li>Student</li>
        <li>Courses</li>
        <li>Questions</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;