import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "./AddQuestion.css";

const AddQuestion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    course: "",
    question: "",
    marks: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/admin/view-questions");
      } else {
        console.error("Failed to add question");
        navigate("/admin/view-questions");
      }
    } catch (error) {
      console.error("Error adding question:", error);
      navigate("/admin/view-questions");
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="add-question-container">
          <h2>ADD QUESTION</h2>

          <form onSubmit={handleSubmit} className="question-form">
            <label>Course</label>
            <select name="course" onChange={handleChange} required>
              <option value="">Select Course</option>
              <option value="react">React</option>
              <option value="javascript">JavaScript</option>
              <option value="django">Django</option>
            </select>

            <label>Question</label>
            <textarea
              name="question"
              placeholder="Enter Question"
              onChange={handleChange}
              required
            />

            <label>Marks</label>
            <input
              type="number"
              name="marks"
              placeholder="Enter Marks"
              onChange={handleChange}
              required
            />

            <label>Option 1</label>
            <input
              type="text"
              name="option1"
              placeholder="Option 1"
              onChange={handleChange}
              required
            />

            <label>Option 2</label>
            <input
              type="text"
              name="option2"
              placeholder="Option 2"
              onChange={handleChange}
              required
            />

            <label>Option 3</label>
            <input
              type="text"
              name="option3"
              placeholder="Option 3"
              onChange={handleChange}
            />

            <label>Option 4</label>
            <input
              type="text"
              name="option4"
              placeholder="Option 4"
              onChange={handleChange}
            />

            <label>Answer</label>
            <select name="answer" onChange={handleChange} required>
              <option value="">Select Correct Answer</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>

            <button type="submit">ADD</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;