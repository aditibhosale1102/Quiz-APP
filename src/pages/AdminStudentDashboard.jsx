import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "../pages/AdminDashboard.css";

const AdminStudentDashboard = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [studentMarks, setStudentMarks] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));

    let total = 0;
    let marks = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      total++;
      marks += Number(data.marks || 0);
    });

    setTotalStudents(total);
    setStudentMarks(marks);
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="cards-container">
          {/* Clickable Card - Students List */}
          <div
            className="card students"
            onClick={() => navigate("/admin/students/list")}
            style={{ cursor: "pointer" }}
          >
            <h3>Total Students</h3>
            <p>{totalStudents}</p>
          </div>

          {/* Clickable Card - Student Marks Table */}
          <div
            className="card pending"
            onClick={() => navigate("/admin-view-student-marks")}
            style={{ cursor: "pointer" }}
          >
            <h3>Student Marks</h3>
            <p>{studentMarks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStudentDashboard;