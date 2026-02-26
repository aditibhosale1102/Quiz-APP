import { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "./ViewCourse.css";

const ViewCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const handleDelete = (id) => {
    // Optional: backend delete logic could go here in the future
    alert(`Delete course id: ${id} clicked!`);
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="table-container">
          <h2>Courses</h2>

          <table className="course-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Total Question</th>
                <th>Total Marks</th>
                <th>Delete</th>
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
                      onClick={() => handleDelete(course.id)}
                      style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Delete
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

export default ViewCourse;