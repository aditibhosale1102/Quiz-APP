import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const StudentLoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/student/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem("studentName", data.user.name);
                navigate("/student-dashboard");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Login failed:", error);
            // Fallback for UI if backend is not started
            localStorage.setItem("studentName", "Samarth");
            navigate("/student-dashboard");
        }
    };

    return (
        <>
            <div style={{
                minHeight: "calc(100vh - 60px)",
                background: "linear-gradient(to right, #cf313d, #2f5f98)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "sans-serif"
            }}>
                <div style={{
                    backgroundColor: "#222",
                    padding: "50px",
                    borderRadius: "8px",
                    textAlign: "center",
                    width: "400px",
                    color: "white"
                }}>
                    <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>STUDENT LOGIN</h2>
                    <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "30px" }}>Please enter your login and password!</p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="shubham1"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "12px",
                                marginBottom: "20px",
                                borderRadius: "30px",
                                border: "2px solid #5ab9ea",
                                backgroundColor: "transparent",
                                color: "white",
                                outline: "none",
                                textAlign: "center"
                            }}
                        />
                        <input
                            type="password"
                            placeholder="........"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "12px",
                                marginBottom: "30px",
                                borderRadius: "30px",
                                border: "2px solid #5ab9ea",
                                backgroundColor: "#fff",
                                color: "black",
                                outline: "none",
                                textAlign: "center"
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "transparent",
                                color: "white",
                                border: "2px solid #28a745",
                                padding: "10px 40px",
                                borderRadius: "30px",
                                fontSize: "16px",
                                cursor: "pointer",
                                transition: "background-color 0.3s"
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(40, 167, 69, 0.2)'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default StudentLoginForm;
