import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const StudentSidebar = () => {
    const navigate = useNavigate();
    const [studentName, setStudentName] = useState("Student");

    useEffect(() => {
        const name = localStorage.getItem("studentName");
        if (name) {
            setStudentName(name);
        }
    }, []);

    return (
        <div className="sidebar" style={{ backgroundColor: "#222" }}>
            <div className="sidebar-header" style={{ borderBottom: "1px solid #333", padding: "20px" }}>
                <h2 style={{ color: "white", margin: 0, textTransform: "uppercase", fontSize: "18px" }}>ONLINE QUIZ <span style={{ float: 'right', cursor: 'pointer' }}>≡</span></h2>
            </div>

            <div className="profile-section" style={{ textAlign: "center", padding: "20px 0", borderBottom: "1px solid #333" }}>
                <div style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#ccc",
                    borderRadius: "50%",
                    margin: "0 auto 10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden"
                }}>
                    {/* Default user avatar icon SVG */}
                    <svg viewBox="0 0 24 24" fill="none" style={{ width: "60px", height: "60px" }}>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="#555" />
                    </svg>
                </div>
                <h3 style={{ color: "#eee", margin: "5px 0", fontSize: "16px", fontWeight: "normal" }}>{studentName}</h3>
                <p style={{ color: "#aaa", margin: 0, fontSize: "12px" }}>( Student )</p>
            </div>

            <ul className="sidebar-links">
                <li>
                    <Link to="/student-dashboard" style={{ display: "flex", alignItems: "center", gap: "10px", color: "white" }}>
                        <span>⏱</span> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/student/exam" style={{ display: "flex", alignItems: "center", gap: "10px", color: "white" }}>
                        <span>📄</span> Exam
                    </Link>
                </li>
                <li>
                    <Link to="/student/marks" style={{ display: "flex", alignItems: "center", gap: "10px", color: "white" }}>
                        <span>↑↓</span> Marks
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default StudentSidebar;
