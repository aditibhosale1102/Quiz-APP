import { useNavigate } from "react-router-dom";

const StudentTopbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="topbar" style={{ backgroundColor: "#333", display: "flex", justifyContent: "flex-end", padding: "10px 20px" }}>
            <button
                onClick={handleLogout}
                style={{
                    border: "1px solid #5ab9ea",
                    backgroundColor: "#17a2b8",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default StudentTopbar;
