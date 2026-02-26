import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "./AdminDashboard.css";

const ViewQuestions = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/questions");
        if (response.ok) {
          const allQuestions = await response.json();
          const filtered = allQuestions.filter(
            (q) => q.course.toLowerCase() === courseName.toLowerCase()
          );
          setQuestions(filtered);
        }
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };
    fetchQuestions();
  }, [courseName]);

  const handleDelete = (id) => {
    // For now we'll just filter it locally for demonstration
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="table-container">
          <div style={{ backgroundColor: '#4a90e2', padding: '10px', color: 'white', textAlign: 'center', borderRadius: '5px 5px 0 0' }}>
            <h2 style={{ margin: 0 }}>Questions</h2>
          </div>

          <table className="course-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Question</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Marks</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Delete Question</th>
              </tr>
            </thead>

            <tbody>
              {questions.length > 0 ? (
                questions.map((q) => (
                  <tr key={q.id} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '10px' }}>{q.question}</td>
                    <td style={{ padding: '10px' }}>{q.marks}</td>
                    <td style={{ padding: '10px' }}>
                      <button
                        onClick={() => handleDelete(q.id)}
                        style={{ backgroundColor: '#4a90e2', color: 'white', border: 'none', padding: '5px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
                      >
                        🗑
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ padding: '10px', textAlign: 'center' }}>No questions found for this course.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewQuestions;