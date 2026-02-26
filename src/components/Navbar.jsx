import { Link } from "react-router-dom";
import { logout } from "../services/authService";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Online Quiz</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {/* FIXED HERE */}
        <Link to="/admin-login">Admin</Link>

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;