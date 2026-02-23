import { logout } from "../services/authService";
import "../pages/AdminDashboard.css";
const AdminTopbar = () => {
  return (
    <div className="topbar">
      <h2>ONLINE QUIZ</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminTopbar;