import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "../pages/AdminDashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [totalQuestions, setTotalQuestions] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const navigate = useNavigate();

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, totalQuestions, totalMarks }),
      });

      if (response.ok) {
        navigate("/admin/view-course");
      } else {
        console.error("Failed to add course");
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="form-container">
          <h2 className="form-title">ADD COURSE</h2>

          <form className="course-form" onSubmit={handleAddCourse}>
            <label>Course Name</label>
            <input
              type="text"
              placeholder="Enter course name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Total Questions</label>
            <input
              type="number"
              placeholder="Enter total questions"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(e.target.value)}
              required
            />

            <label>Total Marks</label>
            <input
              type="number"
              placeholder="Enter total marks"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
              required
            />

            <button type="submit" className="add-btn">
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;