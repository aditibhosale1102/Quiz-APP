import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const StudentSignup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        mobile: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send to backend here
        navigate("/student-login");
    };

    return (
        <>
            <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", fontFamily: "sans-serif" }}>
                <h2 style={{ textAlign: "center", color: "#d32f2f", textTransform: "uppercase", marginBottom: "30px" }}>
                    Student Signup
                </h2>
                <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "5px" }}>Username</label>
                        <input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            placeholder="shubham1"
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="........"
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "5px" }}>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "5px" }}>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "5px" }}>Mobile</label>
                        <input
                            type="text"
                            name="mobile"
                            onChange={handleChange}
                            placeholder="Mobile"
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "5px" }}>Address</label>
                        <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            placeholder="Address"
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>

                    <div style={{ gridColumn: "span 2" }}>
                        <label style={{ display: "block", marginBottom: "5px" }}>Roll No</label>
                        <input
                            type="text"
                            name="rollNo"
                            onChange={handleChange}
                            placeholder="Roll Number"
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#fff" }}
                        />
                    </div>

                    <div style={{ gridColumn: "span 2" }}>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                padding: "10px 20px",
                                fontSize: "16px",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default StudentSignup;
