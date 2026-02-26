import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser(email, password, role);
      if (role === "student") {
        navigate("/student-landing");
      } else if (role === "teacher") {
        navigate("/teacher-landing");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;