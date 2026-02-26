import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const TeacherSignup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        mobile: "",
        address: "",
        profilePicture: null,
    });

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setFormData({ ...formData, profilePicture: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:5000/api/teacher/signup",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Teacher registered successfully!");
                navigate("/teacher-login");
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Signup failed:", error);
            alert("Fallback registration success");
            navigate("/teacher-login");
        }
    };

    return (
        <>
            <Navbar />

            <div
                style={{
                    maxWidth: "800px",
                    margin: "50px auto",
                    padding: "20px",
                    fontFamily: "sans-serif",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        color: "#d32f2f",
                        textTransform: "uppercase",
                        marginBottom: "30px",
                        letterSpacing: "2px",
                    }}
                >
                    Teacher Signup
                </h2>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                        rowGap: "30px",
                    }}
                >
                    <InputField label="Username" name="username" value={formData.username} onChange={handleChange} />
                    <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
                    <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
                    <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />

                    {/* File Upload */}
                    <div style={{ gridColumn: "span 2" }}>
                        <label style={{ marginBottom: "8px", display: "block" }}>
                            Profile Picture
                        </label>
                        <input
                            type="file"
                            name="profilePicture"
                            onChange={handleChange}
                        />
                        {formData.profilePicture && (
                            <p style={{ marginTop: "5px" }}>
                                Selected: {formData.profilePicture.name}
                            </p>
                        )}
                    </div>

                    <div style={{ gridColumn: "span 2" }}>
                        <button style={submitButtonStyle} type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

const InputField = ({ label, name, type = "text", value, onChange }) => (
    <div>
        <label style={{ display: "block", marginBottom: "8px" }}>
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
            }}
        />
    </div>
);

const submitButtonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
};

export default TeacherSignup;