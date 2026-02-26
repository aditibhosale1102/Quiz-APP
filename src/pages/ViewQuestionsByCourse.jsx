import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "../pages/AdminDashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewQuestionsByCourse = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/questions");
        if (response.ok) {
          const questions = await response.json();
          // Aggregate questions by course
          const courseMap = {};
          questions.forEach(q => {
            const courseName = q.course.charAt(0).toUpperCase() + q.course.slice(1);
            if (!courseMap[courseName]) {
              courseMap[courseName] = { id: courseName, name: courseName, totalQuestions: 0, totalMarks: 0 };
            }
            courseMap[courseName].totalQuestions += 1;
            courseMap[courseName].totalMarks += parseInt(q.marks) || 0;
          });
          setCourses(Object.values(courseMap));
        }
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="table-container">
          <h2>Select Course To View Questions</h2>

          <table className="course-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Total Questions</th>
                <th>Total Marks</th>
                <th>View Question</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.totalQuestions}</td>
                  <td>{course.totalMarks}</td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => navigate(`/admin/view-questions/${course.id}`)}
                    >
                      👁 View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default ViewQuestionsByCourse;