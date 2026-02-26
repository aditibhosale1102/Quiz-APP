import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const StudentLanding = () => {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "sans-serif" }}>
            <h1 style={{ fontSize: "50px", fontWeight: "300", color: "#333" }}>Hello, Student</h1>
            <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#666", marginBottom: "40px" }}>Welcome to Online Quiz</h2>

            <p style={{ fontSize: "18px", color: "#333", marginBottom: "30px" }}>
                You can access various features after Login.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <button
                    onClick={() => navigate("/student-signup")}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "12px 24px",
                        fontSize: "18px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Create Your Account
                </button>
                <button
                    onClick={() => navigate("/student-login")}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "12px 24px",
                        fontSize: "18px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default StudentLanding;
